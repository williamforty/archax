enum Side {
  Buy = 0,
  Sell = 1,
}

enum Type {
  Limit = 0,
  Market = 1,
}

interface Payload {
  symbol: string;
  price: bigint;
  quantity: bigint;
  side: Side;
  type: Type;
}

const unsignedInt64Bytes = 8;

const encodePayloadToBuffer = (payload: Payload): Buffer => {
  const symbolToWrite = payload.symbol.substring(0, 4);
  const symbolBuffer = Buffer.from(symbolToWrite);
  // Assuming a variable length string, there needs to be something to tell the consumer where the data ends, as theoretically the numbers that follow could happen to be valid utf-8.
  // Using an empty byte as a terminator. This means an assumption for this answer is we never can send a null character as part of the symbol.
  // Another possible solution would be to always allocate a fixed 16 bytes for the entire maximum length utf-8 string, but this would nearly always waste space in the buffer.
  const nullBuffer = Buffer.alloc(1);
  const priceBuffer = Buffer.alloc(unsignedInt64Bytes);
  priceBuffer.writeBigUInt64BE(payload.price);
  const quantityBuffer = Buffer.alloc(unsignedInt64Bytes);
  quantityBuffer.writeBigUInt64BE(payload.quantity);
  // Both enums will fit easily into a single byte of space in the buffer. We'd need to modify approach a bit if adding new enums, but for now this is sufficient and saves prematurely optimising.
  const enumsBuffer = Buffer.alloc(1);
  enumsBuffer.writeInt8(parseInt(`${payload.side}${payload.type}`, 2));
  return Buffer.concat([
    symbolBuffer,
    nullBuffer,
    priceBuffer,
    quantityBuffer,
    enumsBuffer,
  ]);
};

const decodePayloadToObject = (buffer: Buffer): Payload => {
  const symbolLength = buffer.findIndex((byte) => byte === 0);
  const symbol = buffer.subarray(0, symbolLength).toString();
  const price = buffer.readBigUInt64BE(symbolLength + 1);
  const quantity = buffer.readBigUInt64BE(
    symbolLength + 1 + unsignedInt64Bytes
  );
  const enumPosition =
    symbolLength + 1 + unsignedInt64Bytes + unsignedInt64Bytes;
  const enums = buffer[enumPosition];
  const enumsBinary = `00${(enums >>> 0).toString(2)}`.slice(-2);
  const side = parseInt(enumsBinary[0]);
  const type = parseInt(enumsBinary[1]);
  return {
    symbol,
    price,
    quantity,
    side,
    type,
  };
};

export { Side, Type, Payload, decodePayloadToObject, encodePayloadToBuffer };
