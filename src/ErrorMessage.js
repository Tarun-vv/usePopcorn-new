function ErrorMessage({ error }) {
  return <div className="error">❌ {error.message}</div>;
}

export default ErrorMessage;
