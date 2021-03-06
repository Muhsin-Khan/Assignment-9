import React, { useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import HomeReview from '../home-review/HomeReview';

const Review = () => {
    // const [information ]=useData([]);
    const [newapi,setapi]=useState('');
    const [searchtext,setsearchtext]=useState([]);


    useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>{
        const match=data.filter(d=>d.name.includes(newapi))
        setsearchtext(match)})
     
    },[newapi])

    const inputsearch=event=>{
      
     const news=(event.target.value);
     setapi(news)

    }



    return (
        <div className='m-0 p-0'>
               <section className='bg-light py-5 my-0'>
              <h1 className='test'>Readers Reviews</h1>
              <div>

                <input onChange={inputsearch
                }  type="text" placeholder='Search' />

              </div>
              <div className='card-css my-4'>
              {
                searchtext.map(info=><HomeReview key={info.id} data={info} ></HomeReview>)
              }            
            </div>          
            </section>          
        </div>
    );
};

export default Review;