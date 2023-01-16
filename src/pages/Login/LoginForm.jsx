import { useRef } from "react";

import { Link ,useNavigate} from "react-router-dom";

import qrCode from "../../assets/qr_code.png"


export default function LoginForm() {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(email.current.value,password.current.value);
        navigate("/dashboard",{replace:true});
    }
    return (
        <section className="p-4 md:p-6 bg-discord-grey rounded-md md:w-3/4 lg:w-1/2 flex flex-none justify-between gap-x-4">
            <form  onSubmit={handleSubmit}>
                <h3 className=' text-3xl font-medium text-white'>Welcome Back!</h3>
                <h4 className=' text-lg font-medium text-white'>We're so excited to see you again!</h4>
                <div className='flex flex-col gap-y-3  '>
                    <div className='flex flex-col gap-y-1 '>
                        <label htmlFor="email" className=' text-slate-400'>Email</label>
                        <input type="email" id="email" ref={email} required  pattern = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" className='bg-[#2f3136] border-2 border-[#23272a] rounded-sm text-white text-xl md:text-lg px-4 py-1 md:py-0.5 focus:border-primary outline-none' />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <label htmlFor="password" className=' text-slate-400'>Password</label>
                        <input type="password" id="password" ref={password}  required minLength={6} className='bg-[#2f3136] border-2 border-[#23272a] rounded-sm text-white text-xl md:text-lg px-4 py-1 md:py-0.5 focus:border-primary outline-none' />
                    </div>
                </div>
                <button className="mt-2  text-blue-400"  onClick={e=>e.preventDefault()}>Forgot your password?</button>
                <button type="submit" className='text-white bg-primary  mt-6 py-2 md:py-1 text-lg font-medium w-full rounded hover:bg-primary/80' >
                    Login
                </button>

                <p className="mt-5 text-slate-400">
                    Need an account?
                    <Link className="text-blue-400 ml-2" to="/register" replace>Register</Link> 
                </p>
            </form>

            <div className="hidden md:flex flex-col items-center justify-center w-2/5">
                <img src = {qrCode} alt="login with qr code"  className="p-2 bg-white rounded-md w-2/3"/>
                <h2 className="text-white text-xl mt-2 text-center"> Log in with QR Code</h2>
                <h4 className=" text-lg  text-slate-400 text-center mt-4">Scan this with the <b className="font-semibold text-slate-100"> Discord mobile app </b> to log in instantly.</h4>
            </div>
        </section>
    )
}
