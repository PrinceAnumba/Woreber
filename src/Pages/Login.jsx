import { useContext, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { GoogleIcon, Back , Fb, InstagramLg } from '../assets'

const Login = () => {
  return (
    <div className="login w-4/5 my-32">
        <div className="back w-4/5 mb-24 flex flex-col gap-4">
          <button onClick={()=> history(-1)}><img src={Back} alt="go-back" /></button>
          <h5 className=''>Welcome back Customer</h5>
          <span className="grey-out">Enter your details so we can log you in Successfully!</span>
        </div>
        <div className=" flex flex-col justify-center items-center">
            <form action=" " className="flex flex-col gap-4 ">
                <input type="email" name="email" id="email" className="cta-input p-4" placeholder="Email Address" />
                <input type="password" name="password" id="password" className="cta-input p-4" placeholder="Password" />
                <div className=" flex justify-between items-center">
                    <div className="remember-me flex items-center">
                        <input type="checkbox" name="remember" id="remember" className="mr-4"/>
                        <span className="text-gray-500">Remember me</span>
                    </div>
                    <button className="forgot-btn">Forgot Password ?</button>
                </div>
                <button  className="login-btn my-8 py-4 rounded-md w-full bg-black text-white"  type="submit">Login</button>

                <div className="socials w-full mt-12">
                <div className="w-full  flex justify-center items-center relative">
                    <hr  className="w-full"/>
                    <span className="  absolute bg-white px-1 text-gray-500">sign Up with</span>
                </div>
            </div>
            </form>
            <div className=" flex  my-12 gap-2">
                <img className="w-12" src={GoogleIcon} alt="logo" />
                <img className="w-12" src={InstagramLg} alt="logo" />
                <img className="w-12" src={Fb} alt="logo" />
            </div>

        </div>
    </div>
  )
}

export default Login