import { Col, Container, Row } from "react-bootstrap";
import LftBarS from "./searchComp/LftBarS";
import OtherProfile from "./profileComp/OtherProfile";
import Searched from "./searchComp/Searched";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Search (){
    const params = useParams()
    

    return(
        <Container fluid className="p-0 mt-3" id="home">
                <Row className="d-flex justify-content-center">
                    <Col xs={0} sm={4} md={2} lg={3} className=" d-none d-sm-block p-1" >
                    <LftBarS />
                    </Col>
                    <Col xs={12} sm={8} md={5} lg={6} className=" p-1" >
                        <Container>
                            <Row>
                                <Col>
                                <Searched query={params.query}/>
                                </Col>
                            </Row>
                           
                        </Container>
                    </Col>
                    <Col xs={0} sm={0} md={3} lg={3} className=" p-1 d-none d-lg-block border-top border-secondary pt-1">
                    <OtherProfile/>
                    </Col>

                </Row>
            </Container>
    )
}

export default Search