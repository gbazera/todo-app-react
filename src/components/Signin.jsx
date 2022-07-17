import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

function Signin(){
    // const {googleSignIn, user} = UserAuth();
    // const navigate = useNavigate();

    // const handleGoogleSignIn = async () =>{
    //     try{
    //         await googleSignIn();
    //     } catch (error){
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     if(user !== null){
    //         navigate('/')
    //     }
    // },[user]);

    return(
        <div className="signin-panel">
            <p className="title">Welcome to <span>Tasker!</span></p>
            <p>Sign in to start using the website.</p>
            {/* <Link to="/" style={{ textDecoration: 'none', marginTop: '40px' }}> */}
                {/* <button onClick={handleGoogleSignIn} className="btn"><i className="bx bxl-google"></i> SIGN IN WITH GOOGLE</button> */}
            {/* </Link> */}
        </div>
    );
}

export default Signin;