import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { HighlightText } from '../components/core/Home Page/HighlightText';
import { CTAbutton } from '../components/core/Home Page/CTAbutton';
export const Home = () => {
  return (
    <div>
        {/* section1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
            <Link to={"/signup"}>
              <div className=' group mt-16 p-1 mx-auto rounded-full  bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit  '>
                <div className='flex items-center gap-2 transition-all duration-200 px-10 py-[5px] group-hover:bg-richblack-900 rounded-full'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
              </div>
            </Link>
            <div className='text-center text-4xl font-semibold mt-7 '>
                {/* Empower Your Future With <span>Coding Skills</span> */}
                Empower Your Future With
                <HighlightText text={" Coding Skills"}/>
            </div>
            <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
            <div className='flex gap-7 mt-8'>
              <CTAbutton active={true} linkto={"/signup"} >Learn More</CTAbutton>
              <CTAbutton active={false} linkto={"signup"}>Book a Demo</CTAbutton>
            </div>

        </div>
        {/* section2 */}

        {/* section3 */}

        {/* Footer */}

    </div>
  )
}
