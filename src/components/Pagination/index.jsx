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

    // console.log(end, start)
    // console.log(end === 0)
    // console.log(pages)

    return (
        <>
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

            {end !== 0 && <button onClick={setBack}>back</button>}
            {start < pages && <button onClick={setNext}>next</button>}

        </>
    )
};

export default Pagination;