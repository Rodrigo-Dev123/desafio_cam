import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import "./styles.css";

export default function Modal() {
  const context = useContext(GlobalContext);
  const { modal, removeItem, setModal, postModal } = context;

  const toggleModal = () => {
    //console.log('aqui', postModal)
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="post">
              {postModal.map((post) => {
                return (
                  <>
                    <img src={post.url} alt={post.title}></img>
                    <div className='post-content'>
                      <p>{post.title}</p>
                      <h1>{post.id}</h1>
                      <button onClick={() => removeItem(post.id)}>Excluir</button>
                    </div>
                  </>
                )
              })}
            </div>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div >
      )}
    </>
  );
}