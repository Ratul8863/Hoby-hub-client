import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function DashboardAllItems() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("https://hobyhub-server.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    // Apply the Storeshop main background and default text color
    // This padding should be consistent with DashboardHome for full page content
    <div className="p-6 md:p-8  min-h-screen">
      <Helmet>
        <title>Dashboard | All Items</title>
      </Helmet>

      {/* Page Title - Consistent with Storeshop dashboard headers */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 ">All Hobby Groups</h1>

      {/* Table Container - Mimicking Storeshop card style */}
     <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-700">
  <table className="table w-full text-sm">
    <thead className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
      <tr>
        <th className="px-4 py-2">#</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Category</th>
        <th className="px-4 py-2">Location</th>
        <th className="px-4 py-2">Start Date</th>
        <th className="px-4 py-2">Max Members</th>
      </tr>
    </thead>
    <tbody>
      {groups.length === 0 ? (
        <tr>
          <td colSpan="6" className="text-center py-10 text-gray-500 dark:text-gray-400">
            No groups available.
          </td>
        </tr>
      ) : (
        groups.map((group, i) => (
          <tr
            key={group._id}
            className={`transition duration-200 ${
              i % 2 === 0
                ? 'bg-white dark:bg-gray-900'
                : 'bg-gray-50 dark:bg-gray-800'
            } hover:bg-blue-50 dark:hover:bg-gray-700`}
          >
            <td className="px-4 py-3">{i + 1}</td>
            <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-100">{group.groupName}</td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{group.category}</td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{group.location}</td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {new Date(group.startDate).toLocaleDateString()}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{group.maxMembers}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default DashboardAllItems;