// AllGroups.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const dummyGroups = [
  {
    id: 1,
    name: "Nature Hikers",
    category: "Hiking",
    members: 15,
    location: "Dhaka",
    startDate: "2025-06-01",
    image: "https://source.unsplash.com/600x400/?hiking",
  },
  {
    id: 2,
    name: "Bookworms United",
    category: "Reading",
    members: 10,
    location: "Chittagong",
    startDate: "2025-06-15",
    image: "https://source.unsplash.com/600x400/?books",
  },
  // Add 4 more dummy objects
];





function Allgroups() {



  
  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Hobby Groups</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {dummyGroups.map((group) => (
          <div key={group.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={group.image} alt={group.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{group.name}</h3>
              <p className="text-sm text-gray-600">Category: {group.category}</p>
              <p className="text-sm">Location: {group.location}</p>
              <p className="text-sm">Members: {group.members}</p>
              <p className="text-sm">Starts: {group.startDate}</p>
              <Link to={`/group/${group.id}`}>
                <button className="mt-4 btn btn-sm btn-primary w-full">See More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allgroups;
