import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TAKE_MY_PROFILE, getProfile } from "../../redux/actions";
import { GrMultimedia } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { Container, Col, Row } from "react-bootstrap";

const CreatePost = () => {

    const dispatch = useDispatch();
    const profile = useSelector(store => store.profile.myProfile)

    useEffect(() => {
        dispatch(getProfile('me', TAKE_MY_PROFILE))
    }, [])

    return (
        <>
            <div className="card-create px-3 pt-2 mb-3">
                <div className="body-input mb-2">
                    <div className="body-input-img">
                        <img src={profile.image} alt="profile-image" />
                    </div>
                    <div className="body-input-text w-100 h-100">
                        <div className="div-input"> Crea un post</div>
                    </div>
                </div>
                <Container fluid className="p-0 w-100">
                    <Row className="w-100 d-flex justify-content-between">
                        <Col lg={5} className="button-media d-flex align-items-center justify-content-start px-2">
                            <GrMultimedia className="icon-media" />
                            <p className="desc-button">Contenuti Multimediali</p>
                        </Col>
                        <Col lg={2}className="button-media d-flex align-items-center justify-content-start p-0">
                            <MdEvent className="icon-event" />
                            <p className="desc-button"> Evento</p>
                        </Col>
                        <Col lg={4} className="button-media d-flex align-items-center justify-content-start p-0">
                            <GrMultimedia className="icon-article" />
                            <p className="desc-button"> Scrivi un articolo</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CreatePost;