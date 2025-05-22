import {  useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem'
export default function EventDetail() {

  const data = useRouteLoaderData('event-detail');
  return <>
  <EventItem event={data.event}/>
  </>;
}
export async function loader({request,params}){
const id = params.eventId
  const response = await fetch('http://localhost:8080/events/'+id)
  
if(!response.ok){
  throw new Response({message:'Could not fetch details for selected event'},{
    status:500
  })
}

  return response
}