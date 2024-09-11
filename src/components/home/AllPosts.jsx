import { useEffect, useState } from "react";
import { DELETE_POST, TAKE_ALL_PROFILE, getOrModifyPost, getProfile } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaRegThumbsUp, FaTrashAlt } from "react-icons/fa";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { GoComment } from "react-icons/go";

const AllPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.post.allPosts);
    const profiles = useSelector(store => store.profile.allProfiles);
    const myProfile = useSelector(store => store.profile.myProfile)
    const [hiddenPosts, setHiddenPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [idToDel, setIdToDel] = useState('')

    useEffect(() => {
        dispatch(getOrModifyPost());
        dispatch(getProfile('', TAKE_ALL_PROFILE));
        dispatch(getProfile('me'))
    }, [dispatch, idToDel]);


    const getProfileImage = (username) => {
        const profile = profiles.find(profile => profile.username === username);
        return profile ? profile.image : 'default-profile.png';
    };

    const getProfileNameSurname = (username) => {
        const profile = profiles.find(profile => profile.username === username)
        return profile
    }


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
        setHiddenPosts([...hiddenPosts, postId]);
        setShowModal(true); 
    };
    const showConfrimDelete = (postId) => {
        setIdToDel(postId)
        setShowModal2(true); 
    };

     const handleCloseModal = () => setShowModal(false);
     const handleCloseSecondModal = () => setShowModal2(false);

    return (
        <>
            {
                posts && posts.length > 0 ?
                    posts.filter(post => !hiddenPosts.includes(post._id)).slice(-10).reverse().map((post) => (
                        <div className="card-create px-3 py-3 mb-3" key={post._id}>
                            <div className="body-input mb-3">
                                <div className="post-img">
                                    <img className="rounded-circle" src={getProfileImage(post.username)} alt={post.username} />
                                </div>
                                <div className="user-post w-100 h-100">
                                    <div>{getProfileNameSurname(post.username).name} {getProfileNameSurname(post.username).surname}</div>
                                    <div>{timeAgo(post.createdAt)}</div>
                                </div>
                                <div className="edit-icon d-flex align-items-center">
                                    <BsThreeDots className="me-3" />
                                   {myProfile.username === post.username ? <FaTrashAlt className=" text-danger opacity-75" onClick={() => showConfrimDelete(post._id)} /> :  <RxCross2 onClick={() => hidePost(post._id)} />}
                                </div>
                            </div>
                            <div className="text-light py-2 border-bottom-custom d-flex align-items-center">{post.text}</div>
                            <Container className="p-0">
                                <Row className="pt-1">
                                    <Col xs={3} md={3} lg={3} xl={3} className="button-media text-light d-flex justify-content-center align-items-center p-2">
                                        <FaRegThumbsUp className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block"> Consiglia</p>
                                    </Col>
                                    <Col xs={3} md={3} lg={3} xl={3} className="button-media text-light d-flex  justify-content-center align-items-center p-2">
                                        <GoComment  className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block"> Commenta</p>
                                    </Col>
                                    <Col xs={3} md={3} lg={3} xl={4} className="button-media text-light d-flex  justify-content-center align-items-center p-2">
                                        <BiRepost className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block"> Diffondi post</p>
                                    </Col>
                                    <Col xs={3} md={3} lg={3} xl={2} className="button-media text-light d-flex  justify-content-center align-items-center">
                                        <IoIosSend className="like-icon" />
                                        <p className="d-md-none d-lg-none d-xl-block"> Invia</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )) : <p className="text-light">No posts available</p>
            }

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="bg-dark text-light border-0">
                    <Modal.Title>Post nascosto</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">Il post è stato rimosso dal tuo feed.</Modal.Body>
                <Modal.Footer className="bg-dark text-light border-0">
                    <Button variant="light" onClick={handleCloseModal}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal}>
                <Modal.Header className="bg-dark text-light border-0">
                    <Modal.Title>Elimina Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-light">Sei sicuro di voler eliminare il tuo post?</Modal.Body>
                <Modal.Footer className="bg-dark text-light border-0">
                    <Button variant="light" onClick={handleCloseSecondModal}>
                        No, è bellissimo
                    </Button>
                    <Button variant="outline-light" onClick={(e)=> {
                        e.preventDefault()
                        dispatch(getOrModifyPost('DELETE', DELETE_POST, '', idToDel))
                        setTimeout(() => {
                            setIdToDel('')
                            
                        }, 1000);
                        handleCloseSecondModal()
                    }}>
                        Certo, fa schifo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AllPosts;
