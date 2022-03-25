import { useParams } from "react-router";
import { Event } from "./components/Event";

function Registrations() {
  const params = useParams();

  return (
    <div className='page'>
      <Event id={params.eventId}></Event>
    </div>
  )
}

export default Registrations;