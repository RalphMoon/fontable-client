import { useAtomValue, useSetAtom } from "jotai";

import Frame from "../../../components/shared/Frame";
import ThumbnailPad from "../../../features/drawing/components/ThumbnailPad";

import { othersAtom, unicodeAtom } from "../../../lib/jotai";

function OtherGallery({ openModal }) {
  const others = useAtomValue(othersAtom);
  const setUnicode = useSetAtom(unicodeAtom);

  function handleClick(unicode) {
    setUnicode(unicode);
    openModal(true);
  }

  return (
    <>
      {others.map(({ unicode, paths }) => (
        <Frame
          key={unicode}
          unicode={unicode}
          onFrameClick={() => handleClick(unicode)}
        >
          <ThumbnailPad paths={paths} />
        </Frame>
      ))}
    </>
  );
}

export default OtherGallery;
