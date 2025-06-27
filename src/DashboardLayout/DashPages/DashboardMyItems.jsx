import React, { useState, useEffect, useContext } from 'react';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { FaUsersCog } from 'react-icons/fa';
import { Valuecontext } from '../../Root/Root';
import UpdateGroupModal from '../../Components/UpdateGroupModal';

function Mygroups() {
  const { users } = useContext(Valuecontext);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchGroups = () => {
    fetch('https://hobyhub-server.vercel.app/groups')
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(() => {});
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleUpdateClick = (group) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  const handleDeleteClick = (groupId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobyhub-server.vercel.app/groups/${groupId}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
              fetchGroups();
            }
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Delete failed',
              text: err.message || 'Something went wrong!'
            });
          });
      }
    });
  };

  const handleViewClick = (groupId) => {
    navigate(`/groupDetails/${groupId}`);
  };

  const userGroups = groups.filter(group => group.userEmail === users?.email);

  return (
    <div className="p-6 md:p-2  max-w-8xl  mx-auto dark:bg-gray-900  min-h-screen text-black dark:text-white transition-colors duration-300">
      <Helmet>
        <title>HobbyHub | My Groups</title>
      </Helmet>

      {/* Heading */}
      <div className="text-center mb-8 ">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
          <FaUsersCog className="text-secondary" />
          My Hobby Groups
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Manage, update, or remove your created groups.</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto  bg-white dark:bg-gray-900 rounded-lg shadow-xl ">
  <table className="table max-w-full text-sm">
    <thead className="bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-gray-200">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Category</th>
        <th>Location</th>
        <th>Start Date</th>
        <th>Max Members</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {userGroups.length === 0 ? (
        <tr>
          <td colSpan="7" className="text-center py-10 text-gray-500 dark:text-gray-400">
            You haven’t created any groups yet.
          </td>
        </tr>
      ) : (
        userGroups.map((group, i) => (
          <tr
            key={group._id}
            className={`transition ${
              i % 2 === 0
                ? 'bg-white dark:bg-gray-900'
                : ' bg-gray-50 dark:bg-gray-800'
            } hover:bg-blue-50 dark:hover:bg-gray-700`}
          >
            <td className="px-4 py-2">{i + 1}</td>
            <td className="px-4 py-2 font-medium">{group.groupName}</td>
            <td className="px-4 py-2">{group.category}</td>
            <td className="px-4 py-2">{group.location}</td>
            <td className="px-4 py-2">{new Date(group.startDate).toLocaleDateString()}</td>
            <td className="px-4 py-2">{group.maxMembers}</td>
            <td className="px-4 py-2">
              <div className="flex  gap-2 justify-center">
                <button
                  onClick={() => handleViewClick(group._id)}
                  className="btn btn-xs md:btn-sm btn-outline btn-success"
                >
                  Info
                </button>
                <button
                  onClick={() => handleUpdateClick(group)}
                  className="btn btn-xs md:btn-sm btn-outline btn-warning"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteClick(group._id)}
                  className="btn btn-xs md:btn-sm btn-outline btn-error"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>


      {/* Update Modal */}
      <UpdateGroupModal
        group={selectedGroup}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onUpdate={fetchGroups}
      />
    </div>
  );
}

export default Mygroups;
