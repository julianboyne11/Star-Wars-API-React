import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-calls"
import { Link } from "react-router-dom";




const StartshipList = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchShipData = async () => {
      const shipData = await getStarshipList()
      setStarships(shipData.results)
    }
    fetchShipData()
  }, [])

  return ( 
    <>
      <h1>Starships</h1>
      <div>
        {starships.map(ship =><Link key={ship.name} to="/starship" state={{ ship }}> {ship.name}</Link>)}
      </div>
    </>
  );
}

export default StartshipList;