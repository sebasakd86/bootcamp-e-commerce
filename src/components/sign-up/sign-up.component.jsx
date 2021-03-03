import { useState } from 'react';
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
const SignUp = () => {
    const [estado, setestado] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = estado;
        console.log(password, confirmPassword);
        if(password !== confirmPassword){
            alert(`Password don't match`);
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setestado({ displayName: '', email: '', password: '', confirmPassword: '' })
        }
        catch(err){
            console.log('Error SignUp -->', err.message);
        }
    }
    const handleChange = (e) => {
        setestado({ ...estado, [e.target.name] : e.target.value})
    }

    const {displayName, email, password, confirmPassword} = estado
    return (  
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text' name='displayName' value={displayName}
                    onChange={handleChange} label='Display Name' required
                />
                <FormInput
                    type='email' name='email' value={email}
                    onChange={handleChange} label='Email' required
                />
                <FormInput
                    type='password' name='password' value={password}
                    onChange={handleChange} label='Password' required
                />
                <FormInput
                    type='password' name='confirmPassword' value={confirmPassword}
                    onChange={handleChange} label='Confirm Password' required
                />        
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;