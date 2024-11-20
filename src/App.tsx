import React, { useState, useRef } from 'react';
import Visualizer from './Components/Visualizer.tsx';
import Controls from './Components/Controls.tsx';
import { quickSort } from './Algorithms/Quicksort.ts';
import { insertionSort } from './Algorithms/InsertionSort.ts';
import { quickSortMedianOfThree } from './Algorithms/QuicksortMedian3.ts';
import './App.css';

const App: React.FC = () => {
  const [array, setArray] = useState<number[]>(generateArray());
  const [sorting, setSorting] = useState(false);
  const sortingRef = useRef(false);

  function generateArray() {
    return Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) - 1);
  }

  const handleSort = async (type: "standard" | "medianOfThree" | "insertion") => {
    if (sorting) return;
    setSorting(true);
    sortingRef.current = true;
  
    const newArray = [...array];
    if (type === "standard") {
      await quickSort(newArray, setArray, 88);
    } else if (type === "medianOfThree") {
      await quickSortMedianOfThree(newArray, setArray, 88, sortingRef);
    } else if (type === "insertion") {
      await insertionSort(newArray, setArray, 88);
    }
  
    setSorting(false);
    sortingRef.current = false;
  };

  const handleReset = () => {
    sortingRef.current = false;
    setSorting(false);
    const newArray = generateArray();
    setArray(newArray);

    setTimeout(() => {
      setArray([...newArray]);
    }, 0);
  };

  return (
    <div className="App">
      <h1>Visualizing Algorithms</h1>
      <h2>Quicksort</h2>
      <Visualizer array={array} />
      <Controls
  onSortStandard={() => handleSort("standard")}
  onSortMedianOfThree={() => handleSort("medianOfThree")}
  onSortInsertion={() => handleSort("insertion")}
  onReset={handleReset}
/>    </div>
  );
};

export default App;