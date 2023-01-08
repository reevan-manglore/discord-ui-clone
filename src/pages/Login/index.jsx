import { Link } from 'react-router-dom';
import discordLogo from '../../assets/discord_main_logo.svg';
import LoginForm from './LoginForm';


function index() {
  return (
    <div className='h-screen bg-discord-grey md:bg-login-bg bg-no-repeat bg-cover  p-10 flex flex-col'>
     <header className='flex justify-center items-center md:justify-start'>
        <Link to="/" > <img src={discordLogo} alt="discord logo" /></Link>
      </header>
      <main className='grid place-items-center flex-1'>
        <LoginForm/>
      </main>
    </div>

  )
}

export default index