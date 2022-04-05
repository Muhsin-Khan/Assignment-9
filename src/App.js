import { Route, Routes } from 'react-router-dom';
import './App.css' 
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Desboard from './component/desboard/Desboard';

import Error from './component/Error/Error';
import Footer from './component/footer/Footer';

import Header from './component/hearder/Header';
import Home from './component/Home/Home';
import Review from './component/Reviews/Review';

function App() {
  
 

  
  return (
    <div className='App'>
      <Header></Header>

    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/desboard' element={<Desboard></Desboard>}/> 
     <Route path='/Review' element={<Review></Review>}/>
     <Route path='/blog' element={<Blog></Blog>}/>
      <Route path='*' element={<Error></Error>}></Route>


    </Routes>
    <Footer></Footer>


      </div>
  )
};

export default App;
