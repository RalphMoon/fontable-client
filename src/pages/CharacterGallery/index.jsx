import styled from "@emotion/styled";

import Header from "./components/Header";
import AlphabetGallery from "./components/AlphabetGallery";

function CharacterGallery() {
  return (
    <>
      <Header />
      <StyledMain>
        <AlphabetGallery />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(7, 0.5fr);
  margin-top: 80px;
  align-items: center;
`;

export default CharacterGallery;
