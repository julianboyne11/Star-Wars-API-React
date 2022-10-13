import "./Ship.css"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/sw-calls";
import { Link } from "react-router-dom";



const Ship = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getDetails(location.state.ship.url)
      setShipDetails(shipData)
      console.log(shipData)
    }
    fetchDetails()
  }, [location.state.ship])

  return ( 
    <>
      <div className="icon-container">
        {shipDetails.name ?
        <>
          <h3>Name: {shipDetails.name}</h3>
          <h3>Model: {shipDetails.model}</h3>
          <Link id="return" to="/starship-list">Return</Link>

        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    </>
  );
}

export default Ship;