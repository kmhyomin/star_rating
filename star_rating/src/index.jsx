import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ColorProvider from "./components/ColorProvider";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>앗! 뭔가 잘못됐어요:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ColorProvider>
      <App />
    </ColorProvider>
  </ErrorBoundary>,
);

reportWebVitals();
