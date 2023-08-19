import { css } from "@emotion/react";

export const global = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;500&display=swap");

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
`;

export const theme = {
  colors: {
    blue: "#1877F2",
    lightgrey: "rgba(85, 85, 85, 0.33)",
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
