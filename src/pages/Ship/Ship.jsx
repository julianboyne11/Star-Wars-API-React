import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/sw-calls";


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
          <h2>Name: {shipDetails.name}</h2>
          <h3>Model: {shipDetails.model}</h3>
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