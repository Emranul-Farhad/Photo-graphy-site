import React, { useState } from 'react';
import './Login.css'
import { useCreateUserWithEmailAndPassword,  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../components/Navbar/Nav';
import auth from '../FirebaseKey/Key';
import toast from 'react-hot-toast';
import Loading from '../components/Loading/Loading';
import { async } from '@firebase/util';





const Login = () => {

    const navigate = useNavigate()
    const [approve , setApprove] = useState(false)
    const [errors, setError] = useState("")
    const [email, setEmai] = useState("")
    const [password, setPassword] = useState("")
    const [conpass, setConpass] = useState(" ")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification :true});

     const [Email , setEmaiL] = useState("")
     const [PassworD , setPasswords] = useState("")

    const [
        signInWithEmailAndPassword,
        users,
        loadingLogin,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending, reseterror ] = useSendPasswordResetEmail(
        auth
      );

    const getemail = event => {
        setEmai(event.target.value)
        console.log(event.target.value);
    }

    const getpass = event => {
        setPassword(event.target.value)
        console.log(event.target.value);
    }

    const confirmpass = event => {
        setConpass(event.target.value)
    }

    const location = useLocation()
  let from = location.state?.from?.pathname || "/";


  if (user || users) {
    toast('successfully done!', {id : "signup"}  , {
        icon: '👏', 
      });
    navigate(from, { replace: true })
  }


  if(loading || loadingLogin || sending){
    return <Loading></Loading>
 }

    const signuphandel = event => {
        if(password.length < 5){
            return alert("too short")
        }
        event.preventDefault()
        if (password !== conpass) {
        //    return setError("password don't matched ")
        return toast.error(" password don't matched " , {id : 'password input'})
            
        }
        createUserWithEmailAndPassword(email, password)
        setError("  ")
    

    }

// handel sign up end here .
// login started from here


    const EmailLogin = event => {
        setEmaiL(event.target.value)
    }

    const PassLogin = event => {
        setPasswords(event.target.value)
    }


    
    const handelLogin = (event) => {
        event.preventDefault()
        if(PassworD === ''){
            setError('must need passwords')
        }
        else { 
        signInWithEmailAndPassword(Email , PassworD)
        }
    }

    

    const forgetPassword = async () => {
        if( Email === ''){
          return toast.error('input your mqail')
        }

        if(reseterror){
                console.log('resterror');
                return setError(reseterror.message)
              }

        else{
        await sendPasswordResetEmail(Email);
        setError(' ')
        toast.success('Email send')
        }
    }
    


    return (
        <div>
            <Nav></Nav>

            <div className='d-flex justify-content-center loginMain'>

         
         
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="signup">
                        <form onSubmit={signuphandel} >
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input onBlur={getemail} type="email" name="email" placeholder="Email" required />
                            <input onBlur={getpass} type="password" name="pswd" placeholder="Password" required />
                            <input onBlur={confirmpass} type="password" name="txt" placeholder="Confirm Password" required />                         
                            <p className='ms-5' style={{ color: 'red' }} > {errors} </p>
                            <button className='loginButton' >Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form  onSubmit={handelLogin} >
                            <label for="chk" aria-hidden="true">Login</label>
                            <input onBlur={EmailLogin} type="email" name="email" placeholder="Email" required />
                            <input onBlur={PassLogin}  type="password" name="pswd" placeholder="Password" required />  
                           <div className='forget'> <p onClick={forgetPassword} >forget passwords</p> </div>
                           {/* {
                               reseterror && <p> {reseterror.message} </p>
                           } */}
                            <p style={{ color: 'red' }} > {errors} </p>
                            {
                                error && <p>  {error.message} </p> 
                            } 
                            <button className='loginButton'>Login</button>
                        </form>
                    </div>
                </div>

         
            </div>

        </div>


    );
};


export default Login;