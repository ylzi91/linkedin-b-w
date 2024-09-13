import { Container, Row, Col } from "react-bootstrap";
import { Sxbar } from "./Sxbar";
import { Dxbar } from "./Dxbar";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";

const Home = () => {

    return (
        <>
            <Container fluid className="p-0 px-3 mt-3" id="home">
                <Row className="d-flex justify-content-center">
                    <Col sm={12} md={12} lg={3} className=" d-none d-sm-block pe-1" >
                        <Sxbar />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6} className=" px-1" >
                        <Container>
                            <Row>
                                <Col>
                                    <CreatePost />
                                </Col>
                            </Row>
                            <Row>
                                <AllPosts />
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={3} className=" ps-1 d-none d-md-none d-lg-block">
                        <Dxbar />
                    </Col>

                </Row>
            </Container>
        </>)
}

export default Home;