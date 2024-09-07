import React from 'react'
import './about.css'
import { FiFile } from 'react-icons/fi'
import aboutSectionImage from '../../websitedesignimages/image.jpg'
import { BiBadge, BiHeadphone } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import Buttons from '../Buttons'

const About = () => {

  const experienceData = [
    {
      icon: <BiBadge />,
      title: "Experience",
      time: "Freshire"
    },
    {
      icon: <BsBag />,
      title: "Completed",
      time: "2 + Project"
    },
    {
      icon: <BiHeadphone />,
      title: "Support",
      time: "Online 24/7"
    },
  ]
  return (
    <div className='about-section' id='about'>


      <div className='about-section-top'>
        <h1>About Me</h1>
        <span>My introduction</span>
      </div>



      <div className='about-section-bottom'>

        <div className='about-section-bottom-left'>
          <img src={aboutSectionImage} alt='' />
        </div>


        <div className='about-section-bottom-right'>


          <div className='testing'>
            {experienceData.map((items, index) => {
              return (
                <div className='about-section-bottom-right-top' key={index}>


                  <span>{items.icon}</span>
                  <h3>{items.title}</h3>
                  <h4>{items.time}</h4>


                </div>
              )
            })}
          </div>

          <p className='about-section-bottom-right-middle'>
          I am a student of MERN Stack Developer in Visual Studio Code and I also JSReact Developer. I will be a full stack developer Inshallah.          </p>

          {/* <div className='herosection-name-container-button'>
            <button>Download Cv <FiFile /></button>
          </div> */}

          <Buttons btnTitle="Download CV" btnIcon={<FiFile />}/>


        </div>

      </div>


    </div>
  )
}

export default About
