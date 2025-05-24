import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { Valuecontext } from '../Root/Root';
import { Helmet } from 'react-helmet-async';

function UpdateGroupModal({ group, isOpen, onClose, onUpdate }) {
  const { users } = useContext(Valuecontext);

  const categories = [
    "Drawing & Painting", "Photography", "Video Gaming",
    "Fishing", "Running", "Cooking", "Reading", "Writing", "Others"
  ];

  const [formData, setFormData] = useState({
    groupName: '',
    category: '',
    description: '',
    location: '',
    maxMembers: '',
    startDate: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (group) {
      setFormData({
        groupName: group.groupName || '',
        category: group.category || '',
        description: group.description || '',
        location: group.location || '',
        maxMembers: group.maxMembers || '',
        startDate: group.startDate ? group.startDate.slice(0, 10) : '',
        imageUrl: group.imageUrl || '',
      });
    }
  }, [group]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://hobyhub-server.vercel.app/groups/${group._id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, name: formData.groupName }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Group updated successfully",
            showConfirmButton: false,
            timer: 1500
          });
          onUpdate();
          onClose();
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Update failed',
          text: err.message || 'Something went wrong!'
        });
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm px-2">
      <Helmet>
        <title>Hobby-Hub | Update Group</title>
      </Helmet>

      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white text-black rounded-xl shadow-lg relative p-4 sm:p-6">
        
        {/* Sticky Close Button */}
        <div className=" top-0 bg-white  z-10 flex justify-end">
          <button
            onClick={onClose}
            className="text-black text-2xl font-bold hover:text-red-400"
          >
            &times;
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Update Group</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm sm:text-base">
          <div>
            <label htmlFor="groupName" className="font-medium">Group Name</label>
            <input
              id="groupName"
              type="text"
              name="groupName"
              value={formData.groupName}
              onChange={handleChange}
              required
              placeholder="Group Name"
              className="input input-bordered w-full"
             
            />
          </div>

          <div>
            <label htmlFor="category" className="font-medium">Select Hobby Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="select select-bordered w-full"
            >
              <option value="">Select Hobby Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="font-medium">Group Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Group Description"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="location" className="font-medium">Meeting Location (online/offline)</label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Meeting Location"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="maxMembers" className="font-medium">Max Members</label>
            <input
              id="maxMembers"
              type="number"
              name="maxMembers"
              value={formData.maxMembers}
              onChange={handleChange}
              required
              placeholder="Max Members"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="startDate" className="font-medium">Start Date</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="font-medium">Image URL</label>
            <input
              id="imageUrl"
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              value={users?.displayName || ''}
              readOnly
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
            <input
              type="email"
              value={users?.email || ''}
              readOnly
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
          </div>

          <button type="submit" className="btn btn-secondary w-full">
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateGroupModal;
