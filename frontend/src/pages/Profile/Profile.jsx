import 'bootstrap/dist/css/bootstrap.min.css';
import {
  
  faEdit,
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';


import Card from 'react-bootstrap/Card';
import logo from "./images.jpg";

import "./profile.css"


{/* <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast> */}



      function Getprofile() {
       
        const data = { email: "axiomshah@gmial.com" };

  fetch('/users/profile', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log( data);
    
    })
    .catch((error) => {
      console.error('Error:', error);
    });

      };





export default function Profile() {
  
  // { route, navigation }
  //const { emailparam } = route.params;

Getprofile();
  






  
 
  const [getnum, setnum] = useState("03110579957");
  const [getemail, setemail] = useState( "i200457@nu.edu.pk");
  const [getdate, setdate] = useState( "21/11/2022");
  const [getpass, setpass] = useState("*******");

  function updatenum(event) {
    setnum(event.target.value);
  }
  function updateemail(event) {
    setemail(event.target.value);
  }
  function updatepass(event) {
    setpass(event.target.value);
  }

  function updatedate(event) {
    setdate(event.target.value);
  }




  return (
 
 <div className="outer">

<div className="left">



    <Card style={{ width: '20rem' , height:'53rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body >
        <Card.Title >    ------  Mian Abdullah ------    </Card.Title> 
        <Card.Text>
        
        <p> </p><p> </p>
        <p> </p>
        <p> </p>
        
        <label>Name </label> 
        <span className="giga">
 <input  className="te1" value= {getemail}  onChange={updateemail}></input>
 <button class="button-26" role="button">  <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
</span>
          
          <label>Number </label> 
          <span className="giga">
<input  className="te1" value= {getnum}  onChange={updatenum}></input>
<button class="button-26" role="button"> <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
</span>



<label>Date </label> 
          <span className="giga">            
<input  className="te1" value= {getdate}  onChange={updatedate}></input>
<button class="button-26" role="button"> <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
</span>


<label>Password </label> 
<span className="giga">
<input  className="te1" value= {getpass}  onChange={updatepass}></input>
<button class="button-26" role="button">  <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></button>
</span>


          
        </Card.Text>
        
        
      </Card.Body>
    </Card>
  

</div>

<div className="right">

<div className="up">
<div className='sidecontent'>
  
    <h1> this is will be changed  </h1>
 
</div>
</div>

<div className="down">
<div className='sidecontent'>
  
    <h1> this is just good what else can i say </h1>
 
</div>


</div>


</div>

 </div>
    
     
   
  );
}