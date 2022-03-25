import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import s from './Login.module.css';

export function Login() {
  const loginContext = useContext(Context)

  return (
    <div className={s.logIn}>
      {loginContext.login ? (
        <p className={s.loggedIn}>Skráður inn sem <b>test</b></p>
      ):(
        <Link to='/login' className={s.link}>Innskráning</Link>
      )}
      <button className={s.button} onClick={loginContext.toggleLogin}>
        {loginContext.login ? (
          'Útskrá'
        ):(
          'Nýskráning'
        )}
      </button>
    </div>
  )
}