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
    generateCurvePath,
    isDrawing,
    currentPath,
  } = useDrawing();
  const { paths = [] } = useAtomValue(charAtom);
  const lines = Array.from({ length: 26 }, (_, index) => ({
    y: index * 30 + 20,
    stroke: "#D9D9D9",
  }));

  return (
    <div
      css={{
        position: "relative",
        width: "400px",
        height: "800px",
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
        {paths.map((path, index) => (
          <path
            key={index}
            d={generateCurvePath(path)}
            stroke="black"
            strokeWidth="5"
            fill="none"
          />
        ))}
        {isDrawing && (
          <path
            d={generateCurvePath(currentPath)}
            stroke="black"
            strokeWidth="5"
            fill="none"
          />
        )}
      </svg>
    </div>
  );
}

export default CharacterWritingPad;
