import React from "react";
import { Link } from "react-router-dom";
import "./EventsPage.css"; // Ensure this file contains the styling for the events page

const events = [
  { id: 1, name: "Reminders of Affection", path: "/event1" },
  { id: 2, name: "Resurrection of the Poet", path: "/event2" },
  { id: 3, name: "A Bloom Gesture", path: "/event3" },
  { id: 4, name: "Letters from a Soldier", path: "/event4" },
  { id: 5, name: "The Apt Estimate", path: "/event5" },
  { id: 6, name: "Serenity", path: "/event6" },
  { id: 7, name: "All the Bright Places", path: "/event7" },
  { id: 8, name: "Reverie", path: "/event8" },
  { id: 9, name: "All We Had", path: "/event9" },
  { id: 10, name: "Come Through", path: "/event10" },
  { id: 11, name: "Athena", path: "/event11" },
  { id: 12, name: "Aphrodite", path: "/event12" },
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-grid">
        {events.map((event) => (
          <Link key={event.id} to={event.path} className="event-card">
            <h2>{event.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
