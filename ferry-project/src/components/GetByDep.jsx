import React, {useState} from 'react';


const GetByDep = ({params}) => {
    
    if (params === "Gills Bay"){
        params = 1
    }
    if (params === "St. Margaret's Hope Ferry Terminal"){
        params = 2
    }
    const [trips, setTrips] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
  
    const url = (
        'http://localhost:5001/api/trips/bydeparture/' + params
        
      );
    
    const handleClick = async () => {
        setIsLoading(true);


        try {
            const response = await fetch(
                url, {
                method: "GET", 
                headers: {
                    Accept: 'application/json',
                },
                }
            ).then((response) => response.json());
            setTrips(response);
            console.log(response);
            Array.isArray(trips);
            

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
                <button class="button" onClick={handleClick} >Get by departure port</button>
                
                {isLoading && <h2>Loading...</h2>}
                
                {trips && trips.map((trip) => (
                    
                        <div className="item-container" key={trip._id} >
                            
                            <br />
                            Trip ID: { trip.tripId }
                            <br />
                            Ferry ID: { trip.ferryId } 
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



export default GetByDep;