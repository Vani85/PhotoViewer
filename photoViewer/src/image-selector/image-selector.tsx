import { useState } from 'react';
import './image-selector.css';

const brokenImages = [
    1, 24, 32, 36, 44, 47
  ];

 function getImageUrls() {
    const urls = [];
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    return urls;
}

export function DisplayImages(props: { onImageClick:  React.Dispatch<React.SetStateAction<string>>; }) {  
    const {onImageClick} = props;
    const urls = getImageUrls();
    const [selectedImageUrl, setSelectedImageUrl] = useState("");

    const handleImageClick = (url: string) => {
        onImageClick(url);
        setSelectedImageUrl(url);
    }

    return (   
        <div className="imageContainer">
            {urls.map((url,index) => 
                <img id={`image${index}`} className={`image ${selectedImageUrl === url ? 'selected' : ''}`}
                    src={url}  onClick={()=>handleImageClick(url)}/>
            )}
        </div>
    );
}
