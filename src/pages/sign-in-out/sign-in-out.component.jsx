import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInOutContainer } from "./sign-in-out.styles";

// import './sign-in-out.styles.scss'

const SignInAndSignUpPage = () => {
    return (
        <SignInOutContainer>
            <SignIn />
            <SignUp />
        </SignInOutContainer>
    );
};

export default SignInAndSignUpPage;
