import P from 'prop-types';
import './styles.css';
import { useContext } from "react";
import ButtonModal from "../buttonModal";
import Modal from "../Modal";
import { GlobalContext } from "../../contexts/GlobalContext";
import Pagination from "../Pagination";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Posts({ post = [] }) {
    const { removeItem, currentItems, } = useContext(GlobalContext);


    return (
        <section className='container'>
            <div className="App">
                {currentItems.map((post) => {
                    return (
                        <div key={post.id} className="post">
                            <img src={post.url} alt={post.title}></img>
                            <h3>Foto {post.id}</h3>
                            <div className='post-content'>
                                <ButtonModal id={post.id}/>
                                <button className='btn-delete-post' onClick={() => removeItem(post.id)}>
                                    <RiDeleteBin6Line
                                        className='icon-delete'
                                    />
                                </button>
                            </div>
                        </div>
                    );
                })}
                <Modal />
            </div>


            <Pagination />
        </section>
    );
};

Posts.propTypes = {
    posts: P.array,
};