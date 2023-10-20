import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import './styles.css';

function Home() {
  const [items, setItems] = useState([]);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(startIndex, endIndex);

  const removeItem = (id) => {
    const updatedItems = JSON.parse(localStorage.getItem('items')).filter(item => {
      return item.id !== id; 
    })
      
    localStorage.setItem('items', JSON.stringify(updatedItems))
    setItems(JSON.parse(localStorage.getItem('items')));
    console.log(updatedItems)
    alert('Foto apagada com sucesso!');  
  }

  useEffect(() => {
    if (!localStorage.getItem('items')) {
      console.log('Execultado!!!')
      const fetchData = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(data => data)


        localStorage.setItem('items', JSON.stringify(result))
      }
      fetchData();
    }

    setItems(JSON.parse(localStorage.getItem('items')));

  }, [])

  return (
    <section className='container'>
      <div className="App">
        {currentItems.map((photo) => {
          return (
            <div key={photo.id} className="post">
              <img src={photo.url} alt={photo.title}></img>
              <div className='post-content'>
                <p>{photo.title}</p>
                <h1>{photo.id}</h1>
                <button onClick={() => removeItem(photo.id)}>Excluir</button>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}

export default Home;