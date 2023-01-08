import {useRef} from 'react'
import { Link } from 'react-router-dom';

function SignupForm() {
const email = useRef();
const name = useRef();
const password = useRef();
 function handleSubmit(e){
     e.preventDefault();
     console.log(email.current.value,name.current.value,password.current.value);
 }
  return (
    <form className='p-4 bg-discord-grey rounded-md w-1/3' onSubmit ={handleSubmit}>
        <h3 className=' text-2xl font-medium text-white text-center'>Create An Account</h3>
        <div className='flex flex-col gap-y-3  '>
            <div className='flex flex-col gap-y-1 '>
                <label htmlFor="email" className=' text-slate-400'>Email</label>
                <input type="email" id="email" required ref={email} pattern = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"  className='bg-[#2f3136] border-2 border-[#23272a] rounded-sm text-white text-lg px-4 py-0.5 focus:border-primary outline-none' />
            </div>
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="name" className=' text-slate-400'>Name</label>
                <input type="text" id="name" required minLength={3} ref={name} className='bg-[#2f3136] border-2 border-[#23272a] rounded-sm text-white text-lg px-4 py-0.5 focus:border-primary outline-none' />
            </div>
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="password" className=' text-slate-400'>Password</label>
                <input type="password" required minLength={6} id="password" ref={password} className='bg-[#2f3136] border-2 border-[#23272a] rounded-sm text-white text-lg px-4 py-0.5 focus:border-primary outline-none' />
            </div>
    </div>
    <button type="submit" className='text-white bg-primary  mt-6 py-1 text-lg font-medium w-full rounded-sm hover:bg-primary/80'>
        Continue
    </button>
    <Link to = "/login" className='block mt-5 text-blue-400 'replace >Already Have Account?</Link>
    </form>
  )
}

export default SignupForm