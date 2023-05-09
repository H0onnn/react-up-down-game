import React, { useState } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // ...생략...

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleChange} />
      {/* ...생략... */}
    </div>
  );
};

export default InputForm;
