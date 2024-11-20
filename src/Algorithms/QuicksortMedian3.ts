export async function quickSortMedianOfThree(
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number,
  sortingRef: React.RefObject<boolean>,
  low = 0,
  high = array.length - 1
) {
  if (!sortingRef.current) return;

  if (low < high) {
    const pivotIndex = await partitionMedianOfThree(array, low, high, setArray, delay, sortingRef);

    if (sortingRef.current) {
      await quickSortMedianOfThree(array, setArray, delay, sortingRef, low, pivotIndex - 1);
    }
    if (sortingRef.current) {
      await quickSortMedianOfThree(array, setArray, delay, sortingRef, pivotIndex + 1, high);
    }
  }
}

async function partitionMedianOfThree(
  array: number[],
  low: number,
  high: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number,
  sortingRef: React.RefObject<boolean>
) {
  const mid = Math.floor((low + high) / 2);
  const pivotIndex = medianOfThree(array, low, mid, high);

  [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];
  const pivot = array[high];

  let i = low;

  for (let j = low; j < high; j++) {
    if (!sortingRef.current) return i;

    if (array[j] <= pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  [array[i], array[high]] = [array[high], array[i]];
  setArray([...array]);
  await new Promise((resolve) => setTimeout(resolve, delay));

  return i;
}

function medianOfThree(array: number[], low: number, mid: number, high: number) {
  if (array[low] > array[mid]) [array[low], array[mid]] = [array[mid], array[low]];
  if (array[low] > array[high]) [array[low], array[high]] = [array[high], array[low]];
  if (array[mid] > array[high]) [array[mid], array[high]] = [array[high], array[mid]];

  return mid;
}