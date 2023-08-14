import Frame from "../../../components/shared/Frame";

function AlphabetGallery() {
  const alphabets = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <>
      {alphabets.map((alphabet) => (
        <Frame key={crypto.randomUUID()}>{alphabet}</Frame>
      ))}
    </>
  );
}

export default AlphabetGallery;
