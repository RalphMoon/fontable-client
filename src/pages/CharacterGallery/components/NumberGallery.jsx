import { useAtomValue, useSetAtom } from "jotai";
import { numbersAtom, unicodeAtom } from "../../../lib/jotai";
import Frame from "../../../components/shared/Frame";
import ThumbnailPad from "../../../features/drawing/components/ThumbnailPad";

function NumberGallery({ openModal }) {
  const numbers = useAtomValue(numbersAtom);
  const setUnicode = useSetAtom(unicodeAtom);

  function handleClick(unicode) {
    setUnicode(unicode);
    openModal(true);
  }

  return (
    <>
      {numbers.map(({ unicode, paths }) => (
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

export default NumberGallery;
