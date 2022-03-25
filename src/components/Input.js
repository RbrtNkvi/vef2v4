import { useState } from "react";

export function Input() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}