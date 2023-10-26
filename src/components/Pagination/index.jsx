import './styles.css'
import { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

const Pagination = () => {
    const { pages, currentPage, setCurrentPage } = useContext(GlobalContext);
    const ButtonsLength = 5;
    const [start, setStart] = useState(ButtonsLength);
    const [end, setEnd] = useState(0);
    
    const setNext = () => {
        setStart(start + ButtonsLength)
        setEnd(end + ButtonsLength)
    };

    const setBack = () => {
        setEnd(end - ButtonsLength)
        setStart(start - ButtonsLength)
    };

    return (
        <div className="pagination">
            <div className='container-button'>
                {end !== 0 && <button className='btn-left' onClick={setBack}>
                    <MdOutlineArrowBackIosNew className='arrow-left' />
                </button>}

                <div>{Array.from(Array(pages), (item, index) => {
                    return <button
                        key={index}
                        className='btn-page'
                        style={index === currentPage ? { boxShadow: "3px 3px 10px 1px" } : null}
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {index + 1}
                    </button>
                }).slice(end, start)}</div>

                {currentPage < 100 && <button
                    className='btn-page'
                    value={pages - 1}
                    onClick={(e) => setCurrentPage(Number(e.target.value))}
                >...</button>}

                {start < pages && <button className='btn-right' onClick={setNext}>
                    <MdOutlineArrowForwardIos className='arrow-right' />
                </button>}
            </div>
        </div>
    )
};

export default Pagination;