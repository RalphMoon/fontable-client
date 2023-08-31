import Button from "../../../../components/shared/Button";

import importIconUrl from "../../../../assets/import_icon.svg";

function ExportButton({ openModal }) {
  return (
    <div css={{ position: "absolute", right: "37px", bottom: "30px" }}>
      <Button
        onButtonClick={openModal}
        appearance={{
          width: "60px",
          height: "60px",
          borderRadius: "100%",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={importIconUrl}
          alt="import"
          css={{ width: "32px", height: "32px" }}
        />
      </Button>
    </div>
  );
}

export default ExportButton;
