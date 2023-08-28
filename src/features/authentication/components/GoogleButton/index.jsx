import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "@firebase/auth";

import useAuth from "../../hooks/useAuth";
import useLoginMutation from "../../hooks/useLoginMutation";

import Button from "../../../../components/shared/Button";

import googleLogoURL from "../../../../assets/google_logo.svg";

function GoogleButton() {
  const { signIn } = useAuth();
  const { mutate } = useLoginMutation();
  const navigate = useNavigate();

  async function handleLogin() {
    const { user } = await signIn(new GoogleAuthProvider());
    const token = await user.getIdToken();

    mutate({ token });
    navigate("/");
  }

  return (
    <Button
      onButtonClick={handleLogin}
      appearance={{ backgroundColor: "#FFF" }}
    >
      <img
        src={googleLogoURL}
        alt="Google Logo"
        css={{
          verticalAlign: "-2px",
          marginRight: "20px",
          transform: "scale(1.2) translateX(-10px)",
        }}
      />
      <span
        css={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: "1.3rem",
          transform: "translateX(-13px)",
        }}
      >
        Continue With Google
      </span>
    </Button>
  );
}

export default GoogleButton;
