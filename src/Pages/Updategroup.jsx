import React, { useState } from 'react'
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

function Updategroup() {

 const group = useLoaderData();
      console.log(group)



       const user = {
          displayName: 'Jane Doe',
          email: 'jane@example.com'
        };
      
        const [formData, setFormData] = useState({
          groupName: '',
          category: '',
          description: '',
          location: '',
          maxMembers: '',
          startDate: '',
          imageUrl: '',
        });
      
        const categories = [
          "Drawing & Painting",
          "Photography",
          "Video Gaming",
          "Fishing",
          "Running",
          "Cooking",
          "Reading",
          "Writing"
        ];




  const handleSubmit = (e) => {
    e.preventDefault();

    // const groupData = {
    //   ...formData,
    //   userName: user.displayName,
    //   userEmail: user.email
    // };
    const formdata = new FormData(e.target);
    const inputdata = Object.fromEntries(formdata.entries());
    console.log(inputdata);

    // Replace this with a fetch/axios call to your backend
    // console.log('Submitting:', groupData);



   fetch(`http://localhost:4500/groups/${group._id}`, { 

            method: 'PUT', 

            headers: { 

                "Content-Type": "application/json", 

            }, 

            body: JSON.stringify(inputdata), 

        }) 

            .then(res => res.json()) 

            .then(data => { 
                if(data.modifiedCount)
                {
                    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
                }

                console.log('after the post', data) 

                

                // e.target.reset() 

            }) 

}

  //   toast.success('Group created successfully!');
  //   setFormData({
  //     groupName: '',
  //     category: '',
  //     description: '',
  //     location: '',
  //     maxMembers: '',
  //     startDate: '',
  //     imageUrl: '',
  //   });
  // };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Create a New Hobby Group</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg space-y-5">
        <input
          type="text"
          name="groupName"
          required
          placeholder="Group Name"
          className="input input-bordered w-full"
     
        
        />

        <select
          name="category"
          required
          className="select select-bordered w-full"
        
         
        >
          <option value="">Select Hobby Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <textarea
          name="description"
          required
          rows="3"
          placeholder="Group Description"
          className="textarea textarea-bordered w-full"
    
         
        />

        <input
          type="text"
          name="location"
          required
          placeholder="Meeting Location"
          className="input input-bordered w-full"
   
         
        />

        <input
          type="number"
          name="maxMembers"
          required
          placeholder="Max Members"
          className="input input-bordered w-full"
       
         
        />

        <input
          type="date"
          name="startDate"
          required
          className="input input-bordered w-full"
        
         
        />

        <input
          type="text"
          name="imageUrl"
          required
          placeholder="Image URL"
          className="input input-bordered w-full"
    
         
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            readOnly
      
            className="input input-bordered w-full"
          />
          <input
            type="email"
            readOnly
         
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-secondary w-full">Update Group</button>
      </form>
    </div>
  );
}

export default Updategroup
