import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-calls"
import { Link } from "react-router-dom";
import "./StarshipList.css"



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
      <>
      <div className="all-ships">
        {starships.map(ship =>
        <Link id="link" key={ship.name} to="/starship" state={{ ship }}> 
        <h2 className="ship-container">{ship.name}</h2>
        </Link>
        )}
      </div>
      </>
      </div>
    </>
  );
}

export default StartshipList;