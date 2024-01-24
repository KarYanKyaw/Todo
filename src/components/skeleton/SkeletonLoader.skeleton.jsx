import React from "react";

const SkeletonLoader = () => {
  const arr = Array.from({ length: 5 });

  return (
    <div>
      {arr.map((_, index) => (
        <div
          key={index}
          className="h-16  animate-pulse bg-neutral-400 mb-4"
        ></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
