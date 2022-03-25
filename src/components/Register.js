import s from './Register.module.css';
import { useState } from "react";
import { Input } from "./Input";

export function Register() {
  const [registered, setRegistered] = useState(false);
  
  const handleClick = (e) => {
    setRegistered(true);
  }

  return (
    <div>
      {registered ? (
        <p className={s.msg}>Þú hefur skráð þig á þennan viðburð</p>
      ) : (
      <form>
        <p>Athugasemd:</p>
        <Input></Input>
        <button onClick={handleClick} className={s.button}>Skrá mig</button>
      </form>
    )}
  </div>
  )
}