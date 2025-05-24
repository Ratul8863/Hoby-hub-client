import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Valuecontext } from '../Root/Root';
import { Navigate, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

function Creategroup() {
  const { users } = useContext(Valuecontext);
  const navigate = useNavigate();

  if (!users || !users.email) {
    return <Navigate to="/login" />;
  }

  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Others"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

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
      .catch(error => {
        // console.error(error);
        toast.error("An error occurred while creating the group.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 ">
      <Helmet>
        <title>Hobby-Hub | Creategroup</title>
       </Helmet>
      <h2 className="text-3xl font-bold text-center mb-8">Create a New Hobby Group</h2>
     <form
  onSubmit={handleSubmit}
  className="bg-white shadow-lg p-6 rounded-lg space-y-5 dark:bg-gray-900 dark:text-white animate-moving-shadow"
>
  <input
    type="text"
    name="groupName"
    required
    placeholder="Group Name"
    className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
  />

<p className='mb-[2px] font-medium'>Select Hobby Category</p>
  <select
    name="category"
    required
    className="select select-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white hover:bg-blue-500"

  >
      
    {categories.map((cat, idx) => (
      <option key={idx} value={cat}>{cat}</option>
    ))}
  </select>

  <textarea
    name="description"
    required
    rows="3"
    placeholder="Group Description"
    className="textarea textarea-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
  />

  <input
    type="text"
    name="location"
    required
    placeholder="Meeting Location"
    className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
  />

  <input
    type="number"
    name="maxMembers"
    required
    placeholder="Max Members"
    className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
  />
<p className='mb-[2px] font-medium'>Start Date (deadline equivalent)</p>
  <input
    type="date"
    name="startDate"
    required
    className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
  />

  <input
    type="text"
    name="imageUrl"
    required
    placeholder="Image URL"
    className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
  />

  <div className="grid md:grid-cols-2 gap-4">
    <input
      type="text"
      readOnly
      value={users?.displayName || "Anonymous"}
      className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    />
    <input
      type="email"
      readOnly
      value={users?.email || ""}
      className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    />
  </div>

  <button type="submit" className="btn btn-secondary hover:bg-red-800 w-full">Create Group</button>
</form>

    </div>
  );
}

export default Creategroup;
