export async function insertionSort(
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;

      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    array[j + 1] = key;

    setArray([...array]);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}