import React from 'react';
import './styles/App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('localhost:5000/', {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <><div className="App">
      <h1>Hello world</h1>
      <h2>works</h2>
    </div><div>
        {err && <h2>{err}</h2>}

        <button onClick={handleClick}>Fetch data</button>

        {isLoading && <h2>Loading...</h2>}
      </div></>

  );
}

export default App;
