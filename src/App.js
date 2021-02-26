import "./App.css";
import { useState } from "react";
import Status from "./Components/Status";

function App() {
  let [messages, setMessages] = useState(["test", "test2"]);

  return (
    <div>
      <Status onEnter={(value) => setMessages([value, ...messages])} />
      <ul>
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
