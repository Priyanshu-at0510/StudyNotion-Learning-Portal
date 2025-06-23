import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { HighlightText } from '../components/core/Home Page/HighlightText';
import { CTAbutton } from '../components/core/Home Page/CTAbutton';
import Banner from "../assets/Images/banner.mp4";
import { CodeBlocks } from '../components/core/Home Page/CodeBlocks';
export const Home = () => {
  return (
    <div>
        {/* section1 */}
        <div className='relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
            <Link to={"/signup"}>
              <div className=' group mt-16 p-1 mx-auto rounded-full  bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] '>
                <div className='flex items-center gap-2 transition-all duration-200 px-10 py-[5px] group-hover:bg-richblack-900 rounded-full'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
              </div>
            </Link>
            <div className='text-center text-4xl font-semibold mt-7 '>
                {/* Empower Your Future With <span>Coding Skills</span> */}
                Empower Your Future With
                <HighlightText text={"Coding Skills"}/>
            </div>
            <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
            <div className='flex gap-7 mt-8'>
              <CTAbutton active={true} linkto={"/signup"} >Learn More</CTAbutton>
              <CTAbutton active={false} linkto={"login"}>Book a Demo</CTAbutton>
            </div>
            <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video
                 muted
                 autoPlay
                 loop
                 className='shadow-[20px_20px_rgba(255,255,255)]'
                 >
                    <source src={Banner} type='video/mp4' />
                </video>
            </div>
            {/* code section 1 */}
            <div>
              <CodeBlocks
                position={"lg:flex-row"}
                heading={
                  <div className='text-4xl font-semibold'>
                    Unlock Your <HighlightText text={"coding performance"}/> with our online courses.
                  </div>
                }
                subHeading={
                  "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                  {
                    btnText:"Try it Yourself" ,
                    active:true,
                    linkto:"/signup"
                  }
                }
                ctabtn2={
                  {
                    btnText:"Learn More",
                    active:false,
                    linkto:"/login"
                  }
                }
                codeblock={
                  `<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`
                }
                codeColor={"text-yellow-25"}

              />
            </div>
            {/* code section 2 */}
            <div>
              <CodeBlocks
                position={"lg:flex-row-reverse"}
                heading={
                  <div className='text-4xl font-semibold'>
                    Start  <HighlightText text={"coding in seconds"}/>
                  </div>
                }
                subHeading={
                  "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                  {
                    btnText:"Continue Lesson" ,
                    active:true,
                    linkto:"/signup"
                  }
                }
                ctabtn2={
                  {
                    btnText:"Learn More",
                    active:false,
                    linkto:"/login"
                  }
                }
                codeblock={
                  `import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`
                }
                codeColor={"text-white"}

              />
            </div>

        </div>
        {/* section2 */}
  
        {/* section3 */}

        {/* Footer */}

    </div>
  )
}
