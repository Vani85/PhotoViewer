import './App.css';
import { DisplayThumbnail } from './Thumbnail/Thumbnail';
import { DisplayImage } from './image-selector/image-selector';
import { useState } from 'react';

function App() {

  const [thumbnailUrl, setThumbnailUrl] = useState("https://th.bing.com/th/id/OIP.Qcy1dh_eWTUTzZ7i8Ge34gHaEK?rs=1&pid=ImgDetMain");

  const handleClick = (url: string) => {
    setThumbnailUrl(url);
  }
  return (   
       <div>
            <h1 className = 'logo'>React Photo Viewer</h1>
            <DisplayThumbnail src={thumbnailUrl}/>
            <DisplayImage onImageClick={handleClick}/>
        </div>
  )
}
export default App