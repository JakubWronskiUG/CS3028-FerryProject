import React, {useEffect, useState} from 'react';

// const GetAllButton = () => {

//     const [data, setData] = useState({data: []});
//     const [isLoading, setIsLoading] = useState(false);
//     const [err, setErr] = useState('');

    // const handleClick = async () => {
    //     setIsLoading(true);

    //     try {
    //     const response = await fetch('http://localhost:5000/api/trips', {
    //         method: 'GET',
    //         headers: {
    //         Accept: 'application/json',
    //         },
    //     });

    //     if (!response.ok) {
    //         throw new Error(`Error! status: ${response.status}`);
    //     }

    //     const result = await response.json();

    //     console.log('result is: ', JSON.stringify(result, null, 4));

    //     setData(result);
    //     } catch (err) {
    //     setErr(err.message);
    //     } finally {
    //     setIsLoading(false);
    //     }
    // };

//     console.log(data);

//     return (
//         <div>
//         {err && <h2>{err}</h2>}

//         <button onClick={handleClick}>Fetch data</button>

//         {isLoading && <h2>Loading...</h2>}

//         <div>
            
//         </div>

//         {data.map(trip => {
//             return (
//             <div key={trip._id}>
//                 <h2>{trip.ferryId}</h2>
//                 <h2>{trip.portFromId}</h2>
//                 <h2>{trip.portToId}</h2>
//                 <br />
//             </div>
//             );
//         })}
//         </div>
//     );
// };


const GetAllButton = () => {
    const [trips, setTrips] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/trips", {
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

    // const getApiData = async () => {
    //     const response = await fetch(
    //         "http://localhost:5000/api/trips"
    //     ).then((response) => response.json());

    //     setTrips(response);
    // }

    // useEffect(() => {
    //     handleClick();
    // }, []);

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