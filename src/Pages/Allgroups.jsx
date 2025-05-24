import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { Helmet } from 'react-helmet-async';

function Allgroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('https://hobyhub-server.vercel.app/groups')
      .then(res => res.json())
      .then(data => setGroups(data));
  }, []);

  return (
  <>
    <Helmet>
          <title>Hobby-Hub | Allgroups</title>
         </Helmet>
    <Fade  direction='bottom-left' triggerOnce={true}>
       <div className="min-h-screen px-4 py-10  dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">All Hobby Groups</h2>
       {groups.length==0 ? <p className="text-center text-gray-500">No ongoing groups available right now.</p> :  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12">
       
        {groups.map((group) => (
          <div key={group._id} className="bg-white rounded-xl shadow-lg overflow-hidden animate-moving-shadow  dark:bg-gray-900 dark:text-white">
            <img src={group.imageUrl} alt={group.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{group.groupName}</h3>
              <p className="text-sm text-gray-600">Category: {group.category}</p>
          
              <p className="text-sm">Members: {group.maxMembers}</p>
              <p className="text-sm">Starts: {group.startDate}</p>
              <Link to={`/groupdetails/${group._id}`}>
                <button className="mt-4 btn btn-sm btn-circle w-full btn-secondary">See More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>}
     
    </div>
    </Fade>
  </>
   
  );
}
export default Allgroups;
