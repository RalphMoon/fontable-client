import { ErrorBoundary } from "react-error-boundary";

import GoogleButton from "../../features/authentication/components/GoogleButton";
import ErrorFallback from "../../components/Error/ErrorFallback";

function Login() {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100%",
      }}
    >
      <div css={{ position: "relative" }}>
        <div css={{ position: "absolute", left: "10%", top: "20%" }}>
          <section>
            <h1 css={{ margin: 0, fontSize: "76px", fontWeight: 800 }}>
              Fontable
            </h1>
            <p
              css={{
                paddingLeft: "17px",
                margin: 0,
                marginTop: "-10px",
                fontSize: "20px",
                fontStyle: "italic",
              }}
            >
              Your writing, your font
            </p>
          </section>
          <div css={{ display: "grid", marginTop: "70px" }}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <GoogleButton />
            </ErrorBoundary>
          </div>
        </div>
      </div>
      <div css={{ backgroundColor: "#ECEFF1" }} />
    </div>
  );
}

export default Login;
