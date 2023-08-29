import styled from "@emotion/styled";

function Image({ url, label, appearance }) {
  return <StyledImage url={url} aria-label={label} appearance={appearance} />;
}

const StyledImage = styled.div(
  {
    width: "40px",
    height: "44px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  ({ url }) => ({
    backgroundImage: `url(${url})`,
  }),
  ({ appearance }) => appearance
);

export default Image;
