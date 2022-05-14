import ImageCard from './ImageCard';
import './ImageList.css';

function ImageList(props) {
  return (
    <div className='imageList'>{props.image.map((img)=>{
        return <ImageCard key={img.id} src={img.urls.regular}  alt={img.description}/>
      })}</div>
  );
}

export default ImageList;
