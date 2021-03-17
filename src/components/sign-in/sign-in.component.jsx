import { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.components";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/ducks/userDucks";
const SignIn = () => {
    const dispatch = useDispatch();
    const [userData, setuserData] = useState({ email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userData;
        console.log("Login!", email, password);
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // console.log('Return from login --->',aux);
            dispatch(setCurrentUser({ email: "", password: "" }));
        } catch (err) {
            // console.log('Log In Error ->', err.message);
        }
    };
    const handleChange = (e) => {
        const { value, name } = e.target;
        setuserData({ ...userData, [name]: value });
    };
    return (
        <div className='sign-in'>
            <h2>I already have an acc</h2>
            <span>Sign in with your email and password</span>
            <form action='' onSubmit={handleSubmit}>
                <FormInput
                    required
                    name='email'
                    type='email'
                    value={userData.email}
                    handleChange={handleChange}
                    label='email'
                />
                <FormInput
                    required
                    name='password'
                    type='password'
                    value={userData.password}
                    handleChange={handleChange}
                    label='password'
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        isGoogleSignIn={true}
                        onClick={signInWithGoogle}>
                        {" "}
                        Sign In WITH Google{" "}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
