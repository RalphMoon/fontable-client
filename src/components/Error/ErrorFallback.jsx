import { useTheme } from "@emotion/react";

import Button from "../shared/Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  const theme = useTheme();

  return (
    <div>
      <p css={{ color: theme.colors.crimson }}>
        {error.response.data.message || error.message}
      </p>
      <Button onButtonClick={resetErrorBoundary} appearance={{ width: "100%" }}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
