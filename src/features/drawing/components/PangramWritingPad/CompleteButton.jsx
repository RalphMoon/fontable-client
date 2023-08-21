import { useAtomValue } from "jotai";
import Button from "../../../../components/shared/Button";
import { sentenceDomAtom } from "../../../../lib/jotai";
import useCreateProjectMutation from "../../hooks/useCreateProjectMutation";

const svgToImageUrl = (svgElement) =>
  new Promise((resolve, reject) => {
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgDataUrl = `data:image/svg+xml;base64, ${btoa(svgString)}`;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const convertedImageUrl = canvas.toDataURL("image/png");

      resolve(convertedImageUrl);
    };
    img.onerror = (error) => {
      reject(error);
    };

    img.src = svgDataUrl;
  });

function CompleteButton() {
  const { mutate } = useCreateProjectMutation();
  const sentenceDom = useAtomValue(sentenceDomAtom);

  async function handleClick() {
    const imageUrl = await svgToImageUrl(sentenceDom);

    mutate({ imageUrl });
  }

  return <Button onButtonClick={handleClick}>Complete</Button>;
}

export default CompleteButton;
