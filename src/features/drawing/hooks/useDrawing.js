import { useSetAtom } from "jotai";
import { useRef, useState } from "react";
import { charAtom } from "../../../lib/jotai";

function useDrawing() {
  const svgRef = useRef(null);
  const [ isDrawing, setIsDrawing ] = useState(false);
  const [ currentPath, setCurrentPath ] = useState([]);
  const setPaths = useSetAtom(charAtom);

  function getRelativePosition(ev) {
    const rect = svgRef.current.getBoundingClientRect();

    return {
      x: (ev.clientX || ev.touches[0].clientX) - rect.left,
      y: (ev.clientY || ev.touches[0].clientY) - rect.top,
    };
  }

  function formulatePathString(path) {
    if (!path[0]) {
      return;
    }

    const [ start, ...rest ] = path;
    const startPointCommand = `M ${start.join(" ")}`;

    if (path.length < 2) return startPointCommand;

    let pathCommand = startPointCommand;

    for (let i = 1; i < rest.length - 1; i += 1) {
      const controlPoint = rest[i];
      const endPoint = rest[i + 1] || controlPoint;

      pathCommand += ` Q ${controlPoint.join(" ")} ${endPoint.join(" ")}`;
    }

    for (let i = rest.length - 1; i >= 0; i -= 1) {
      const controlPoint = rest[i];
      const endPoint = rest[i - 1] || start;

      pathCommand += ` Q ${controlPoint.join(" ")} ${endPoint.join(" ")}`;
    }

    return pathCommand;
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

  return {
    svgRef,
    isDrawing,
    currentPath,
    startDrawing,
    draw,
    stopDrawing,
    formulatePathString,
  };
}

export default useDrawing;
