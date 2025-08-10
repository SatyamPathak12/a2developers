import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onBook={() => setOpen(true)} />
      <Hero />
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

