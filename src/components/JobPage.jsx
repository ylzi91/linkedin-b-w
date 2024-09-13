import { Col, Container, Row } from "react-bootstrap";
import OtherProfile from "./profileComp/OtherProfile";
import LeftBar from "./jobComp/LeftBar";
import { useState } from "react";
import JobS from "./searchComp/JobS";
import CategoryS from "./searchComp/CategoryS";
import CompanySearched from "./searchComp/CompanySearched";

function JobPage() {
  const [query, setQuery] = useState("");
  const [catQuery, setCatQuery] = useState('')

  const setJobQuery = (s) => setQuery(s);
  const setCategoryQuery = (s) => setCatQuery(s);

  

  return (
    <Container fluid className="p-0 mt-3" id="home">
      <Row className="d-flex justify-content-center">
        <Col xs={0} sm={4} md={2} lg={3}>
          <LeftBar setJobQuery={setJobQuery} />
        </Col>
        <Col xs={12} sm={8} md={5} lg={6}>
          <Container>
            <Row>
              <Col>
                <JobS query={query} setCategoryQuery={setCategoryQuery}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <CategoryS query={catQuery} />
              </Col>
            </Row>
            <Row>
              <Col>
                <CompanySearched query={query} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={3}
          lg={3}
          className="d-none d-lg-block"
        >
          <OtherProfile />
        </Col>
      </Row>
    </Container>
  );
}

export default JobPage;
