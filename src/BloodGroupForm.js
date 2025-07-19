import React from 'react';
const bloodGroupform=()=>{
const handleSubmit=(e)=>{
  e.preventDefault();
  const form=e.target;
  const name=form.elements.name.value;
  const email=form.elements.email.value;
  const bloodgroup=form.elements.bloodgroup.value;
  alert(`Name:${name}\nEmail:${email}\nBloodGroup:${bloodgroup}`);
};
return(
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        Name:
        <input type="text" name="name" required/>
      </label>
    </div>
    <div>
      <label>
        Email:
        <input type="email" name="email" required/>
      </label>
    </div>
    <div>
      <label>
        <select name="bloodgroup" required>
        <option value=" ">BloodGroupForm</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
        <option value="AB+">AB+</option>
        <option value="A-">A-</option>
        <option value="B-">B-</option>
        </select>
      </label>
          </div>
    <button type="Submit">Register</button>
  </form>
);
};
export default  bloodGroupform;