import Button from "../shared/Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>
        <strong css={{ marginRight: "7px" }}>{error.status}</strong>
        {error.message}
      </p>
      <Button onButtonClick={resetErrorBoundary} appearance={{ width: "100%" }}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
