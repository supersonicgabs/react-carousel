import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() { 
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const images = [
    {
      id: 1,
      name: "A New Hope",
      url: "https://www.ewbankauctions.co.uk/images/NR011606-1_1.jpg"
    },
    {
      id: 2,
      name: "Empire Strikes Back",
      url: "https://www.bobafettfanclub.com/tn/640x640/multimedia/galleries/albums/userpics/10001/the-empire-strikes-back-poster.jpg"
    },
    {
      id: 3,
      name: "Return Of The Jedi",
      url: "https://cdn20.pamono.com/p/g/5/9/593964_yaneshw35r/star-wars-return-of-the-jedi-poster-by-josh-kirby-1983-1.jpg"
    },
  ]
  return (
    <div className="App">
      <div className="carousel-details">
        <img src={images[activeImageIndex].url} alt={images[activeImageIndex].name} />
        <div className="thumbs">
          {images.map(({id, url, name}, index)=>(
            <button className={activeImageIndex===index? 'active' : ''} type="button" key={id} onClick={()=>setActiveImageIndex(index)}>
              <img src={url} alt={name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
