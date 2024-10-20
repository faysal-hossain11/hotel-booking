
import Link from "next/link"
import Image from "next/image"
import Logo from '@/public/assets/images/logo.png';
import { auth } from "@/auth";
import SignOut from "./auth/SignOut";


const Navbar = async ({ sideMenu }) => {

  const session = await auth();
  // console.log("this is the session ",session?.user);
  

  return (
    <nav className=" flex justify-between items-center px-[100px] absolute w-full bg-transparent z-50 top-0 left-0 pt-4">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <Image
            src={Logo}
            alt="Stay Swift Logo"
            className="w-[120px]"
          />
        </Link>

        {
          sideMenu && (
            <ul className=" flex items-center gap-5 text-sky-800">
              <li>
                <Link href="/hotels" className="text-xl font-medium text-sky-800 hover:text-pink-400 transition duration-200">Hotals List</Link>
              </li>

              <li>
                <Link href="#" className="text-xl font-medium text-sky-800 hover:text-pink-400 transition duration-200">Contact us</Link>
              </li>

              <li>
                <Link href="/bookings" className="text-xl font-medium text-sky-800 hover:text-pink-400 transition duration-200">Bookings</Link>
              </li>

              <li>
                {
                  session?.user ? (
                    <div className="flex gap-2 items-center">
                      <span className="text-xl text-sky-800 font-semibold">{session?.user.name}</span>
                      <span>|</span>
                      <SignOut />
                    </div>
                  ) : (<Link href="/login" className="px-5 py-3 bg-sky-800 text-white font-semibold hover:bg-pink-400 transition duration-200 rounded-md ">Login</Link>)
                }
                
              </li>
            </ul>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;