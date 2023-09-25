import React from "react";

export default function CustomSkeleton({
  number,
  height,
  borderRadius,
  width,
}) {
  const skeletons = Array(number)
    .fill(0)
    .map((el, index) => (
      <div
        style={{
          width: `${width ? `${width}px` : "100%"}`,
        }}
        key={index}
      >
        <div className={`flex flex-row mb-1 items-center py-1  `}>
          <span
            style={{
              height: `${height}px`,
              borderRadius: `${borderRadius}px`,
            }}
            className="w-full bg-gray-200    animate-pulse"
          ></span>
        </div>
      </div>
    ));

  return (
    <div>
      {skeletons.map((sk) => {
        return sk;
      })}
    </div>
  );
}
