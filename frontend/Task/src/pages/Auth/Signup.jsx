import React, { useState } from 'react'
import AuthLayout from '../../componenets/layouts/AuthLayout'
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../Inputs/ProfilePhotoSelector';
import Input from '../../Inputs/Input';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [adminInviteToken, setAdminInviteToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError(""); // Clear the error if everything is valid
  };

  return (
    <AuthLayout>
      <div className='lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering your details below
        </p>
        <form onSubmit={handleSubmit}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* You might want to add input fields here for fullName, email, and password */}
            <Input
            
            value={fullName}
            onChange={({target})=>{setFullName(target.value)}}
            label={"Full Name"}
            placeholder={"John"}
            type={"text"}
            />
            <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />
         <Input
          value={password}
          onChange={(target) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
        <Input
          value={adminInviteToken}
          onChange={(target) => setAdminInviteToken(target.value)}
          label="Amin Invite Token"
          placeholder="Min 6  Characters"
          type="text"
        />
        </div>
         {error && <p className='text-red-500 text-sm my-2'>{error}</p>}
        <button className='btn-primary' onClick={handleSubmit}>
          SIGN UP
        </button>
        <p className='text-[13px] text-slate-800 mt-3'>
          Have an account?{" "}
          <Link to="/login" className='text-primary underline'>Login
          </Link>
          </p>
          
        </form>
      </div>
    </AuthLayout>
  );
}

export default Signup;

