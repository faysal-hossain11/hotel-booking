import Image from 'next/image';
import React from 'react';

import FooterLogo from '@/public/assets/images/logo.png';
import Link from 'next/link';
import PopularImage1 from '@/public/assets/images/desti-1.jpg';
import PopularImage2 from '@/public/assets/images/desti-2.jpg';
import PopularImage3 from '@/public/assets/images/desti-3.jpg';
import PopularImage4 from '@/public/assets/images/desti-4.jpg';


// import the all react icons
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = ({ registered }) => {
    return (
        <>
            {
                registered && (
                    <div className=' bg-sky-900 text-white py-16 '>
                        <div className='container mx-auto grid md:gird-cols-2 xl:grid-cols-4 gap-10'>
                            <div>
                                <div className='mb-8 w-[100px] h-[100px] bg-white rounded-full'>
                                    <Link href="/" className=''>
                                        <Image src={FooterLogo} alt='footer logo' className='w-full p-2' />
                                    </Link>
                                </div>
                                <p className='mb-8'>That this group would somehow form a family thats the way we all became the Brady Bunch. Doin it our way. Theres nothing we wont try never heard word.</p>
                                <div>
                                    <ul className='flex items-center gap-3'>
                                        <li className='w-8 h-8 rounded-md bg-white hover:bg-pink-400 hover: transition duration-300 flex justify-center items-center group '>
                                            <Link href="https://facebook.com" target='_black' className='text-sky-900 group-hover:text-white transition duration-300 ' ><FaFacebookF /></Link>
                                        </li>
                                        <li className='w-8 h-8 rounded-md bg-white hover:bg-pink-400 hover: transition duration-300 flex justify-center items-center group '>
                                            <Link href="https://youtube.com" target='_black' className='text-sky-900 group-hover:text-white transition duration-300 ' ><IoLogoYoutube /></Link>
                                        </li>
                                        <li className='w-8 h-8 rounded-md bg-white hover:bg-pink-400 hover: transition duration-300 flex justify-center items-center group '>
                                            <Link href="https://linkedin.com" target='_black' className='text-sky-900 group-hover:text-white transition duration-300 ' ><FaLinkedinIn /></Link>
                                        </li>
                                        <li className='w-8 h-8 rounded-md bg-white hover:bg-pink-400 hover: transition duration-300 flex justify-center items-center group '>
                                            <Link href="https://x.com" target='_black' className='text-sky-900 group-hover:text-white transition duration-300  ' ><FaTwitter /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h5 className='text-2xl font-semibold mb-8'>Useful links</h5>
                                <div>
                                    <ul>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>About us</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Our Packages</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Popular Destination</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Top Destination</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Latest News</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Our Gallery</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h5 className='text-2xl font-semibold mb-8'>opening hours</h5>
                                <div>
                                    <ul>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Monday - 9:00AM to 6:00PM</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Tuesday - 9:00AM to 6:00PM</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Wednesday - 9:00AM to 6:00PM</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Thursday - 9:00AM to 6:00PM</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Friday - 9:00AM to 6:00PM</Link>
                                        </li>
                                        <li className='mb-5'>
                                            <Link href="/about" className=''>Saturday - 9:00AM to 6:00PM</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h5 className='text-2xl font-semibold mb-8'>popular destination</h5>
                                <div className='grid grid-cols-2 gap-10 '>
                                    <div className='w-[140px] '>
                                        <Image src={PopularImage1} alt="footer popular image" className=' rounded-sm' />
                                    </div>
                                    <div className='w-[140px]'>
                                        <Image src={PopularImage2} alt="footer popular image" className=' rounded-sm' />
                                    </div>
                                    <div className='w-[140px]'>
                                        <Image src={PopularImage3} alt="footer popular image" className=' rounded-sm' />
                                    </div>
                                    <div className='w-[140px]'>
                                        <Image src={PopularImage4} alt="footer popular image" className=' rounded-sm' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
};

export default Footer;