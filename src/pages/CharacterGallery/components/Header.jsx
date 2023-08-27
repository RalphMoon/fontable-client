import styled from "@emotion/styled";

function Header({ onMenuClick }) {
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
        <MenuList onClick={() => onMenuClick(97)}>Alphabets</MenuList>
        <MenuList onClick={() => onMenuClick(48)}>Numbers</MenuList>
        <MenuList onClick={() => onMenuClick(33)}>Others</MenuList>
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
    color: ${({ theme: { colors } }) => colors.grey.light};
    cursor: pointer;
  }
`;

export default Header;
