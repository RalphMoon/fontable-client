import { useSetAtom } from "jotai";
import { useRef, useState } from "react";

import { sentenceDomAtom } from "../../../lib/jotai";

function useSentenceDrawing() {
  const svgRef = useRef(null);
  const [ isDrawing, setIsDrawing ] = useState(false);
  const [ currentPath, setCurrentPath ] = useState([]);
  const [ paths, setPaths ] = useState([]);
  const setSentenceDom = useSetAtom(sentenceDomAtom);

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

  async function stopDrawing() {
    if (isDrawing) {
      setPaths([ ...paths, currentPath ]);
      setCurrentPath(null);
      setIsDrawing(false);
      setSentenceDom(svgRef.current);
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
    paths,
    startDrawing,
    draw,
    stopDrawing,
    generateCurvePath,
  };
}

export default useSentenceDrawing;
