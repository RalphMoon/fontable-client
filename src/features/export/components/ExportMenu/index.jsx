import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import styled from "@emotion/styled";

import Button from "../../../../components/shared/Button";

import { fontUrlAtom, unicodePathsAtom } from "../../../../lib/jotai";
import { useUpdateProjectMutation } from "../../../drawing/hooks/useProjectMutation";

function ExportMenu() {
  const [ fontType, setFontType ] = useState(null);
  const { data, mutate } = useUpdateProjectMutation();
  const unicodePaths = useAtomValue(unicodePathsAtom);
  const [ , setFontUrl ] = useAtom(fontUrlAtom);

  useEffect(() => {
    if (data) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(data);
      link.download = `font.${fontType}`;
      link.click();

      setFontUrl(URL.createObjectURL(data));
    }
  }, [ data, fontType, setFontUrl ]);

  function exportPath(type) {
    setFontType(type);
    mutate({ unicodePaths, fontType: type });
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
      <StyledList>
        <Button
          onButtonClick={() => exportPath("woff")}
          appearance={{ width: "100%", fontSize: "50px" }}
        >
          <strong>WOFF</strong>
        </Button>
      </StyledList>
    </menu>
  );
}

const StyledList = styled.li`
  padding: 0 20px;
`;

export default ExportMenu;
