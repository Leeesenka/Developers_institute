import { useEffect } from "react"
import { useParams} from 'react-router-dom' 
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from '../redux/actions';


const Gallery = (props)=> {
    const list = useSelector(state => state.list)
    const params = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPhotos());
    }, [])

    return(
        <>
        <h1 style={{fontFamily: 'revert'}}>Birds</h1>
        {list.map((photo) => (
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5" key={photo.id}>
              <img src={photo.src.tiny} alt="Mountain" />
            </div>
          ))}
        </>
    )
}
export default Gallery