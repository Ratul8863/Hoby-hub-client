import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { Valuecontext } from '../Root/Root'; // Adjust import path as needed

export default function UpdateGroupModal({ group, isOpen, onClose, onUpdate }) {
  const { users } = useContext(Valuecontext);

  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing"
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
        groupName: group.name || '',
        category: group.category || '',
        description: group.description || '',
        location: group.location || '',
        maxMembers: group.maxMembers || '',
        startDate: group.startDate || '',
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
      body: JSON.stringify(formData),
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-center mb-6">Update Hobby Group</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
            required
            placeholder="Group Name"
            className="input input-bordered w-full"
            readOnly
          />
          <select
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
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Group Description"
            className="textarea textarea-bordered w-full"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Meeting Location"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name="maxMembers"
            value={formData.maxMembers}
            onChange={handleChange}
            required
            placeholder="Max Members"
            className="input input-bordered w-full"
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              value={users?.displayName || ''}
              readOnly
              className="input input-bordered w-full"
            />
            <input
              type="email"
              value={users?.email || ''}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-secondary w-full">Update Group</button>
        </form>
      </div>
    </div>
  );
}
