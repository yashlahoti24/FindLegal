import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom';
const Signup = (props) => {
  const [note,setNote] = useState({name:"",email:"", password:"",cpassword:""}); 
  let navigate = useNavigate();
  const handleSubmit =async (e)=>{
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
         
          body: JSON.stringify({name:note.name,email:note.email,password:note.password}), 
        });
        const json = await response.json();
        console.log(json)
        if(json.success) {
          localStorage.setItem('token',json.authToken)
          navigate("/")
          props.showAlert('Account created successfully', 'success');
        }else {
          props.showAlert('Invalid Creditianls', 'danger');
        }
  }
  const onChange =(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
} 
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">User name</label>
      <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp"  required minLength={5} onChange={onChange} />
    
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp"  required minLength={5} onChange={onChange}/>
    
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name='password'  required minLength={5} onChange={onChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">confirm Password</label>
      <input type="password" className="form-control" id="cpassword" name='cpassword' required minLength={5} onChange={onChange}/>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  ) 
}

export default Signup