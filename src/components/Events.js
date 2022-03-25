import s from './Events.module.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Events(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events')
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
 }, [])
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
    <section>
      <ul>
        {data.items.length === 0 && (
          <li>Engir viðburðir</li>
        )}
        {data.items.length > 0 && data.items.map((event, i) => {
          return (
          <li key={i}>
            <Link to={`/${event.id}`} className={s.name}>{event.name}</Link>
            <p className={s.description}>{event.description}</p>
          </li>
          )
        })}
      </ul>
    </section>
  );
}