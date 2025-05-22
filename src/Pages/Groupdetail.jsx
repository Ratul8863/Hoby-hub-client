import React from 'react';
import { useLoaderData } from 'react-router';

const Groupdetail = () => {

  // Dummy static data — replace with dynamic props/state later
//   const group = {
//     name: 'Creative Drawing Circle',
//     category: 'Drawing & Painting',
//     imageURL: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
//     description: 'A vibrant group of artists who meet weekly to explore creativity through drawing and painting. Open to all skill levels!',
//     location: 'Community Art Center, Dhaka',
//     maxMembers: 20,
//     startDate: '2025-06-10',
//     userName: 'Hasan Ahmed',
//     userEmail: 'hasan@example.com'
//   };

 const group = useLoaderData();
      const {_id,name,category,location,maxMembers,imageUrl} = group;
    console.log(group)


  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
        <img src={imageUrl} alt="Group Banner" className="w-full h-64 object-cover" />

        <div className="p-6 md:p-10 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
          <span className="badge badge-accent text-sm">{category}</span>

          <p className="text-gray-600">{group.description}</p>

          <div className="grid sm:grid-cols-2 gap-6 text-sm mt-4">
            <div>
              <p><span className="font-semibold">Meeting Location:</span> {location}</p>
              <p><span className="font-semibold">Start Date:</span> {new Date(group.startDate).toLocaleDateString()}</p>
              <p><span className="font-semibold">Max Members:</span> {maxMembers}</p>
            </div>
            <div>
              <p><span className="font-semibold">Organizer Name:</span> </p>
              <p><span className="font-semibold">Organizer Email:</span> </p>
            </div>
          </div>

          <div className="mt-6">
            <button className="btn btn-primary w-full md:w-auto">Join This Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groupdetail;