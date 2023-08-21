import WritingLine from "../WritingLine";

import useSentenceDrawing from "../../hooks/useSentenceDrawing";
import { svgStyle } from "../../../../lib/emotion";

function PangramWritingPad() {
  const {
    svgRef,
    startDrawing,
    paths,
    draw,
    stopDrawing,
    generateCurvePath,
    isDrawing,
    currentPath,
  } = useSentenceDrawing();
  const lines = Array.from({ length: 4 }, (_, index) => ({
    y: index * 40,
    stroke: index === 2 ? "#EF5350" : "#D9D9D9",
  }));

  return (
    <div
      css={{
        position: "relative",
        width: "1000px",
        height: "200px",
      }}
    >
      <WritingLine width="1000" height="200" lines={lines} />
      <svg
        ref={svgRef}
        width="1000"
        height="200"
        viewBox="0 0 1000 200"
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

export default PangramWritingPad;
