import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import Event1 from "./pages/Event1";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import Event4 from "./pages/Event4";
import Event5 from "./pages/Event5";
import Event6 from "./pages/Event6";
import Event7 from "./pages/Event7";
import Event8 from "./pages/Event8";
import Event9 from "./pages/Event9";
import Event10 from "./pages/Event10";
import Event11 from "./pages/Event11";
import Event12 from "./pages/Event12";
import GalleryPage from "./pages/GalleryPage"; // Assuming you have a Gallery page as well
import NavigationBar from "./components/NavigationBar"; // Import your navigation bar component

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event1" element={<Event1 />} />
        <Route path="/event2" element={<Event2 />} />
        <Route path="/event3" element={<Event3 />} />
        <Route path="/event4" element={<Event4 />} />
        <Route path="/event5" element={<Event5 />} />
        <Route path="/event6" element={<Event6 />} />
        <Route path="/event7" element={<Event7 />} />
        <Route path="/event8" element={<Event8 />} />
        <Route path="/event9" element={<Event9 />} />
        <Route path="/event10" element={<Event10 />} />
        <Route path="/event11" element={<Event11 />} />
        <Route path="/event12" element={<Event12 />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
