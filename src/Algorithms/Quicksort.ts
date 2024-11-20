export async function quickSort(
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number,
  low = 0,
  high = array.length - 1
) {
  if (low < high) {
    const pivotIndex = await partition(array, low, high, setArray, delay);
    await quickSort(array, setArray, delay, low, pivotIndex - 1);
    await quickSort(array, setArray, delay, pivotIndex + 1, high);
  }
}

async function partition(
  array: number[],
  low: number,
  high: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) {
  const pivot = array[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
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