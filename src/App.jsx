import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = { role: "user", content: input };
    const reply = { role: "assistant", content: `VAAR: You said "${input}"` };

    setMessages([...messages, newMsg, reply]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">💬 VAAR AI Assistant</h1>

      <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-4 h-[60vh] overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 p-2 rounded-lg ${msg.role === "user" ? "text-right" : "text-left"}`}
          >
            <span className="inline-block bg-gray-700 px-4 py-2 rounded-xl">
              {msg.content}
            </span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-l-xl bg-gray-700 text-white outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-600 px-4 py-2 rounded-r-xl"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
