import React from 'react';
import { useLoaderData } from 'react-router';

const Groupdetail = () => {
  const group = useLoaderData();
  const { _id, groupName, category, location, maxMembers, imageUrl, description, startDate, userName, userEmail } = group;

  const groupHasStarted = new Date(startDate) < new Date();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg  overflow-hidden border border-gray-200 dark:border-gray-700 animate-moving-shadow4 dark:animate-moving-shadow2 ">
        <img src={imageUrl} alt="Group Banner" className="w-full h-64 object-cover" />

        <div className="p-6 md:p-10 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">{groupName}</h1>
          <span className="badge badge-secondary badge-xl text-sm">{category}</span>

          <p className="text-gray-700 dark:text-gray-300">{description}</p>

          <div className="grid sm:grid-cols-2 gap-6 text-lg mt-4">
            <div className="space-y-1">
              <p className="dark:text-cyan-500">
                <span className="font-semibold">Meeting Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">Start Date:</span> {new Date(startDate).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Max Members:</span> {maxMembers}
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Organizer Name:</span> {userName}
              </p>
              <p>
                <span className="font-semibold">Organizer Email:</span> {userEmail}
              </p>
            </div>
          </div>

          <div className="mt-6">
            {groupHasStarted ? (
              <p className="text-red-500 font-medium text-2xl">This group is no longer active.</p>
            ) : (
              <button className="btn btn-success w-full md:w-auto">Join This Group</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groupdetail;
