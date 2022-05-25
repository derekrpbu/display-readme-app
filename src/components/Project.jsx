import React, {useState} from 'react';

const Project = (props) => {
   const [visible, setVisible] = useState(false);

   const clickHandler = () => {
      setVisible(!visible);
   };

   return (
      <div className='project'>
         <h3>Repo: {props.name}</h3>
         <a href={props.url} target={'_blank'}>
            Link!
         </a>
         <br />
         <br />
         <button onClick={clickHandler}>Display/Hide Readme</button>
         {visible ? <div>{props.readmeText}</div> : <div></div>}
      </div>
   );
};

export default Project;
