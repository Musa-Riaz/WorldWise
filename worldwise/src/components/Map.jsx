import { useSearchParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import styles from './Map.module.css'
const Map = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat') || 0;
  const lng = searchParams.get('lng') || 0;
  const navigate = useNavigate();
  return (
    <div className={styles.mapContainer}>
      <h1 >Map</h1>
      <button onClick={()=> navigate("form")}>Click</button>
      <h1>Position: {lat}, {lng}</h1>
    </div>
  )
}

export default Map
