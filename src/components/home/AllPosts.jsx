import { useEffect, useState } from "react";
import { DELETE_POST, TAKE_ALL_PROFILE, getOrModifyPost, getProfile, MODIFY_POST } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaRegThumbsUp } from "react-icons/fa";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { GoComment } from "react-icons/go";

const AllPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((store) => store.post.allPosts);
    const profiles = useSelector((store) => store.profile.allProfiles);
    const myProf = useSelector((store) => store.profile.myProfile);
    const [hiddenPosts, setHiddenPosts] = useState([]);
    const [deletedPosts, setDeletedPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [editPost, setEditPost] = useState(null); // Post in fase di modifica
    const [showEditModal, setShowEditModal] = useState(false); // Stato per mostrare il modale di modifica
    const [editedPostText, setEditedPostText] = useState(""); // Testo modificato

    useEffect(() => {
        dispatch(getOrModifyPost());
        dispatch(getProfile("", TAKE_ALL_PROFILE));
    }, [dispatch]);

    const getProfileImage = (username) => {
        const profile = profiles.find((profile) => profile.username === username);
        return profile ? profile.image : "default-profile.png";
    };

    const timeAgo = (timestamp) => {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInMs = now - time;
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} secondi fa`;
        } else if (diffInMinutes < 60) {
            return `${diffInMinutes} minuti fa`;
        } else if (diffInHours < 24) {
            return `${diffInHours} ore fa`;
        } else if (diffInDays < 30) {
            return `${diffInDays} giorni fa`;
        } else if (diffInMonths < 12) {
            return `${diffInMonths} mesi fa`;
        } else {
            return `${diffInYears} anni fa`;
        }
    };

    const hidePost = (postId) => {
        setHiddenPosts((prevHiddenPosts) => [...prevHiddenPosts, postId]);
        setModalMessage("Il post è stato rimosso dal tuo feed.");
        setShowModal(true);
    };

    const deletePost = (postId) => {
        dispatch(getOrModifyPost("DELETE", DELETE_POST, "", postId));
        setDeletedPosts((prevDeletedPosts) => [...prevDeletedPosts, postId]);
        setModalMessage("Il post è stato cancellato.");
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handlePostAction = (post) => {
        if (post.username === myProf.username) {
            setPostToDelete(post._id);
            setShowConfirmModal(true);
        } else {
            hidePost(post._id);
        }
    };

    const handleConfirmDelete = () => {
        if (postToDelete) {
            deletePost(postToDelete);
        }
        setShowConfirmModal(false);
        setPostToDelete(null); // e
    };

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
        setPostToDelete(null);
    };

    const handleEditPost = (post) => {
        setEditPost(post); // Imposta il post da modificare
        setEditedPostText(post.text); // Carica il testo del post esistente
        setShowEditModal(true); // Mostra il modale di modifica
    };

    const handleSavePost = () => {
        if (editPost) {
            dispatch(
                getOrModifyPost("PUT", MODIFY_POST, { text: editedPostText }, editPost._id) // Aggiorna il post con il testo modificato
            );
            dispatch(getOrModifyPost()); // Aggiorna i post dopo la modifica
            setShowEditModal(false); // Chiudi il modale
            setEditPost(null); // Resetta lo stato del post modificato
        }
    };

    return (
        <>
            {posts && posts.length > 0 ? (
                posts
                    .slice(-10)
                    .reverse()
                    .map((post) => (
                        <div
                            className={`card-create px-3 py-3 mb-3 ${hiddenPosts.includes(post._id) || deletedPosts.includes(post._id) ? "d-none" : ""
                                }`}
                            key={post._id}
                        >
                            <div className="body-input mb-3 w-100">
                                <div className="post-img">
                                    <img
                                        className="rounded-circle"
                                        src={getProfileImage(post.username)}
                                        alt={post.username}
                                    />
                                </div>
                                <div className="user-post h-100">
                                    <div>{post.username}</div>
                                    <div>{timeAgo(post.createdAt)}</div>
                                </div>
                                <div className="edit-icon d-flex align-items-center">
                                    <BsThreeDots className="me-3" onClick={() => {if(post.username._id === myProf._id)handleEditPost(post)}} />
                                    <RxCross2
                                        onClick={() => handlePostAction(post)}
                                    />
                                </div>
                            </div>
                            <div className="text-light py-2 border-bottom-custom d-flex align-items-center">
                                {post.text}
                            </div>
                            <Container className="p-0">
                                <Row className="pt-1">
                                    <Col
                                        xs={3}
                                        md={3}
                                        lg={3}
                                        xl={3}
                                        className="button-media text-light d-flex justify-content-center align-items-center p-2"
                                    >
                                        <FaRegThumbsUp className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block">Consiglia</p>
                                    </Col>
                                    <Col
                                        xs={3}
                                        md={3}
                                        lg={3}
                                        xl={3}
                                        className="button-media text-light d-flex justify-content-center align-items-center p-2"
                                    >
                                        <GoComment className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block">Commenta</p>
                                    </Col>
                                    <Col
                                        xs={3}
                                        md={3}
                                        lg={3}
                                        xl={4}
                                        className="button-media text-light d-flex justify-content-center align-items-center p-2"
                                    >
                                        <BiRepost className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block">Diffondi post</p>
                                    </Col>
                                    <Col
                                        xs={3}
                                        md={3}
                                        lg={3}
                                        xl={2}
                                        className="button-media text-light d-flex justify-content-center align-items-center"
                                    >
                                        <IoIosSend className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block">Invia</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    ))
            ) : (
                <p className="text-light">No posts available</p>
            )}

            {/* MODALE POST NASCOSTO O CANCELLATO */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="bg-dark text-light border-0">
                    <Modal.Title>Post rimosso</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">{modalMessage}</Modal.Body>
                <Modal.Footer className="bg-dark text-light border-0">
                    <Button variant="light" onClick={handleCloseModal}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* MODALE DI CONFERMA PER LA CANCELLAZIONE */}
            <Modal show={showConfirmModal} onHide={handleCancelDelete}>
                <Modal.Header className="bg-dark text-light border-0">
                    <Modal.Title>Conferma cancellazione</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">Sei sicuro di voler cancellare questo post?</Modal.Body>
                <Modal.Footer className="bg-dark text-light border-0">
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        Annulla
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Conferma
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal size="lg" show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header className="bg-dark text-light border-0 py-3 px-2">
                    <Modal.Title className="w-100 d-flex">
                        <div className="w-100 d-flex align-items-center">
                            <div className="create-post-img me-2 d-flex align-items-center">
                                <img className="rounded-circle" src={myProf.image} alt={myProf.username} />
                            </div>
                            <div className="user-post h-100 d-flex align-items-center">
                                <div>{myProf.username}</div>
                            </div>
                        </div>
                        <RxCross2 className="close-icon" onClick={() => setShowEditModal(false)} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">
                    <Form.Control
                        as="textarea"
                        maxLength={1200}
                        rows={10}
                        autoFocus
                        value={editedPostText}
                        onChange={(e) => setEditedPostText(e.target.value)}
                        className="fs-5 bg-dark border-0 text-light"
                        placeholder="Modifica il tuo post..."
                    ></Form.Control>
                </Modal.Body>
                <Modal.Footer className="bg-dark text-light border-0">
                    <Button variant="light" onClick={handleSavePost}>
                        Salva Modifiche
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default AllPosts;



