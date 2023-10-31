import { useAtom } from "jotai";
import { useTheme } from "@emotion/react";

import WritingLine from "../WritingLine";
import EraseButton from "../EraseButton";

import useDrawing from "../../hooks/useDrawing";
import { charAtom } from "../../../../lib/jotai";
import { svgStyle } from "../../../../lib/emotion";

function CharacterWritingPad() {
  const {
    svgRef,
    startDrawing,
    draw,
    stopDrawing,
    formulatePathString,
    isDrawing,
    currentPath,
  } = useDrawing();
  const [ char, setChar ] = useAtom(charAtom);
  const { glyphBox } = useTheme();
  const lines = Array.from({ length: 9 }, (_, index) => ({
    y: index * 20 + 20,
    stroke: "#D9D9D9",
  }));

  function erasePath() {
    setChar(null);
  }

  return (
    <div>
      <h1 css={{ color: "#fff", textAlign: "center" }}>
        {String.fromCharCode(char.unicode)}
      </h1>
      <div
        css={{
          position: "relative",
          width: `${glyphBox.width}px`,
          height: `${glyphBox.height}px`,
          backgroundColor: "#fff",
        }}
      >
        <WritingLine
          width={glyphBox.width}
          height={glyphBox.height}
          lines={lines}
        />
        <svg
          ref={svgRef}
          width={glyphBox.width}
          height={glyphBox.height}
          viewBox={`0 0 ${glyphBox.width} ${glyphBox.height}`}
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
          {char.paths.map((path, index) => (
            <path
              key={formulatePathString(path) + index}
              d={formulatePathString(path)}
              stroke="black"
              strokeWidth="4"
              fill="none"
            />
          ))}
          {isDrawing && (
            <path
              d={formulatePathString(currentPath)}
              stroke="black"
              strokeWidth="4"
              fill="none"
            />
          )}
        </svg>
      </div>
      <div>
        <EraseButton erasePath={erasePath} />
      </div>
    </div>
  );
}

export default CharacterWritingPad;
