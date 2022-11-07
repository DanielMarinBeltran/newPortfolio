import React from 'react'

function SocialMediaIcons() {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a className='hover:opacity-50 transition duration-500' href="https://www.linkedin.com/in/daniel-marin-665734201/" target="_blank" rel='noreferrer'>
        <img src="../assets/linkedin.png" alt="LinkedIn Icon" />
      </a>
      <a className='hover:opacity-50 transition duration-500' href="https://github.com/DanielMarinBeltran" target="_blank" rel='noreferrer'>
        <img src="../assets/github.png" alt="Github Icon" />
      </a>
    </div>
  )
}

export default SocialMediaIcons