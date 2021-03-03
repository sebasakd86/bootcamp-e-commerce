import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.components";
import './sign-in.styles.scss'
const SignIn = () => {
    const [userData, setuserData] = useState({email:'', password: ''});
    const handleSubmit = (e) => {
        e.preventDefault()
        setuserData({email:'', password: ''})
    }
    const handleChange = (e) => {
        const {value, name} = e.target;
        setuserData({ [name]: value})
    }
    return ( 
        <div className="sign-in">
            <h2>I already have an acc</h2>
            <span>Sign in with your email and password</span>
            <form action="" onSubmit={handleSubmit}>
                <FormInput required type="email" value={userData.email} handleChange={handleChange} label="email" />
                <FormInput required type="password" value={userData.password} handleChange={handleChange} label="password"/>
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
     );
}
 
export default SignIn;