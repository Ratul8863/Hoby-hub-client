// MyGroups.jsx
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

// const myGroups = [
//   {
//     id: 1,
//     name: "Photography Buddies",
//     category: "Photography",
//     location: "Sylhet",
//     maxMembers: 20,
//     startDate: "2025-07-01",
//   },
//   {
//     id: 2,
//     name: "Cooking Circle",
//     category: "Cooking",
//     location: "Dhaka",
//     maxMembers: 10,
//     startDate: "2025-06-10",
//   },
// ];





function Mygroups() {
 

const handledelete = (id) => {
    console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      // console.log(result.isConfirmed)
      if (result.isConfirmed) {


        fetch(`http://localhost:4500/groups/${id}`, {
          method: 'DELETE'

        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                // alert("Deleted")

              });
              const remainingusers = finalgroup.filter(coffee => coffee._id !== id);
              setFinalgroup(remainingusers);
         

            }

          
          })


      }
    });


  }

   const groups = useLoaderData();
  const [finalgroup,setFinalgroup] = useState(groups)

console.log(finalgroup)


  const length =groups.index;
console.log(groups)
  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Created Groups</h2>
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
            {finalgroup.map((group,index) => (
              <tr key={group._id} className="hover">
                <th>{index+1}</th>
                <td>{group.groupName}</td>
                <td>{group.category}</td>
                <td>{group.location}</td>
                <td>{group.startDate}</td>
                <td>{group.maxMembers}</td>
                <td className="space-x-2">
                <Link to={`/updategroups/${group._id}`}>  <button className="btn btn-sm btn-info">Update</button></Link>
                 <Link to={`/groupdetails/${group._id}`}>  <button className="btn btn-sm btn-info">Details</button></Link>
                  <button onClick={()=>handledelete(group._id)} className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mygroups;
