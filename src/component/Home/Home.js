
import img from './Think and Grow Rich.jpg';
import './home.css';
import useData from '../../hooks/useData';
import HomeReview from '../home-review/HomeReview';
import { Link } from 'react-router-dom';
// import useData from '../../hooks/useData';





const Home = () => {
  const [information]=useData([]);
  


  
    return (
        <div className=''>
          <section className='section-css'>
            <div className='row  m-0 p-0  '>
              <div className='col-6 px-5  sm:col-12'>
                <h1 className='text-center testcss'>
                Think and Grow Rich   <br />
                </h1>
                <br /><h5>by</h5>
                <h3><span className='writers-name'> Napoleon Hill</span></h3>
                <br />
                <p><small>Think and Grow Rich is the combined wisdom from more than 500 of America’s most successful individuals. Their insights were then narrowed down into 13 principles and contribute to what Hill refers to as an overall “Philosophy of Achievement.” 

                However, refusing to let Think and Grow Rich be defined purely as a method or system for success, Hill stated that the goals of his book were:

                To help the reader become self-aware.
                To help the reader understand how to become more effective amidst the immutable laws of the universe.</small></p>

                <br />
                <button className='btn bg-primary text-white fw-bold'>Read More </button>
               
              </div>
              <div className='col-6 newcss2  '>               
                <img src={img} alt="img" />
              </div>
            </div>

            {/* Reviews section................... */}

            
            </section> 
            <section className='bg-light py-4 my-5'>
              <h1 className='test'>Reader's Reviews</h1>
              <div className='card-css my-4'>

              {
                information.slice(0,3).map(info=><HomeReview key={info.id} data={info} ></HomeReview>)
              }
             
              </div>
              <Link to="/Review"  className='btn  bg-primary text-white fw-bold text-center'>More Reviews</Link>

            </section>

        </div>
    );
};

export default Home;