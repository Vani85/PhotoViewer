import './mainPhoto.css';

export function DisplayMainPhoto(props: { src: string; }) {   
    return (  
            <img className = "thumbnailImage" src = {props.src} >
            </img> 
    );
}