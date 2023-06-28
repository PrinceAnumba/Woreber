import { useContext, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { GoogleIcon, Back , Fb, InstagramLg } from '../assets'

const Signup = () => {

    const history = useNavigate();
  return (
    <div className="login w-4/5 my-32">
        <div className="back w-4/5 mb-24 flex flex-col gap-4">
          <button onClick={()=> history(-1)}><img src={Back} alt="go-back" /></button>
          <h5 className=''>Become a memeber</h5>
          <span className="grey-out">Sign up for free. Join the omunity.</span>
        </div>
        <div className=" flex flex-col justify-center items-center">
            <form action=" " className="flex flex-col gap-4 ">
                <input type="email" name="email" id="email" className="cta-input p-4" placeholder="Email Address" />
                <input type="text" name="firstname" id="firstname" className="cta-input p-4" placeholder="First Name" />
                <input type="text" name="lastname" id="lastname" className="cta-input p-4" placeholder="Last Name" />
                <input type="text" name="address" id="address" className="cta-input p-4" placeholder="Address and Road Number" />
                <div className=" flex flex-col">
                    <label htmlFor="DOB" className="cta-label">DATE OF BIRTH</label>
                    <input type="date" name="" id="" className="cta-input p-4" />
                </div>
                <input type="password" name="password" id="password" className="cta-input p-4" placeholder="Password" />
                <input type="password" name="confirmpassword" id="confirmpassword" className="cta-input p-4" placeholder="Confirm Password" />
                <button className="signup-btn my-8 py-4 rounded-md w-full bg-black text-white"  type="submit">Sign up</button>

                <div className="socials w-full mt-12">
                <div className="w-full  flex justify-center items-center relative">
                    <hr  className="w-full"/>
                    <span className=" absolute bg-white px-1 text-gray-500">sign Up with</span>
                </div>
            </div>
            </form>
            <div className=" flex  my-12 gap-2">
                <img className="w-12" src={GoogleIcon} alt="logo" />
                <img className="w-12" src={InstagramLg} alt="logo" />
                <img className="w-12" src={Fb} alt="logo" />
            </div>

            <div className=" text-gray-500 w-1/2 text-center">Lorem ipsum dolor sit amet consectetur. Eu pretium cursus sed ullamcorper tristique amet ornare dignissim. Sagittis id enim proin dignissim convallis consectetur. Sit elit urna fermentum blandit. Viverra ornare eu elit pharetra eget senectus neque sed odio. Condimentum egestas ultricies a elementum.</div>
            
        </div>
    </div>
  )
}

export default Signup