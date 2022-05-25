import React from 'react';
import Project from './Project';
import Readme from './Readme';

const Page = () => {
   return (
      <div className='page'>
         <Project
            name={'Github Actions'}
            url={'https://github.com/derekrpbu/github-actions-test'}
            readmeText={
               <Readme
                  url={
                     'https://api.github.com/repos/derekrpbu/github-actions-test/contents/README.MD'
                  }
               />
            }
         />
         <Project
            name={'Saeta Website'}
            url={'https://github.com/derekrpbu/Saeta-Website'}
            readmeText={
               <Readme
                  url={
                     'https://api.github.com/repos/derekrpbu/Saeta-Website/contents/README.MD'
                  }
               />
            }
         />
         <Project
            name={'Project 3'}
            url={'www.facebook.com'}
            readmeText={<Readme />}
         />
      </div>
   );
};

export default Page;
