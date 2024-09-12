import { Col, Row } from "react-bootstrap"
import JobsSearched from "./JobsSearched"
import CompanySearched from "./CompanySearched"
import PeopleS from "./PeopleS"

const Searched = ({query}) => {
    return(<>
    <Row>
        <Col xs={12}>
        <JobsSearched query={query} />
        </Col>
        <Col xs={12}>
        <CompanySearched query={query} />
        </Col>
        <Col xs={12}>
        <PeopleS query={'riccardo'} />
        </Col>
    </Row>
    </>)
}

export default Searched