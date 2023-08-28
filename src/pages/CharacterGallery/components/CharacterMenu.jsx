import styled from "@emotion/styled";

function CharacterMenu({ onMenuClick }) {
  return (
    <menu
      css={{
        display: "flex",
        justifyContent: "center",
        padding: 0,
        listStyle: "none",
      }}
    >
      <MenuList onClick={() => onMenuClick(97)}>Alphabets</MenuList>
      <MenuList onClick={() => onMenuClick(48)}>Numbers</MenuList>
      <MenuList onClick={() => onMenuClick(33)}>Others</MenuList>
    </menu>
  );
}

const MenuList = styled.li`
  margin: 0 44px;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover,
  &:focus {
    color: ${({ theme: { colors } }) => colors.grey.light};
    cursor: pointer;
  }
`;

export default CharacterMenu;
