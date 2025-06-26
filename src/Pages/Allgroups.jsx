import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { Helmet } from 'react-helmet-async';

function Allgroups() {
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetch('https://hobyhub-server.vercel.app/groups')
      .then(res => res.json())
      .then(data => {
        setGroups(data);
        setFilteredGroups(data);
      });
  }, []);

  useEffect(() => {
    let filtered = [...groups];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(g => g.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (searchText.trim() !== '') {
      filtered = filtered.filter(g =>
        g.groupName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      const aVal = Number(a.maxMembers);
      const bVal = Number(b.maxMembers);
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });

    setFilteredGroups(filtered);
  }, [sortOrder, selectedCategory, searchText, groups]);

  const categories = [...new Set(groups.map(group => group.category))];

  return (
    <>
      <Helmet><title>HobbyHub | All Groups</title></Helmet>

      <Fade direction='bottom-left' triggerOnce>
        <div className="min-h-screen px-4 py-10 dark:bg-gray-900 dark:text-white max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">Explore All Hobby Groups</h2>

          {/* Search and Filter Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="w-full sm:w-auto flex-1">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by Group Name..."
                className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <button
              onClick={() => setShowFilter(prev => !prev)}
              className="btn btn-outline btn-secondary btn-sm"
            >
              {showFilter ? "Hide Filters" : "Filter Groups"}
            </button>
          </div>

          {/* Filter Section */}
          {showFilter && (
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-start items-center dark:bg-gray-800 bg-base-200 p-4 rounded-lg shadow-md">
              {/* Category Filter */}
              <div>
                <label className="font-semibold mr-2">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="select select-bordered dark:bg-gray-900 dark:border-gray-600"
                >
                  <option value="all">All</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="font-semibold mr-2">Sort by Members:</label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="select select-bordered dark:bg-gray-900 dark:border-gray-600"
                >
                  <option value="desc">High to Low</option>
                  <option value="asc">Low to High</option>
                </select>
              </div>
            </div>
          )}

          {/* Group Cards */}
          {filteredGroups.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">No groups match your search/filter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredGroups.map(group => (
                <div key={group._id} className="bg-base-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                  <img
                    src={group.imageUrl || "https://via.placeholder.com/400"}
                    alt={group.groupName}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4 space-y-1">
                    <h3 className="text-lg font-bold text-primary">{group.groupName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Category: {group.category}</p>
                    <p className="text-sm text-cyan-600">Location: {group.location}</p>
                    <p className="text-sm text-pink-600">Max Members: {group.maxMembers}</p>
                    <Link to={`/groupdetails/${group._id}`}>
                      <button className="mt-3 w-full btn btn-sm btn-secondary hover:btn-primary">See More</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Fade>
    </>
  );
}

export default Allgroups;
