import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
    return (
        <div className='max-w-5xl flex flex-col md:flex-row justify-center mx-auto my-20'>
            <div className='w-full md:w-7/12'>
                <Title>Timeline</Title>
                {timeline.map(item => (
                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline;