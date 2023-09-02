import { useState } from "react";
import styled from "@emotion/styled";

import { useAtomValue } from "jotai";
import Header from "../../components/Header";
import CharacterMenu from "./components/CharacterMenu";
import AlphabetGallery from "./components/AlphabetGallery";
import NumberGallery from "./components/NumberGallery";
import OtherGallery from "./components/OtherGallery";
import Modal from "../../components/shared/Modal";
import CharacterWritingPad from "../../features/drawing/components/CharacterWritingPad";
import ExportButton from "../../features/export/components/ExportButton";
import ExportMenu from "../../features/export/components/ExportMenu";

import useProjectQuery from "../../features/projects/hooks/useProjectQuery";
import useUpdateProjectMutation from "../../features/projects/hooks/useUpdateProjectMutation";
import { charAtom } from "../../lib/jotai";

function Project() {
  const { data: project } = useProjectQuery();
  const { mutate } = useUpdateProjectMutation();
  const char = useAtomValue(charAtom);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ modalMode, setModalMode ] = useState(null);
  const [ menuCode, setMenuCode ] = useState(97);

  function handleMenu(unicode) {
    setMenuCode(unicode);
  }

  function openModal(mode) {
    setIsOpen(true);
    setModalMode(mode);
  }

  function closeModal() {
    setIsOpen(false);
    setModalMode(null);
    mutate({ char });
  }

  return (
    <>
      <Header>
        <CharacterMenu onMenuClick={handleMenu} />
      </Header>
      <StyledMain>
        {menuCode === 97 && (
          <AlphabetGallery openModal={() => openModal("write")} />
        )}
        {menuCode === 48 && (
          <NumberGallery openModal={() => openModal("write")} />
        )}
        {menuCode === 33 && (
          <OtherGallery openModal={() => openModal("write")} />
        )}
        <ExportButton openModal={() => openModal("export")} />
      </StyledMain>
      {isOpen && modalMode === "write" && (
        <Modal onModalClick={closeModal}>
          <CharacterWritingPad />
        </Modal>
      )}
      {isOpen && modalMode === "export" && (
        <Modal onModalClick={closeModal} appearance={{ width: "300px" }}>
          <ExportMenu fontFamilyName={project.name} />
        </Modal>
      )}
    </>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(8, 0.5fr);
  margin-top: 30px;
  align-items: center;
`;

export default Project;
