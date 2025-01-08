import { useRef, useState } from "react";
import { Marker } from "@/components/marker";

const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
  const val = 56;
  const [leftMargin, setLeftMargin] = useState(val);
  const [rightMargin, setRightMargin] = useState(56);

  const [isDraggingLeft, setIsDraggingLeft] = useState(false);
  const [isDraggingRight, setIsDraggingRight] = useState(false);

  const rulerRef = useRef<HTMLDivElement>(null);

  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true);
  };

  const handleRightMouseDown = () => {
    setIsDraggingRight(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const PAGE_WIDTH = 816;
    const MINIMUM_SPACE = 100;
    // handles movement of ruler within a container
    //
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector("#ruler-container");

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const relativeX = e.clientX - containerRect.left;
        //   max and min value it can have
        const rawPosition = Math.max(0, Math.min(PAGE_WIDTH, relativeX));

        if (isDraggingLeft) {
          //   max position it can be dragged to
          const maxLeftPosition = PAGE_WIDTH - rightMargin - MINIMUM_SPACE;
          const newLeftPosition = Math.min(rawPosition, maxLeftPosition);
          setLeftMargin(newLeftPosition);
        } else if (isDraggingRight) {
          const maxRightPosition = PAGE_WIDTH - (leftMargin + MINIMUM_SPACE);
          const newRightPosition = Math.max(PAGE_WIDTH - rawPosition, 0);
          const constrainedRightPosition = Math.min(
            newRightPosition,
            maxRightPosition,
          );
          setRightMargin(constrainedRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  // reset ruler margin pointers
  const handleLeftDoubleClick = () => {
    setLeftMargin(56);
  };
  const handleRightDoubleClick = () => {
    setRightMargin(56);
  };

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={
        "w-[816px] mx-auto h-6 border-b border-gray-300 flex items-end relative select-none print:hidden"
      }
    >
      <div id={"ruler-container"} className={"w-full h-full relative"}>
        <Marker
          position={leftMargin}
          isLeft={true}
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <Marker
          position={rightMargin}
          isLeft={false}
          isDragging={isDraggingRight}
          onMouseDown={handleRightMouseDown}
          onDoubleClick={handleRightDoubleClick}
        />
        <div className={"absolute inset-0 bottom-0 h-full"}>
          <div className={"relative h-full w-[816px]"}>
            {markers.map((marker) => {
              const position = (marker * 816) / 82;

              return (
                <div
                  key={marker}
                  className={"absolute bottom-0"}
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div
                        className={
                          "absolute bottom-0 w-[1px] h-2 bg-neutral-500"
                        }
                      ></div>
                      <span
                        className={
                          "absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2"
                        }
                      >
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}
                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <div
                      className={
                        "absolute bottom-0 w-[1px] h-1.5 bg-neutral-500"
                      }
                    ></div>
                  )}
                  {marker % 5 !== 0 && (
                    <div
                      className={"absolute bottom-0 w-[1px] h-1 bg-neutral-500"}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
