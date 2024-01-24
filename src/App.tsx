import { useState } from "react";
import Button from "./Button";

function App() {
  const [message, setMessage] = useState(
    "Let's learn more about testing in React"
  );

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button onClick={() => setMessage("New message!")} disabled={false}>
        Change message
      </Button>
    </div>
  );
}

export default App;
