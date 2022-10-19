
import {
  
  faEdit,
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import ExampleToast from "../../components/toast.jsx";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "./images.jpg";
import "./profile.css"


{/* <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast> */}



export default function Profile() {

  
 
  const [getnum, setnum] = useState("03110579957");
  const [getemail, setemail] = useState( "i200457@nu.edu.pk");
  const [getpass, setpass] = useState("*******");

  function updatenum(event) {
    setnum(event.target.value);
  }
  function updateemail(event) {
    setemail(event.target.value);
  }
  function updatpass(event) {
    setpass(event.target.value);
  }






  return (
 
 <div className="outer">

<div className="left">



    <Card style={{ width: '23rem' , height:'50rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body >
        <Card.Title >    ------  Mian Abdullah ------    </Card.Title> 
        <Card.Text>
        
        <p> </p><p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <span className="giga">
 <input  className="te1" value= {getemail}  onChange={updateemail}></input>
<Button   > <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></Button>
</span>
          <p> </p>
          <span className="giga">
<input  className="te1" value= {getnum}  onChange={updatenum}></input>
<Button  > <FontAwesomeIcon icon={faEdit} />
            <span>Edit</span></Button>
</span>

<span className="giga">
<input  className="te1" value= {getpass}  onChange={updatpass}></input>
<Button  > <FontAwesomeIcon icon={faEdit} />
            <span>Change</span></Button>
</span>

<hr ></hr>
          
        </Card.Text>
        
        
      </Card.Body>
    </Card>
  

</div>

<div className="right">

<div className="up">
<div className='sidecontent'>
  
    <h1> this is just good what else can i say </h1>
 
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