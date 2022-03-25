import s from './Layout.module.css';
import { Login } from "./Login";

export function Layout(props) {
  return (
    <main>
      <header className={s.header}>
        <h1>Viðburðasíðan</h1>
        <h2>{props.title}</h2>
      </header>
      
      <div className={s.content}>
        {props.children}
      </div>

      <footer>
        <Login />
      </footer>
    </main>
  )
}