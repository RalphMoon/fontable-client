import useDrawing from "../../hooks/useDrawing";

function ThumbnailPad({ paths }) {
  const { svgRef, generateCurvePath } = useDrawing();

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 800"
      fill="none"
      css={{ width: "100%", height: "100%" }}
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
    </svg>
  );
}

export default ThumbnailPad;
