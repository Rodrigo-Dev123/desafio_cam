import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./styles.css";

export default function Modal() {
  const { modal, removeItem, setModal, postModal } = useContext(GlobalContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="">
              {postModal.map((post) => {
                return (
                  <div key={post.id}>
                    <img className="modal-image" src={post.url} alt={post.title}></img>
                    <div className='post-info'>
                      <div className="container-text">
                        <h1 className="description">{post.title}</h1>
                        <div className="text-modal" style={{ fontSize: "20px" }}>
                          <p>Foto {post.id}</p>
                          <button className="modal-delete" onClick={() => removeItem(post.id)}>
                            <RiDeleteBin6Line
                              className='modal-delete-icon'
                            />
                          </button>
                        </div>
                      </div>


                    </div>
                  </div>
                )
              })}
            </div>

            <button className="close-modal" onClick={toggleModal}>
              <AiOutlineClose />
            </button>
          </div>
        </div >
      )}
    </>
  );
}