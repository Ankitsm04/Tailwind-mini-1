import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
        <ui className="flex list-none gap-6 text-gray-400">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ui>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p>Have any Question?</p>
          <a href="#" className='text-black font-lato'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
