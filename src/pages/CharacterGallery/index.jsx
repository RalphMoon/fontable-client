import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

import Header from "./components/Header";
import AlphabetGallery from "./components/AlphabetGallery";
import NumberGallery from "./components/NumberGallery";
import OtherGallery from "./components/OtherGallery";
import Modal from "../../components/shared/Modal";
import CharacterWritingPad from "../../features/drawing/components/CharacterWritingPad";
import ExportButton from "../../features/export/components/ExportButton";
import ExportMenu from "../../features/export/components/ExportMenu";

function CharacterGallery() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isWritingMode, setIsWritingMode ] = useState("");
  const [ menuCode, setMenuCode ] = useState(97);
  const portalRoot = document.getElementById("portal-root");

  function handleMenu(unicode) {
    setMenuCode(unicode);
  }

  function openModal(isWritingModal) {
    setIsOpen(true);
    setIsWritingMode(isWritingModal);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header onMenuClick={handleMenu} />
      <StyledMain>
        {menuCode === 97 && <AlphabetGallery openModal={openModal} />}
        {menuCode === 48 && <NumberGallery openModal={openModal} />}
        {menuCode === 33 && <OtherGallery openModal={openModal} />}
        <ExportButton openMenu={openModal} />
      </StyledMain>
      {isOpen &&
        isWritingMode &&
        createPortal(
          <Modal onModalClick={closeModal}>
            <CharacterWritingPad />
          </Modal>,
          portalRoot
        )}
      {isOpen &&
        !isWritingMode &&
        createPortal(
          <Modal onModalClick={closeModal} appearance={{ width: "300px" }}>
            <ExportMenu />
          </Modal>,
          portalRoot
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

export default CharacterGallery;
