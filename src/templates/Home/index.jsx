import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(data => data)

          setItems(result);
      }
      fetchData();

  }, [])

  return (
    <section className='container'>
      <div className="App">
        {items.map((photo) => {
          return (
            <div key={photo.id} className="post">
              <img src={photo.url} alt={photo.title}></img>
              <div className='post-content'>
                <p>{photo.title}</p>
                <h1>{photo.id}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
