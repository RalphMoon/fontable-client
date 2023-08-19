import styled from "@emotion/styled";
import useProjectMutation from "../../../features/drawing/hooks/useProjectMutation";

function Header({ onMenuClick }) {
  const { mutate } = useProjectMutation();

  return (
    <header css={{ padding: "10px 0", borderBottom: "1px solid #eceff1" }}>
      <button type="button" onClick={() => mutate()}>
        SEND
      </button>
      <menu
        css={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          listStyle: "none",
        }}
      >
        <MenuList onClick={() => onMenuClick(97)}>Alphabets</MenuList>
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
    color: ${({ theme }) => theme.colors.lightgrey};
    cursor: pointer;
  }
`;

export default Header;
