import React, { useState, useEffect, useContext } from 'react';
import UpdateGroupModal from '../Components/UpdateGroupModal';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Valuecontext } from '../Root/Root';
import { Helmet } from 'react-helmet-async';

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
      .catch(err => 
      {
// console.error(err)
      }
        
      );
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

  const userGroups = groups.filter(group => group.userEmail === users.email);

  return (
    <div className="p-4 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <Helmet>
              <title>Hobby-Hub | Mygroups</title>
             </Helmet>
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">My Groups</h1>

      <div className="overflow-x-auto rounded-lg border dark:border-gray-700">
        <table className="table w-full text-left min-w-[600px]">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Max Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userGroups.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 dark:text-gray-300">
                  No groups found
                </td>
              </tr>
            ) : (
              userGroups.map((group, i) => (
                <tr
                  key={group._id}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-800 text-sm"
                >
                  <td>{i + 1}</td>
                  <td>{group.groupName}</td>
                  <td>{group.category}</td>
                  <td>{group.location}</td>
                  <td>{new Date(group.startDate).toLocaleDateString()}</td>
                  <td>{group.maxMembers}</td>
                  <td className="flex flex-col md:flex-row md:space-x-2 space-y-1 md:space-y-0 py-2">
                    <button
                      onClick={() => handleViewClick(group._id)}
                      className="btn btn-outline btn-success btn-xs md:btn-sm"
                    >
                      Info
                    </button>
                    <button
                      onClick={() => handleUpdateClick(group)}
                      className="btn btn-outline btn-secondary btn-xs md:btn-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteClick(group._id)}
                      className="btn btn-outline btn-error btn-xs md:btn-sm "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Update Group Modal */}
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
