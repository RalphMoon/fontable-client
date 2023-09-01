import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      css={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          position: "absolute",
          top: "30%",
          left: "20%",
          textAlign: "center",
        }}
      >
        <strong css={{ fontSize: "10rem" }}>404</strong>
        <div css={{ padding: "20px 0" }}>
          <p css={{ fontSize: "2rem" }}>
            <strong>Oops!</strong> Page not Found
          </p>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <StyledLink to="/login">get login</StyledLink>
            <StyledLink to="/">return to the home</StyledLink>
          </div>
        </div>
      </section>
    </div>
  );
}

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({ theme: { colors } }) => colors.grey.steel};
  font-size: 1.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.grey.light};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadows.button};
`;

export default NotFound;
