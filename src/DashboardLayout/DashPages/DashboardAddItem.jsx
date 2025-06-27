import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Valuecontext } from "../../Root/Root";

function DashboardAddItem() {
  const { users } = useContext(Valuecontext);
  const navigate = useNavigate();

  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Others",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const group = Object.fromEntries(form.entries());

    group.userName = users?.displayName;
    group.userEmail = users?.email;

    // Add current date for startDate if not provided (optional, but good for data integrity)
    if (!group.startDate) {
        group.startDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    }

    fetch("https://hobyhub-server.vercel.app/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data._id) { // Check for both insertedId (MongoDB) or _id (if already processed/mocked)
          toast.success("Group added successfully!");
          e.target.reset(); // Clear the form after successful submission
          navigate("/dashboard/my-items");
        } else {
          toast.error("Failed to add group.");
        }
      })
      .catch((error) => { // Catch network or other errors
          console.error("Error adding group:", error);
          toast.error("Server error. Try again later.");
      });
  };

  const inputStyle = "w-full p-3 rounded-lg bg-[#1A1A2E] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]";
  const readOnlyInputStyle = "w-full p-3 rounded-lg bg-[#1A1A2E] border border-gray-700 text-gray-400 placeholder-gray-500 focus:outline-none cursor-not-allowed";


  return (
    // Main container styling matching DashboardLayout
    <div className="max-w-4xl mx-auto px-6 py-10 bg-[#1A1A2E] text-gray-200 min-h-screen">
      <Helmet>
        <title>Dashboard | Add Group</title>
      </Helmet>

      {/* Page Title - Consistent with Storeshop dashboard headers */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-100">Add a New Group</h2>

      {/* Form Container - Styled like a Storeshop card */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#2C2C4A] p-6 md:p-8 rounded-xl shadow-xl border border-gray-800 space-y-6" // Increased padding and spacing
      >
        <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-400 mb-2">Group Name</label>
            <input
                type="text"
                name="groupName"
                id="groupName"
                required
                placeholder="Enter group name"
                className={inputStyle}
            />
        </div>

        <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-2">Category</label>
            <select
                name="category"
                id="category"
                required
                className={inputStyle}
            >
                <option value="" disabled>Select Category</option> {/* Empty value for initial selection */}
                {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>

        <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Group Description</label>
            <textarea
                name="description"
                id="description"
                rows="4" // Increased rows for better appearance
                required
                placeholder="Provide a detailed description of your group"
                className={inputStyle}
            />
        </div>

        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">Meeting Location</label>
            <input
                type="text"
                name="location"
                id="location"
                required
                placeholder="e.g., Online, City Park, Community Center"
                className={inputStyle}
            />
        </div>

        <div>
            <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-400 mb-2">Maximum Members</label>
            <input
                type="number"
                name="maxMembers"
                id="maxMembers"
                required
                placeholder="e.g., 20"
                min="1" // Ensure at least 1 member
                className={inputStyle}
            />
        </div>

        <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-400 mb-2">Start Date</label>
            <input
                type="date"
                name="startDate"
                id="startDate"
                required
                className={inputStyle}
            />
        </div>

        <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-400 mb-2">Group Image URL</label>
            <input
                type="url" // Use type="url" for image URLs
                name="imageUrl"
                id="imageUrl"
                required
                placeholder="https://example.com/image.jpg"
                className={inputStyle}
            />
        </div>

        <div className="grid md:grid-cols-2 gap-6"> {/* Increased gap for better spacing */}
            <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    readOnly
                    value={users?.displayName || ''} // Handle undefined users
                    className={readOnlyInputStyle}
                />
            </div>
            <div>
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    readOnly
                    value={users?.email || ''} // Handle undefined users
                    className={readOnlyInputStyle}
                />
            </div>
        </div>

        <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-[#7B68EE] text-white font-semibold text-lg hover:bg-[#6A5ACD] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7B68EE] focus:ring-offset-2 focus:ring-offset-[#2C2C4A]"
        >
            Add Group
        </button>
      </form>
    </div>
  );
}

export default DashboardAddItem;