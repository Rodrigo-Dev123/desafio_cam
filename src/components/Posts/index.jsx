import './styles.css';
import { useContext } from "react";
import ButtonModal from "../buttonModal";
import Modal from "../Modal";
import { GlobalContext } from "../../contexts/GlobalContext";
import Pagination from "../Pagination";

export default function Posts({ post }) {
    const context = useContext(GlobalContext);
    const { removeItem, currentItems } = context;


    return (
        <section className='container'>
            <div className="App">
                {currentItems.map((post, index) => {
                    return (
                        <div key={post.id} className="post">
                            <img src={post.url} alt={post.title}></img>
                            <h1>{post.id}</h1>
                            <div className='post-content'>
                                <ButtonModal id={post.id}/>
                                <button onClick={() => removeItem(post.id)}>Excluir</button>
                            </div>
                        </div>
                    );
                })}
                <Modal />
            </div>


            <Pagination />
        </section>


    )
}