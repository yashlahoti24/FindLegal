import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Login =  (props) => {
  const [note,setNote] = useState({name:"",email:"", password:""}); 

    let navigate = useNavigate();
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
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
            props.showAlert('Login in successfullly', 'success');

            
          }else {
             props.showAlert('Invalid Creditianls', 'danger');
          }
    }
    const onChange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <form  onSubmit={handleSubmit}>
       <div className=" mb-3">
  <label htmlFor='name' className="form-label" >Username:-</label>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" id="name" name="name" onChange={onChange}/>
</div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name='password' onChange={onChange}/>
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Login