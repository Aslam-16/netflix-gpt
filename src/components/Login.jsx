import React, { useRef, useState } from "react";
import Header from "./Header";

import {
  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../appstore/userSlice";
import { useNavigate } from "react-router";
import { validateInput } from "../utils/validateInput";



const Login = () => {

    const email=useRef();
    const password=useRef();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store =>store.user);
    console.log(user);
    
  
  const [signIn, setsignIn] = useState(true);
  const [error,seterror]=useState(null);

  const toggleSignIn = () => setsignIn(!signIn);

  const onSign=()=>{
    let mail=email.current.value;
    let pass=password.current.value;
    console.log(mail,pass);

    let check_input=validateInput(mail,pass);
    seterror(check_input);
    console.log(check_input);
    
    
    

   


    
    if(error===null)
{
    if(!signIn){
      console.log('aaaaa');
      
        createUserWithEmailAndPassword(auth, mail, pass)
          .then((userCredential) => {
            // Signed in
            const { uid, email } = userCredential;
            // Signed in
            console.log(userCredential);
            dispatch(addUser({ uid, email }));
            navigate("/browse");
            console.log("user", user);
            
            

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });

    }
    else {
       console.log("bbbbbb");
            signInWithEmailAndPassword(auth, mail, pass)
              .then((userCredential) => {
                const { email } = userCredential.user;
                console.log(email);
                
                // Signed in
                console.log('aaaa',userCredential);
                dispatch(addUser({
                 
                  email:email
                }));
                navigate("/browse");
                console.log('user',user);
                
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterror(errorCode)
                
              });

    }
  }

  }
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="absolute w-12/12 h-[100%]"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
            alt=""
          />
        </div>

        <div className="flex absolute items-center justify-center w-full my-50 ">
          <form action="" onSubmit={(e)=>e.preventDefault()} className="flex flex-col w-3/12  text-white p-10">
            <h1 className="text-2xl mb-4">{signIn ? `Sign In` : `Sign Up`}</h1>
            {!signIn && (
              <input
                type="text"
                name=""
                id=""
                className="mb-4 p-3 border-1 border-amber-50 rounded-sm outline-0"
                placeholder="Enter your Name"
              />
            )}
            <input
              type="text"
              name=""
              id=""
              ref={email}
              className="mb-4 p-3 border-1 border-amber-50 rounded-sm outline-0"
              placeholder="Enter your mail"
            />
            <input
              type="password"
              name=""
              id=""
              ref={password}
              className="mb-4 p-3 border-1 border-amber-50 rounded-sm outline-0"
              placeholder="Enter your Password"
            />
            <button type='button' className="bg-red-900 mt-6 p-3 rounded-sm" onClick={onSign}>
              {signIn ? `Sign In` : `Sign Up`}
            </button>
            <p className="text-red-400 font-bold pt-4">{error}</p>
            <p className="mt-3 cursor-pointer" onClick={toggleSignIn}>
              {signIn
                ? "New to Netflix? SignUp Now"
                : "Already a User SignIn Now "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
