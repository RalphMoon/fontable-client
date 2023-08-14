import styled from "@emotion/styled";

function CharacterGallery() {
  return (
    <header css={{ padding: "10px 0", borderBottom: "1px solid #eceff1" }}>
      <menu
        css={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          listStyle: "none",
        }}
      >
        <MenuList>Alphabet</MenuList>
        <MenuList>Numbers</MenuList>
        <MenuList>Others</MenuList>
      </menu>
    </header>
  );
}

const MenuList = styled.li`
  margin: 0 44px;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover,
  &:focus {
    color: rgba(85, 85, 85, 0.33);
    cursor: pointer;
  }
`;

export default CharacterGallery;
