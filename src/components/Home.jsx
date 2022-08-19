import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';
import Button2 from './Button2';
import Navbar from './Navbar';

 

const Home = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <>
    <div className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}>
        
       
      <div className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}>{title}</h1>
          <div >
          <p className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}>{description}</p>
          </div>
          
          <div className='flex justify-start space-x-14'>
          {showBtn && (
            <Button 
              assetUrl={assets.expo}
              link=""
            />
          )}

           {showBtn && (
            <Button2 
              assetUrl={assets.expo}
              link="https://wandering-hat-9848.on.fleek.co/"
            />
          )}
          </div>
        </div>
        <div
          className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}
        >
          <img src={mockupImg} alt="mockup" className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini" }
          ${styles.sectionImg}`}  />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home