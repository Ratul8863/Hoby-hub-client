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
    <div className="p-6 md:p-8 bg-[#1A1A2E] text-gray-200 min-h-screen">
      <Helmet>
        <title>Dashboard | All Items</title>
      </Helmet>

      {/* Page Title - Consistent with Storeshop dashboard headers */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100">All Hobby Groups</h1>

      {/* Table Container - Mimicking Storeshop card style */}
      <div className="overflow-x-auto bg-[#2C2C4A] rounded-xl shadow-xl border border-gray-800">
        <table className="min-w-full divide-y divide-gray-700"> {/* Use min-w-full and divide-y for borders */}
          <thead className="bg-[#2C2C4A]"> {/* Table header background matches card background */}
            <tr>
              {/* Table Headers - Text color and padding matching Storeshop's table headers */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Group Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Max Members</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800"> {/* Body rows separated by a dark border */}
            {groups.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-400">
                  No groups available.
                </td>
              </tr>
            ) : (
              groups.map((group, i) => (
                <tr
                  key={group._id}
                  // Hover effect like Storeshop's recent activity table
                  className="bg-[#2C2C4A] hover:bg-[#3A3A5A] transition duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{i + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-100">{group.groupName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{group.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{group.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {new Date(group.startDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{group.maxMembers}</td>
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