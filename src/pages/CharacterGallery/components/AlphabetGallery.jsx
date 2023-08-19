import { useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";

import Frame from "../../../components/shared/Frame";
import ThumbnailPad from "../../../features/drawing/components/ThumbnailPad";
import Toggle from "../../../components/shared/Toggle";

import {
  upperAlphabetsAtom,
  lowerAlphabetsAtom,
  unicodeAtom,
} from "../../../lib/jotai";

function AlphabetGallery({ openModal }) {
  const [ isLowercase, setIsLowercase ] = useState(true);
  const lowerAlphabets = useAtomValue(lowerAlphabetsAtom);
  const upperAlphabets = useAtomValue(upperAlphabetsAtom);
  const unicodes = isLowercase ? lowerAlphabets : upperAlphabets;
  const setUnicode = useSetAtom(unicodeAtom);

  function handleClick(unicode) {
    setUnicode(unicode);
    openModal();
  }

  function toggleCase() {
    setIsLowercase(!isLowercase);
  }

  return (
    <>
      {unicodes.map(({ unicode, paths }) => (
        <Frame
          key={unicode}
          unicode={unicode}
          onFrameClick={() => handleClick(unicode)}
        >
          <ThumbnailPad paths={paths} />
        </Frame>
      ))}
      <div css={{ position: "absolute", right: "11%", bottom: "10px" }}>
        <Toggle toggleEnabled={isLowercase} onToggleClick={toggleCase}>
          {isLowercase ? "a" : "A"}
        </Toggle>
      </div>
    </>
  );
}

export default AlphabetGallery;
