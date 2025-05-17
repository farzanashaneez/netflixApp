import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Login = () => {
  const [rememberLogin,setRememberLogin]=useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState(null); 

  const {user,logIn}=UserAuth();
 const navigate=useNavigate();
  const handleFormSubmit=async(e)=>{
    e.preventDefault();
    if (!email) {
      setError("Login Error .! Email is required.");
      return;
    }
    if (!password) {
      setError("Login Error .! Password is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid.");
      return;
    }

   try{
    await logIn(email,password);
    navigate('/')
   }catch(err){
console.log(err);
setError("Failed to log in. Please check your credentials.");
   }
  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/AE-en-20240909-TRIFECTA-perspective_fdcd0c88-7cba-4832-a5fc-f2de08256acb_large.jpg"
          alt=""
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Login</h1>
              {error && <p className="text-red-500">{error}</p>}
              <form className="w-full flex flex-col py-4" onSubmit={handleFormSubmit}>
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">
                  Login
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" checked={rememberLogin} onChange={()=>setRememberLogin(!rememberLogin)}/>
                    Remember Me
                  </p>
                  <p>Need Help</p>

                  
                </div>
                <p className="my-4">
                    <span className="text-gray-600 mr-2">
                      Already Subscribed to Netflix?
                    </span>
                    <Link to="/login">Sign In</Link>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login
