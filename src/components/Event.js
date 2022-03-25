import s from './Event.module.css';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import { Layout } from "./Layout";
import { Register } from "./Register";

export function Event({ id }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const loginContext = useContext(Context)

  useEffect(() => {
    fetch(`http://vef2-20222-v3-synilausn.herokuapp.com/events/${id}`)
      .then(response => {
        if(response.ok) {
          return response.json();
        } 
        throw response;
      })
      .then(data => { 
        setData(data);
      })
      .catch(error => { 
        console.error('error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false)
      });
  }, [id])

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  return (
    <Layout title={data.name}>
      <p className={s.description}>{data.description}</p>
      <section>
        <ul>
          {data.registrations.length === 0 && (
            <li>Engar skráningar</li>
          )}
          {data.registrations.length > 0 && data.registrations.map((reg, i) => {
            return (
            <li key={i}>
              <b>{reg.name}</b>
              <p className={s.comment}>{reg.comment}</p>
            </li>
            )
          })}
        </ul>
      </section>

      {loginContext.login ? (
        <Register></Register>
      ) : (
        <p className={s.logIn}>Skráðu þig inn til að skrá þig á viðburðinn</p>
      )}

      <Link to='/' className='home'>Til Baka</Link>
    </Layout>
  )
}