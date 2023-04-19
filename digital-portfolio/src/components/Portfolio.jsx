import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
   return (
      <div className="max-w-5xl flex flex-col md:flex-row items-center justify-center m-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8">
            {portfolio.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio;