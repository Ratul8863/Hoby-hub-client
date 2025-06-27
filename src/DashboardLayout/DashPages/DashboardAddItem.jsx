import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Navigate, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Valuecontext } from '../../Root/Root';

function Creategroup() {
  const { users } = useContext(Valuecontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!users || !users.email) {
    return <Navigate to="/login" />;
  }

  const categories = [
    "Drawing & Painting", "Photography", "Video Gaming", "Fishing",
    "Running", "Cooking", "Reading", "Writing", "Others"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData(e.target);
    const inputdata = Object.fromEntries(formdata.entries());

    inputdata.userName = users?.displayName || "Anonymous";
    inputdata.userEmail = users?.email;

    fetch('https://hobyhub-server.vercel.app/groups', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputdata),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId || data._id) {
          toast.success("Group created successfully!");
          navigate("/Allgroups");
        } else {
          toast.error("Failed to create group");
        }
      })
      .catch(() => {
        toast.error("An error occurred while creating the group.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen bg-[#F5F5F5] dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>HobbyHub | Create Group</title>
      </Helmet>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Create a New Hobby Group</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Build your own community around your favorite hobby!</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-xl p-8 space-y-5 "
      >
        <input
          type="text"
          name="groupName"
          required
          placeholder="Group Name"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
        />

        <div>
          <label className="block mb-1 font-medium">Select Hobby Category</label>
          <select
            name="category"
            required
            className="select select-bordered w-full dark:bg-gray-700 dark:border-gray-600"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <textarea
          name="description"
          required
          rows="4"
          placeholder="Group Description"
          className="textarea textarea-bordered w-full dark:bg-gray-700 dark:border-gray-600"
        />

        <input
          type="text"
          name="location"
          required
          placeholder="Meeting Location"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
        />

        <input
          type="number"
          name="maxMembers"
          required
          placeholder="Max Members"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
          min={1}
        />

        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            name="startDate"
            required
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <input
          type="text"
          name="imageUrl"
          required
          placeholder="Image URL"
          className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            readOnly
            value={users?.displayName || "Anonymous"}
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="email"
            readOnly
            value={users?.email || ""}
            className="input input-bordered w-full dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-secondary hover:bg-secondary-focus w-full"
        >
          {loading ? "Creating..." : "Create Group"}
        </button>
      </form>
    </div>
  );
}

export default Creategroup;
