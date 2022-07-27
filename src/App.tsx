import "./styles.css";

export default function App() {
  const currentCount = 5;

  return (
    <div className="App">
      <h1 style={{ marginBottom: "1rem" }}>Current streak</h1>
      <div>
        <p style={{ fontSize: "4rem", marginTop: "2rem", marginBottom: "0" }}>
          <span aria-label="fire emoji" role="img">
            🔥
          </span>
        </p>
      </div>
      <p style={{ fontSize: "2rem" }}>
        {currentCount} day
        {currentCount > 1 ? "s" : ""}
      </p>
    </div>
  );
}
