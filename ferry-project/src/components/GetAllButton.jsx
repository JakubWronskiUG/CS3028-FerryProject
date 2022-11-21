import React, {useEffect, useState} from 'react';


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

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        } catch (err) {
        setErr(err.message);
        } finally {
        setIsLoading(false);
        }
    };


    return (
        <div className="trips-container">
            {err && <h2>{err}</h2>}
            <button onClick={handleClick}>Fetch data</button>
            {isLoading && <h2>Loading...</h2>}
            {trips && trips.map((trip) => (
                <div className="item-container" key={trip._id}>
                    Id:{trip.ferryId} <div className="title">PortFromId:{trip.portFromId}</div>
                
                </div>
            ))}
        </div>
    );
}



export default GetAllButton;