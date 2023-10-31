import { useTheme } from "@emotion/react";

import useDrawing from "../../hooks/useDrawing";

function ThumbnailPad({ paths }) {
  const { svgRef, formulatePathString } = useDrawing();
  const { glyphBox } = useTheme();

  return (
    <svg
      ref={svgRef}
      width={glyphBox.width}
      height={glyphBox.height}
      viewBox={`0 0 ${glyphBox.width} ${glyphBox.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={{ width: "100%", height: "100%" }}
    >
      {paths.length &&
        paths.map((path, index) => (
          <path
            key={formulatePathString(path) + index}
            d={formulatePathString(path)}
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
        ))}
    </svg>
  );
}

export default ThumbnailPad;
