import Button from "../../../../components/shared/Button";
import Image from "../../../../components/shared/Image";

import rubberIconUrl from "../../../../assets/rubber_icon.svg";

function EraseButton({ erasePath }) {
  return (
    <Button
      onButtonClick={erasePath}
      appearance={{ width: "100%", padding: "10px 0", borderRadius: "2px" }}
    >
      <Image
        url={rubberIconUrl}
        appearance={{ width: "17px", height: "17px" }}
      />
    </Button>
  );
}

export default EraseButton;
