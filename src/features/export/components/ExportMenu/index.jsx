import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { saveAs } from "file-saver";
import styled from "@emotion/styled";

import Button from "../../../../components/shared/Button";

import useUpdateProjectMutation from "../../../projects/hooks/useUpdateProjectMutation";
import { fontUrlAtom, charAtom } from "../../../../lib/jotai";

function ExportMenu({ fontFamilyName }) {
  const [ fontType, setFontType ] = useState(null);
  const { data, mutate } = useUpdateProjectMutation();
  const char = useAtomValue(charAtom);
  const setFontUrl = useSetAtom(fontUrlAtom);

  useEffect(() => {
    if (data) {
      const blob = new Blob([data], { type: "application/octet-stream" });
      setFontUrl(URL.createObjectURL(blob));
      saveAs(blob, `${fontFamilyName}.${fontType}`);
    }
  }, [ data, fontFamilyName, fontType, setFontUrl ]);

  function exportPath(type) {
    setFontType(type);
    mutate({ char, fontType: type });
  }

  return (
    <menu css={{ padding: 0 }}>
      <StyledList>
        <Button
          onButtonClick={() => exportPath("otf")}
          appearance={{ width: "100%", fontSize: "50px" }}
        >
          <strong>OTF</strong>
        </Button>
      </StyledList>
      <StyledList>
        <Button
          onButtonClick={() => exportPath("ttf")}
          appearance={{ width: "100%", fontSize: "50px" }}
        >
          <strong>TTF</strong>
        </Button>
      </StyledList>
    </menu>
  );
}

const StyledList = styled.li`
  padding: 0 20px;
`;

export default ExportMenu;
