import useDrawing from "../../hooks/useDrawing";

function ThumbnailPad({ paths }) {
  const { svgRef } = useDrawing();

  return (
    <svg
      ref={svgRef}
      width="400"
      height="800"
      viewBox="0 0 400 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={{ width: "100%", height: "100%" }}
    >
      {paths.map((path) => (
        <path key={path} d={path} stroke="black" strokeWidth="4" fill="none" />
      ))}
    </svg>
  );
}

export default ThumbnailPad;
