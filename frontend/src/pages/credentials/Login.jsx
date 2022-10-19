import "./login.css";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
// import Navbar from "../../components/navbar/Navbar";
export default function Login() {
  return (
    <div className="parent"> 
    {/* <Navbar /> */}

        <div className="loginRight">

          <div className="loginBox">
          <h2 className="loginLogo">Login</h2> 
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            
          </div>
          </div>
          
    
       
    </div>
  );
}