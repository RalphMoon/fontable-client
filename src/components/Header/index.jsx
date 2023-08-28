import { useNavigate } from "react-router-dom";
import useAuth from "../../features/authentication/hooks/useAuth";

import appLogoUrl from "../../assets/fontable_logo.svg";
import Button from "../shared/Button";
import Image from "../shared/Image";

function Header({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <header
      css={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 10px",
      }}
    >
      <Button
        onButtonClick={() => navigate("/")}
        appearance={{
          padding: "0",
          margin: "0",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Image url={appLogoUrl} label="App Logo" />
      </Button>
      {children}
      <Image
        url={currentUser.photoURL}
        label="User Profile"
        appearance={{ borderRadius: "100%" }}
      />
    </header>
  );
}

export default Header;
