import React, {useState} from 'react';


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
            <button class="button" onClick={handleClick}>Get all routes</button>
            {isLoading && <h2>Loading...</h2>}
            {trips && trips.map((trip) => (
                <div className="item-container" key={trip._id} >

                    <br />
                    Trip ID: { trip.tripId }, 
                    <br />
                    Ferry ID: { trip.ferryId }, 
                    <br />
                    Port From ID: { trip.portFromId } 
                    <br />
                    Port To ID: { trip.portToId } 
                    <br />
                    Trip Date: { trip.tripDate }
                    <br />
                    Hour Start: { trip.hourStart }
                    <br />
                    Duration (Minutes): { trip.durationMinutes }
                    <br />
                    
                
                </div>
            ))}
        </div>
    );
}



export default GetAllButton;