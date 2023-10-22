import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function ButtonModal({ id }) {
    const context = useContext(GlobalContext);
    const { modal, setModal, setPostModal, currentItems } = context;

    const toggleModal = (e) => {
        const photoClicked = currentItems.filter(post => post.id === parseInt(e.target.id))

        setPostModal(photoClicked);
        setModal(!modal);
    };

    return (
        <input type="button" id={id}  onClick={toggleModal} value="Ver Mais" />
    )
}