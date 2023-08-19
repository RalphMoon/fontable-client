import { useAtomValue } from "jotai";

import useDrawing from "../../hooks/useDrawing";

import { charAtom } from "../../../../lib/jotai";

function DrawingPad() {
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

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 800"
      fill="none"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      onTouchCancel={stopDrawing}
    >
      {paths.map((path) => (
        <path
          key={crypto.randomUUID()}
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
  );
}

export default DrawingPad;
