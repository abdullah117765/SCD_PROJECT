import { useEffect,useState } from "react";
import React from 'react';
import FormInput from "../../components/textbox/FormInput";
import Navbar from "../../components/navbar/Navbar";
import "./signup.css";
import { useNavigate } from "react-router-dom";


let permission=false;

function loginrquest(email1, password1) {
 
 
  
};


const Signin = () => {
  const navigate = useNavigate();

  


   




  const [values, setValues] = useState({
    
    email: "",
    password: "",
  });

  const inputs = [
   
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
  
    e.preventDefault();
    
  

         const data = { email: values.email, password: values.password };

         fetch('/users/signin', {
           method: 'POST', // or 'PUT'
           headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
           },
           body: JSON.stringify(data),
         })
           .then((response) => response.json())
           .then((data) => {
             console.log('Success:', data);
            if(data.value === '1'){
     
            

                  navigate('/profile/${email: values.email}');
}
//             else{

// <ExampleToast>
//         Wrong credentials
//       </ExampleToast>

//             }
           })
           .catch((error) => {
             console.error('Error:', error);
           });






   
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <Navbar/>
    <div className="signup">
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="h1alpha">Sign In</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="buttonsign"  >Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Signin;