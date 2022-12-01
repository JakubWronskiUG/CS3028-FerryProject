import React, {useState} from 'react';
import './Container.css'


const GetAllButton = () => {
    const [trips, setTrips] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "http://144.21.35.44:5000/api/trips", {
                    method: "GET", 
                    headers: {
                        Accept: 'application/json',
                    },
                }
            ).then((response) => response.json());
            setTrips(response);

        //if (!response.ok) {
        //    throw new Error(`Error! status: ${response.status}`);
        //}
        } catch (err) {
        setErr(err.message);
        } finally {
        setIsLoading(false);
        }
    };


    return (
        <div className="trips-container">
            
            {err && <h2>{err}</h2>}
            <button className="button" onClick={handleClick}>Get all routes</button>
            {isLoading && <h2>Loading...</h2>}
            
            {trips && trips.map((trip) => (
                
                <div className="item-container" key={trip._id} >

                    <br />
                    
                    <table>
                    <tr>
                        <th>Trip ID</th>
                        <th>Ferry ID</th>
                        <th>Port From ID</th>
                        <th>Port To ID</th>
                        <th>Trip Date</th>
                        <th>Hour Start</th>
                        <th>Duration (Minutes)</th>
                    </tr>
                    <tr>
                        <td>{ trip.tripId }</td>
                        <td>{ trip.ferryId }</td>
                        <td>{ trip.portFromId } </td>
                        <td>{ trip.portToId }  </td>
                        <td>{ trip.tripDate } </td>
                        <td>{ trip.hourStart } </td>
                        <td>{ trip.durationMinutes } </td>
                    </tr>
 
                    </table>



                
                </div>
            ))}
        </div>
    );
}



export default GetAllButton;