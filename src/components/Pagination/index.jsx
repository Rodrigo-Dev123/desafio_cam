import './styles.css'
import { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Pagination = () => {
    const context = useContext(GlobalContext);
    const { pages, currentPage, setCurrentPage } = context
    const qtdButtuns = 10;
    const [start, setStart] = useState(qtdButtuns);
    const [end, setEnd] = useState(0);

    const setNext = () => {
        setStart(start + qtdButtuns)
        setEnd(end + qtdButtuns)
    };

    const setBack = () => {
        setEnd(end - qtdButtuns)
        setStart(start - qtdButtuns)
    };

    return (
        <div className="pagination">
            <div>
                {end !== 0 && <button onClick={setBack}>back</button>}
                <div>{Array.from(Array(pages), (item, index) => {
                    return <button
                        key={index}
                        style={index === currentPage ? { backgroundColor: "gray" } : null}
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {index + 1}
                    </button>
                }).slice(end, start)}</div>

                {start < pages && <button onClick={setNext}>next</button>}
            </div>
        </div>
    )
};

export default Pagination;