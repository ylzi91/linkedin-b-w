import { Col, Row } from "react-bootstrap"
import JobsSearched from "./JobsSearched"
import CompanySearched from "./CompanySearched"

const Searched = ({query}) => {
    return(<>
    <Row>
        <Col xs={12}>
        <JobsSearched query={query} />
        </Col>
        <Col xs={12}>
        <CompanySearched query={query} />
        </Col>
    </Row>
    </>)
}

export default Searched