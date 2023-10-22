import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [itemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const [modal, setModal] = useState(false);
    const [postModal, setPostModal] = useState(null);

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
            const fetchData = async () => {
                console.log('fetch execultou!');
                const result = await fetch('https://jsonplaceholder.typicode.com/photos')
                    .then(response => response.json())
                    .then(data => data)

                localStorage.setItem('items', JSON.stringify(result));
                setItems(result);
            }

            fetchData();
            return;
        }
        setItems(JSON.parse(localStorage.getItem('items')));
    }, [currentPage]);

    return (
        <GlobalContext.Provider value={{
            currentItems, items, setItems, itemsPerPage,
            currentPage, setCurrentPage, modal, setModal,
            startIndex, endIndex, pages, removeItem,
            postModal, setPostModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
