import React, {useState, useEffect} from 'react';

const Readme = (props) => {
   const [product, setProduct] = useState(null);

   useEffect(() => {
      fetch(props.url)
         .then((res) => res.json())
         .then((data) => {
            setProduct(JSON.stringify(atob(data.content)));
         });
   }, []);

   if (product) {
      return (
         <div>
            <p>{product}</p>
         </div>
      );
   }

   return <p>Read me not fetched</p>;
};

export default Readme;
