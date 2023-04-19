import React from 'react';

function Intro() {
    return (
        <div className='flex items-center 
        justify-center flex-col text-center
        pt-20 pb-6'>
            <h1 className='text-4xk md:text-7xl mb-1 md:mb-3 
            font-bold'>Petar Iliev</h1>
            <p className='text-base 
            md:text-xl mb-3 
            font-medium'>iOS Developer & Computer Science Student</p>
            <p className='text-sm max-w-xl mb-6 
            font-bold'>I’m a sophomore studying Computer Science at UT Austin 
            and an independent iOS developer with experience in Swift
             (UIKit, SwiftUI, Core Data), Flutter and React Native. 
             I’ve published 3 iOS applications on the App Store and I’m an 
             incoming Software Engineer Intern in the iOS Engineering team at
             {' '}
             <a href='https://www.servicenow.com'
             target="_blank"
             className="text-cyan-600 hover:underline underline-offset-2
             decoration-2 decoration-red-600"
             rel="noreferrer noopener">
             ServiceNow
                </a> 
             . I’m passionate about building iOS applications and 
             lately I’ve been getting more interested in backend development 
             with Python (Flask, SQLAlchemy, MySQL) and deployment with AWS
             and Docker. Lastly, I also have experience with C/C++ and Java.”</p>
        </div>
    )
}

export default Intro;