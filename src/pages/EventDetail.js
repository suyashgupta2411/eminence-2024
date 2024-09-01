import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventId } = useParams();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Event {eventId}</h2>
      <p>Details of this event will be published soon.</p>
    </div>
  );
};

export default EventDetail;
