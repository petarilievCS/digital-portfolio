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
            font-medium'>iOS Developer • SWE Intern @ ServiceNow • CS @ UT Austin</p>
            <p className='text-sm max-w-xl mb-6 
            font-bold'>
                I'm a computer science student at UT Austin and an independent iOS developer with a strong interest in fintech.
                I'm currently interning as a Software Engineer Intern on the Mobile Platform (iOS) team at ServiceNow.
                I specialize in Swift (UIKit, SwiftUI, CoreData), but I'm also proficient in Python, C++, Flutter and AWS.
                Lastly, I enjoy going to competitive programming contests and developing my own iOS apps (3 of which are on the App Store).</p>
        </div>
    )
}

export default Intro;