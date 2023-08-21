import { svgStyle } from "../../../../lib/emotion";

function WritingLine({ width, height, lines }) {
  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      css={svgStyle}
    >
      {lines.map((line, index) => (
        <line
          key={index}
          x1="0"
          y1={line.y}
          x2={width}
          y2={line.y}
          stroke={line.stroke}
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

export default WritingLine;
