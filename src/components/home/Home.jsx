import { Container, Row, Col } from "react-bootstrap";
import { Sxbar } from "./Sxbar";
import { Dxbar } from "./Dxbar";
import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";

const Home = () => {

    return (
        <>
            <Container fluid className=" mt-3" id="home">
                <Row className="d-flex justify-content-center">
                    <Col xs={0} sm={4} md={2} lg={2} className=" d-none d-sm-block p-1" >
                        <Sxbar />
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={6} className=" p-1" >
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
                    <Col xs={0} sm={0} md={3} lg={4} className=" p-1 d-none d-md-block">
                        <Dxbar />
                    </Col>

                </Row>
            </Container>
        </>)
}

export default Home;