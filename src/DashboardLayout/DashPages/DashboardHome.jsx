import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Valuecontext } from '../../Root/Root';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  Legend
} from 'recharts';

function DashboardHome() {
  const { users } = useContext(Valuecontext);
  const [groups, setGroups] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://hobyhub-server.vercel.app/groups')
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(error => console.error("Error fetching groups:", error));
  }, []);

  const myGroups = groups.filter(group => group.userEmail === users?.email);
  const totalMembers = myGroups.reduce((sum, group) => sum + Number(group.maxMembers || 0), 0);

  const sortedGroups = [...groups].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  const filteredGroups = sortedGroups.filter(group =>
    group.groupName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryCounts = groups.reduce((acc, group) => {
    acc[group.category] = (acc[group.category] || 0) + 1;
    return acc;
  }, {});

  const trafficData = Object.entries(categoryCounts).map(([category, count]) => ({
    name: category,
    value: count
  }));

  const groupsPerDay = {};
  groups.forEach(group => {
    const date = new Date(group.startDate).toLocaleDateString();
    if (!groupsPerDay[date]) {
      groupsPerDay[date] = { groups: 0, names: [] };
    }
    groupsPerDay[date].groups += 1;
    groupsPerDay[date].names.push(group.groupName);
  });

  const chartData = Object.entries(groupsPerDay).map(([date, data]) => ({
    date,
    groups: data.groups,
    names: data.names
  }));

  const colors = ['#7B68EE', '#4A90E2', '#34D399', '#F59E0B', '#EF4444'];

  const StatCard = ({ title, value, valueColor }) => (
    <div className="bg-[#2C2C4A] rounded-xl p-6 shadow-xl border border-gray-800 transition hover:scale-[1.02] hover:shadow-2xl duration-200">
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <h3 className={`text-4xl font-bold ${valueColor} mt-1`}>{value}</h3>
    </div>
  );

  return (
    <div className="p-6 md:p-8 bg-[#1A1A2E] text-gray-200 min-h-screen space-y-8">
      <Helmet>
        <title>Dashboard | Overview</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full sm:w-auto flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#2C2C4A] text-sm text-gray-200 placeholder-gray-500 rounded-lg px-4 py-2 pl-10 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7B68EE]"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.82 4.82a1 1 0 01-1.42 1.41l-4.82-4.82A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <img
              src={users?.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${users?.displayName || 'User'}`}
              alt="User Avatar"
              className="w-8 h-8 rounded-full border border-gray-700"
            />
            <span className="hidden sm:inline-block">{users?.displayName || 'Guest User'}</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Hobby Groups" value={groups.length.toLocaleString()} valueColor="text-lime-400" />
        <StatCard title="My Created Groups" value={myGroups.length.toLocaleString()} valueColor="text-cyan-400" />
        <StatCard title="Total Members" value={totalMembers.toLocaleString()} valueColor="text-yellow-400" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-[#2C2C4A] rounded-xl p-6 shadow-xl border border-gray-800">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Groups Created Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#1A1A2E] p-3 rounded-md text-gray-200 text-sm shadow-md">
                      <p className="font-semibold">Date: {label}</p>
                      <p>Groups Created: {data.groups}</p>
                      {data.names && (
                        <>
                          <p className="mt-2 font-semibold">Group Names:</p>
                          <ul className="list-disc list-inside">
                            {data.names.map((name, i) => <li key={i}>{name}</li>)}
                          </ul>
                        </>
                      )}
                    </div>
                  );
                }
                return null;
              }} />
              <Bar dataKey="groups" fill="#7B68EE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-2 bg-[#2C2C4A] rounded-xl p-6 shadow-xl border border-gray-800">
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Traffic Channel (Group Category)</h3>
          <ResponsiveContainer width="100%" height={300} className={'border p-2'}>
            <PieChart>
              <Pie
                data={trafficData}
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label={({ name, percent }) => ` (${(percent * 100).toFixed(0)}%)`}
                dataKey="value"
              >
                {trafficData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />

                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1A1A2E', border: 'none', color: '#ccc' }} />
              
                 
              <Legend className='hidden md:visible'></Legend>
            </PieChart>
          </ResponsiveContainer>

          {/* Mobile legend */}
          <ul className="mt-4 text-sm space-y-1 sm:hidden">
            {trafficData.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                ></span>
                {item.name} ({item.value})
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Groups Table */}
        <div className="lg:col-span-4 bg-[#2C2C4A] rounded-xl p-6 shadow-xl border border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h3 className="text-lg font-semibold text-gray-100">Recent Hobby Groups</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700 text-sm">
              <thead className="text-left text-gray-400 uppercase text-xs">
                <tr>
                  <th className="px-3 py-2">Group Name</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2 hidden md:table-cell">Start Date</th>
                  <th className="px-3 py-2 hidden md:table-cell">Max Members</th>
                  <th className="px-3 py-2">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-200">
                {filteredGroups.length === 0 ? (
                  <tr><td colSpan="5" className="text-center py-6 text-gray-400">No recent groups to display.</td></tr>
                ) : (
                  filteredGroups.slice(0, 5).map(group => (
                    <tr key={group._id} className="hover:bg-[#3A3A5A] transition">
                      <td className="px-3 py-2 font-medium truncate max-w-[150px]">{group.groupName}</td>
                      <td className="px-3 py-2">
                        <span className="bg-[#7B68EE] text-white text-xs px-2 py-1 rounded-full">{group.category}</span>
                      </td>
                      <td className="px-3 py-2 hidden md:table-cell">{new Date(group.startDate).toLocaleDateString()}</td>
                      <td className="px-3 py-2 hidden md:table-cell">{group.maxMembers}</td>
                      <td className="px-3 py-2 truncate max-w-[150px] text-gray-400">{group.userEmail}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
