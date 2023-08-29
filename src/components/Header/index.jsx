import { useNavigate } from "react-router-dom";
import useAuth from "../../features/authentication/hooks/useAuth";

import appLogoUrl from "../../assets/fontable_logo.svg";
import Button from "../shared/Button";
import Image from "../shared/Image";

function Header({ children }) {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header
      css={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 17px",
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
      <Button
        onButtonClick={signOut}
        appearance={{
          padding: "0",
          margin: "0",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Image
          url={currentUser?.photoURL}
          label="User Profile"
          appearance={{ width: "44px", borderRadius: "100%" }}
        />
      </Button>
    </header>
  );
}

export default Header;
