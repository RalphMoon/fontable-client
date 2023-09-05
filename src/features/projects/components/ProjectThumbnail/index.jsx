import styled from "@emotion/styled";

function ProjectThumbnail({ url, familyName }) {
  return (
    <StyledThumbnail url={url} familyName={familyName}>
      <ul css={{ padding: "0 10px" }}>
        <li>The quick brown fox</li>
        <li>jumps over</li>
        <li> a lazy dog.</li>
      </ul>
    </StyledThumbnail>
  );
}

const StyledThumbnail = styled.div`
  width: 200px;
  height: 300px;
  background-color: #000;
  color: #fff;
  font-family:
    "${({ familyName }) => familyName}",
    Noto Sans;
  font-size: 1.4rem;
  font-weight: 600;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @font-face {
    font-family: "${({ familyName }) => familyName}";
    src: url(${({ url }) => url}) format("opentype");
  }
`;

export default ProjectThumbnail;
