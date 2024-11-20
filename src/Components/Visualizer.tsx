import React from 'react';
import './Visualizer.css';

type VisualizerProps = {
  array: number[];
};

const Visualizer: React.FC<VisualizerProps> = ({ array }) => {
  return (
    <div className="visualizer">
      {array.map((value, idx) => (
        <div
          key={idx}
          className="bar"
          style={{
            height: `${value}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Visualizer;