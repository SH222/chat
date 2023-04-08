import React, { useState } from "react";

function App() {
  const [message, setMassege] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <>
      <h2>ChatGPT에게 물어봐</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>{response}</div>
          <input
            value={message}
            placeholder="질문을 입력하세요"
            onChange={(e) => setMassege(e.target.value)}
          ></input>
          <button type="submit">검색</button>
        </form>
      </div>
    </>
  );
}

export default App;
