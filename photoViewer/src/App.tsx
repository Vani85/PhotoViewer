import './App.css';
import { DisplayMainPhoto } from './Thumbnail/Thumbnail';
import { DisplayImages } from './image-selector/image-selector';
import { useState } from 'react';

function App() {

  const [thumbnailUrl, setThumbnailUrl] = useState("https://th.bing.com/th/id/OIP.Qcy1dh_eWTUTzZ7i8Ge34gHaEK?rs=1&pid=ImgDetMain");

  return (   
       <div>
            <h1 className = 'logo'>React Photo Viewer</h1>
            <DisplayMainPhoto src={thumbnailUrl}/>
            <DisplayImages onImageClick={setThumbnailUrl}/>
        </div>
  )
}
export default App