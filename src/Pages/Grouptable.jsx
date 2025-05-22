import React from 'react'

function Grouptable() {
  return (

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200 text-base font-semibold">
              <th>#</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Max Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myGroups.map((group, index) => (
              <tr key={group.id} className="hover">
                <th>{index + 1}</th>
                <td>{group.name}</td>
                <td>{group.category}</td>
                <td>{group.location}</td>
                <td>{group.startDate}</td>
                <td>{group.maxMembers}</td>
                <td className="space-x-2">
                <Link to={'/updategroups'}>  <button className="btn btn-sm btn-info">Update</button></Link>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
  )
}

export default Grouptable
