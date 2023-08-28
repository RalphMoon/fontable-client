import { FacebookAuthProvider } from "@firebase/auth";
import { useTheme } from "@emotion/react";

import useAuth from "../../hooks/useAuth";
import useLoginMutation from "../../hooks/useLoginMutation";

import Button from "../../../../components/shared/Button";

import facebookLogoURL from "../../../../assets/facebook_logo.svg";

function FacebookButton() {
  const { signIn } = useAuth();
  const { mutate } = useLoginMutation();
  const theme = useTheme();

  async function handleLogin() {
    const { user } = await signIn(new FacebookAuthProvider());
    const token = await user.getIdToken();

    mutate({ token });
  }

  return (
    <Button
      onButtonClick={handleLogin}
      appearance={{
        backgroundColor: theme.colors.blue,
        color: "#FFF",
      }}
    >
      <img
        src={facebookLogoURL}
        alt="Facebook Logo"
        css={{
          verticalAlign: "-2px",
          marginRight: "20px",
          transform: "scale(1.2)",
        }}
      />
      <span
        css={{
          fontFamily: "Helvetica, sans-serif",
          fontWeight: 500,
          fontSize: "1.3rem",
        }}
      >
        Continue With Facebook
      </span>
    </Button>
  );
}

export default FacebookButton;
