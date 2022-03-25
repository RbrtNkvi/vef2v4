import s from './Register.module.css';
import { Input } from "./Input";

export function Form() {
  return (
    <form>
      <p className={s.title}>Notendanafn:</p>
      <Input></Input>
      <p className={s.title}>Lykilorð:</p>
      <Input></Input>
      <button className={s.button}>Innskrá</button>
    </form>
  )
}