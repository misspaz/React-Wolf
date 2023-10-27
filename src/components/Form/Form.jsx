import { useState } from "react";

export default function Form({ onSubmit }) {
  
  const [text, setText] = useState("");

  const handleAddElement = () => {
    onSubmit(text);
  
  };

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button onClick={handleAddElement}>Añadir</button>
    </div>
  );
}
