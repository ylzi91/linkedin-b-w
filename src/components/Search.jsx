import { Col, Container, Row } from "react-bootstrap";
import LftBarS from "./searchComp/LftBarS";
import OtherProfile from "./profileComp/OtherProfile";
import Searched from "./searchComp/Searched";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Search() {
    const params = useParams()


    return (
        <Container fluid className="p-0 px-3 mt-3" id="home">
            <Row className="d-flex justify-content-center">
                <Col xs={0} sm={12} md={12} lg={3} className=" d-none d-sm-block">
                    <LftBarS />
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Container>
                        <Row>
                            <Col>
                                <Searched query={params.query} />
                            </Col>
                        </Row>

                    </Container>
                </Col>
                <Col xs={0} sm={0} md={0} lg={3} className="d-none d-md-none d-lg-block">
                    <OtherProfile />
                </Col>

            </Row>
        </Container>
    )
}

export default Search