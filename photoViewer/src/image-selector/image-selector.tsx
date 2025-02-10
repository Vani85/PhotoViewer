import './image-selector.css';

const brokenImages = [
    1, 24, 32, 36, 44, 47
  ];
  export function getImageUrls() {
    const urls = [];
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
    return urls;
  }

export function DisplayImage() {   
    const urls = getImageUrls();
    let htmlForUrls = "";

    for(let url of urls) {
        htmlForUrls += `<img className = "image" src = ${url}  alt="image"></img>`
    }
    return (  
        <div className="imageContainer" dangerouslySetInnerHTML={{__html: htmlForUrls}}></div>
    );
}