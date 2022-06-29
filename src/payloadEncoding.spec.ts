import {
  decodePayloadToObject,
  encodePayloadToBuffer,
  Side,
  Type,
} from "./payloadEncoding";

const max64UnsignedInteger = "18446744073709551615";
const payload = {
  symbol: "♔♕♖♗",
  price: BigInt(0),
  quantity: BigInt(max64UnsignedInteger),
  side: Side.Sell,
  type: Type.Market,
};

const payloadBufferHexSymbol = "e29994e29995e29996e2999700";
const payloadBufferHexPrice = "0000000000000000";
const payloadBufferHexQuantity = "ffffffffffffffff";
const payloadBufferHexEnums = "03";
const payloadBufferHexFull =
  payloadBufferHexSymbol +
  payloadBufferHexPrice +
  payloadBufferHexQuantity +
  payloadBufferHexEnums;

describe("encodes the data as expected", () => {
  it("produces the correct utf-8 string for symbol", () => {
    const result = encodePayloadToBuffer(payload);

    expect(result.subarray(0, 13).toString("hex")).toEqual(
      // UTF8 bytes for "♔♕♖♗" followed by an empty byte
      payloadBufferHexSymbol
    );
  });

  it("produces the correct price", () => {
    const result = encodePayloadToBuffer(payload);

    expect(result.subarray(13, 21).toString("hex")).toEqual(
      // All 00 for a price of 0
      payloadBufferHexPrice
    );
  });

  it("produces the correct quantity", () => {
    const result = encodePayloadToBuffer(payload);

    expect(result.subarray(21, 29).toString("hex")).toEqual(
      // All ff for the maximum 64 bit unsigned integer
      payloadBufferHexQuantity
    );
  });

  it("produces the correct quantity", () => {
    const result = encodePayloadToBuffer(payload);

    expect(result.subarray(29, 30).toString("hex")).toEqual(
      // Sell + Market enum equals one byte value of 03
      payloadBufferHexEnums
    );
  });

  it("produces the correct fully encoded buffer", () => {
    const result = encodePayloadToBuffer(payload);

    expect(result.toString("hex")).toEqual(payloadBufferHexFull);
  });

  it("doesn't encode more than four characters of the symbol", () => {
    const result = encodePayloadToBuffer({
      ...payload,
      symbol: "♔♕♖♗♔♕♖♗",
    });

    expect(result.toString("hex")).toEqual(payloadBufferHexFull);
  });

  it("encodes less than four characters producing a smaller buffer with the correct value", () => {
    const result = encodePayloadToBuffer({
      ...payload,
      symbol: "♔",
    });

    // UTF8 bytes for "♔" followed by an empty byte
    const smallerSymbol = "e2999400";
    expect(result.subarray(0, 4).toString("hex")).toEqual(smallerSymbol);
    expect(result.length).toBe(21);
  });
});

describe("decodes the data as expected", () => {
  it("produces the correct payload object", () => {
    const decodedObject = decodePayloadToObject(
      Buffer.from(payloadBufferHexFull, "hex")
    );

    expect(decodedObject).toEqual(payload);
  });

  it("handles different enum values properly", () => {
    const decodedObject = decodePayloadToObject(
      Buffer.from(
        payloadBufferHexSymbol +
          payloadBufferHexPrice +
          payloadBufferHexQuantity +
          "00",
        "hex"
      )
    );

    expect(decodedObject).toEqual({
      ...payload,
      side: Side.Buy,
      type: Type.Limit,
    });
  });
});
