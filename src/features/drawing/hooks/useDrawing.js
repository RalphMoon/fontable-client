import { useSetAtom } from "jotai";
import { useRef, useState } from "react";
import { replacePathsAtom } from "../../../lib/jotai";

function useDrawing() {
  const svgRef = useRef(null);
  const [ isDrawing, setIsDrawing ] = useState(false);
  const [ currentPath, setCurrentPath ] = useState([]);
  const setPaths = useSetAtom(replacePathsAtom);

  function getRelativePosition(ev) {
    const rect = svgRef.current.getBoundingClientRect();

    return {
      x: (ev.clientX || ev.touches[0].clientX) - rect.left,
      y: (ev.clientY || ev.touches[0].clientY) - rect.top,
    };
  }

  function startDrawing(ev) {
    const { x, y } = getRelativePosition(ev);

    setIsDrawing(true);
    setCurrentPath([[ x, y ]]);
  }

  function draw(ev) {
    if (isDrawing) {
      const { x, y } = getRelativePosition(ev);

      setCurrentPath([ ...currentPath, [ x, y ] ]);
    }
  }

  function stopDrawing() {
    if (isDrawing) {
      setPaths(currentPath);
      setCurrentPath(null);
      setIsDrawing(false);
    }
  }

  function generateCurvePath(path) {
    const [ start, ...rest ] = path;
    const startPointCommand = `M ${start.join(" ")}`;

    if (path.length < 3) return startPointCommand;

    let pathCommand = startPointCommand;

    for (let i = 1; i < rest.length - 1; i += 2) {
      const firstControlPoint = rest[i];
      const secondControlPoint = rest[i + 1];
      const endPoint = rest[i + 2] || secondControlPoint;

      pathCommand += ` C ${firstControlPoint.join(
        " "
      )} ${secondControlPoint.join(" ")} ${endPoint.join(" ")}`;
    }

    return pathCommand;
  }

  return {
    svgRef,
    isDrawing,
    currentPath,
    startDrawing,
    draw,
    stopDrawing,
    generateCurvePath,
  };
}

export default useDrawing;
