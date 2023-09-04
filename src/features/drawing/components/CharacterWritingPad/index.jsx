import { useAtomValue } from "jotai";

import WritingLine from "../WritingLine";

import useDrawing from "../../hooks/useDrawing";
import { charAtom } from "../../../../lib/jotai";
import { svgStyle } from "../../../../lib/emotion";

function CharacterWritingPad() {
  const {
    svgRef,
    startDrawing,
    draw,
    stopDrawing,
    formulatePathString,
    isDrawing,
    currentPath,
  } = useDrawing();
  const { pathString } = useAtomValue(charAtom);
  const lines = Array.from({ length: 39 }, (_, index) => ({
    y: index * 20 + 20,
    stroke: index === 2 || index === 11 ? "#EF5350" : "#D9D9D9",
  }));

  return (
    <div
      css={{
        position: "relative",
        width: "400px",
        height: "800px",
          backgroundColor: "#fff",
      }}
    >
      <WritingLine width="400" height="800" lines={lines} />
      <svg
        ref={svgRef}
        width="400"
        height="800"
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        onTouchCancel={stopDrawing}
        css={svgStyle}
      >
        <path d={pathString} stroke="black" strokeWidth="4" fill="none" />
        {isDrawing && (
          <path
            d={formulatePathString(currentPath)}
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
        )}
      </svg>
    </div>
  );
}

export default CharacterWritingPad;
