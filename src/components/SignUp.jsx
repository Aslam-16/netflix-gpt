import React from "react";




const SignUp = () => {
  return (

      <div className="flex flex-col flex-1 justify-center items-center px-20 py-8 h-80 gap-4">
        <div className="signup-header flex flex-col items-center gap-8">
          <h1 className="w-[55%] p-0">Unlimited movies, TV shows and more</h1>
          <p>Starts at 149. Cancel at anytime.</p>
        </div>
        <div className="signup-info flex flex-col gap-2">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input-grp flex gap-1">
            <input
              type="text"
              name=""
              id=""
              className="border-1 flex-1 p-2 outline-0"
            />
            <button className="border-1 bg-[#B20710] p-2 rounded-sm">{`Get Started >`}</button>
          </div>
        </div>
      </div>
 
  );
};

export default SignUp;
