interface Hired {
  dateHired: Date;
}

const divideAndConquer = (hiredArray: Array<Hired>): Array<Hired> => {
  // Return immediately if nothing to sort
  if (hiredArray.length <= 1) return hiredArray;

  // If exactly two items are present, return the sorted array
  if (hiredArray.length === 2) {
    if (hiredArray[1].dateHired > hiredArray[0].dateHired) {
      return [hiredArray[1], hiredArray[0]];
    }
    return hiredArray;
  }

  // More than two items exist, so let's divide and conquer!

  // Calculate a midpoint
  const splitPoint = Math.floor(hiredArray.length / 2);

  // Migrate the left side to a new array to be handled separately
  const leftSide = hiredArray.splice(0, splitPoint);

  // Sort both sides
  const sortedLeftSide = divideAndConquer(leftSide);
  const sortedRightSide = divideAndConquer(hiredArray);

  // Now that both sides are sorted, merge the sorted arrays
  const merged: Array<Hired> = [];
  while (sortedLeftSide.length + sortedRightSide.length > 0) {
    // If nothing remains on either side, merge with the full array of the opposite side and exit immediately
    if (!sortedLeftSide.length) {
      merged.push(...sortedRightSide);
      break;
    } else if (!sortedRightSide.length) {
      merged.push(...sortedLeftSide);
      break;
    } else {
      // Both sides definitely contain at least one item, so we now need to pick the largest item from either side
      if (sortedLeftSide[0].dateHired > sortedRightSide[0].dateHired) {
        merged.push(sortedLeftSide.shift());
      } else {
        merged.push(sortedRightSide.shift());
      }
    }
  }

  return merged;
};

export { divideAndConquer };
