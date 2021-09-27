import { LegacyLink } from "./LegacyLink";
import { Link } from "./Link";

function App() {
  return (
    <div>
      <div>
        <Link />
      </div>
      <div style={{ marginTop: "8px" }}>
        <LegacyLink />
      </div>
    </div>
  );
}

export default App;
