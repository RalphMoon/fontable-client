import { useTheme } from "@emotion/react";

import useDrawing from "../../hooks/useDrawing";

function ThumbnailPad({ path }) {
  const { svgRef } = useDrawing();
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
      <path d={path} stroke="black" strokeWidth="4" fill="none" />
    </svg>
  );
}

export default ThumbnailPad;
