import { css } from "@emotion/react";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;500&display=swap");

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    font-family: "Noto Sans", sans-serif;
    color: #424242;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const theme = {
  colors: {
    blue: "#1877F2",
    crimson: "#E64A19",
    grey: {
      light: "rgba(85, 85, 85, 0.33)",
      steel: "#BDBDBD",
    },
  },
  shadows: {
    frame:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  },
  glyph: {
    box: {
      width: "400px",
      height: "800px",
    },
  },
};

export const svgStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
