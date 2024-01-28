import React from 'react';

function Intro() {
    return (
        <div className='flex items-center 
        justify-center flex-col text-center
        pt-20 pb-6'>
            <h1 className='text-4xk md:text-7xl dark:text-white mb-1 md:mb-3 
            font-bold'>Petar Iliev</h1>
            <p className='text-base 
            md:text-xl mb-3 
            font-medium'>Software Engineer Intern @ Apple | CS @ UT Austin</p>
            <p className='text-sm max-w-xl mb-6 
            font-bold'>
                I'm a computer science student at UT Austin, incoming Software Engineer Intern at Apple, and an independent iOS developer.
                I specialize in Swift (UIKit & SwiftUI), but I'm also proficient in Python, C/C++ and AWS.
                Outside of iOS development, I'm also interested in data science, backend development and competitive programming.</p>
        </div>
    )
}

export default Intro;