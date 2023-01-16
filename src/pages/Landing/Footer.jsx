import React from 'react'
import { Link } from 'react-router-dom';

import usaFlag from "../../assets/usa_flag.png";

import twitterLogo from "../../assets/twitter_icon.svg";

import discordLogo from '../../assets/discord_main_logo.svg';


function Footer() {
    return (
        <div className='bg-discord-grey p-8  '>
            <div className='flex flex-col md:flex-row justify-between'>
                <section>
                    <h3 className='text-primary text-4xl font-extrabold'>Imagine A Place</h3>
                    <p className=' text-white mt-2'>
                        <img src={usaFlag} alt="usa flag" width={"21px"} className="inline-block ml-2 " />
                        <span> English,USA</span>
                    </p>
                    <img src={twitterLogo} alt="" />
                </section>


                <div className='grid grid-cols-2 md:grid-cols-4  gap-4 mt-4 md:mt-0'>
                    <section>
                        <h5 className=' text-primary'>Product</h5>
                        <ul >
                            <li><a href="#" className="text-lg text-white">Download</a></li>
                            <li><a href="#" className="text-lg text-white">Nitro</a></li>
                            <li><a href="#" className="text-lg text-white">Status</a></li>
                        </ul>
                    </section>


                    <section>
                        <h5 className=' text-primary'>Company</h5>
                        <ul >
                            <li><a href="#" className="text-lg text-white">About</a></li>
                            <li><a href="#" className="text-lg text-white">Jobs</a></li>
                            <li><a href="#" className="text-lg text-white">Branding</a></li>
                            <li><a href="#" className="text-lg text-white">Newsroom</a></li>
                        </ul>
                    </section>


                    <section>
                        <h5 className=' text-primary'>Resources</h5>
                        <ul >
                            <li><a href="#" className="text-lg text-white">Collage</a></li>
                            <li><a href="#" className="text-lg text-white">Support</a></li>
                            <li><a href="#" className="text-lg text-white">Saftey</a></li>
                            <li><a href="#" className="text-lg text-white">Blog</a></li>
                            <li><a href="#" className="text-lg text-white">Feedback</a></li>
                            <li><a href="#" className="text-lg text-white">Developers</a></li>
                            <li><a href="#" className="text-lg text-white">Students</a></li>
                        </ul>
                    </section>


                    <section>
                        <h5 className=' text-primary'>Policies</h5>
                        <ul >
                            <li><a href="#" className="text-lg text-white">Terms</a></li>
                            <li><a href="#" className="text-lg text-white">Privacy</a></li>
                            <li><a href="#" className="text-lg text-white">Guidliness</a></li>
                            <li><a href="#" className="text-lg text-white">Acknowledgments</a></li>
                            <li><a href="#" className="text-lg text-white">Licences</a></li>
                            <li><a href="#" className="text-lg text-white">Moderation</a></li>

                        </ul>
                    </section>
                </div>
            </div>
            <hr className="h-0.5 my-5 rounded-lg bg-primary border-none" />


            <section className='flex items-center justify-between'>
                <img src={discordLogo} alt="" />
                <Link to="/register" className='text-white bg-primary px-4 py-1 rounded-full'>Signup</Link>
            </section>


        </div>
    )
}

export default Footer