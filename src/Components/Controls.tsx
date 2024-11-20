import React from 'react';

type ControlsProps = {
  onSortStandard: () => void;
  onSortMedianOfThree: () => void;
  onSortInsertion: () => void;
  onReset: () => void;
};

const Controls: React.FC<ControlsProps> = ({ onSortStandard, onSortMedianOfThree, onSortInsertion, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onSortStandard}>Quick Sort (Standard)</button>
      <button onClick={onSortMedianOfThree}>Quick Sort (Median of Three)</button>
      <button onClick={onSortInsertion}>Insertion Sort</button>
      <button onClick={onReset}>Reset Array</button>
    </div>
  );
};

export default Controls;