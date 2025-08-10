import React, { useState } from "react";

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", institution: "", requirements: ""
  });
  const [status, setStatus] = useState(null);

  if (!open) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", institution: "", requirements: "" });
      } else {
        const data = await res.json();
        setStatus(data?.message || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-full md:w-2/5 ml-auto bg-white text-gray-800 p-6 shadow-xl overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Get In Touch</h3>
          <button onClick={onClose} className="text-xl font-semibold">✕</button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Have questions about our Products? Fill out the form below to get a call with us.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm">Name *</label>
            <input name="name" required value={form.name} onChange={handleChange}
              className="w-full border rounded p-2 mt-1" placeholder="Name"/>
          </div>

          <div>
            <label className="text-sm">Email *</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange}
              className="w-full border rounded p-2 mt-1" placeholder="Email"/>
          </div>

          <div>
            <label className="text-sm">Contact Number *</label>
            <div className="flex gap-2 items-center">
              <span className="bg-gray-200 px-3 py-2 rounded">+91</span>
              <input name="phone" required value={form.phone} onChange={handleChange}
                className="flex-1 border rounded p-2" placeholder="Contact Number"/>
            </div>
          </div>

          <div>
            <label className="text-sm">Institution Name *</label>
            <input name="institution" required value={form.institution} onChange={handleChange}
              className="w-full border rounded p-2 mt-1" placeholder="Institution Name"/>
          </div>

          <div>
            <label className="text-sm">Requirements</label>
            <textarea name="requirements" value={form.requirements} onChange={handleChange}
              className="w-full border rounded p-2 mt-1 h-28" placeholder="Requirements"></textarea>
          </div>

          <div>
            <button type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium">
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && <p className="text-green-600 mt-2">Submitted successfully!</p>}
            {status === "error" && <p className="text-red-600 mt-2">Something went wrong.</p>}
          </div>
        </form>
      </div>

      {/* backdrop */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
}
