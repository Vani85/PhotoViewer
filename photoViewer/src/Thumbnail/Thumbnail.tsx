import './Thumbnail.css';

export function DisplayThumbnail(props: { src: string; }) {   
    return (  
            <img className = "thumbnailImage" src = {props.src}  alt="thumbnail image">
            </img> 
    );
}