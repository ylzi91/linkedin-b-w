import { Col, Row } from "react-bootstrap"
import CompanySearched from "./CompanySearched"
import PeopleS from "./PeopleS"
import JobS from "./JobS"
import PostSearched from "./PostSearched"
import { useEffect } from "react"
import CategoryS from "./CategoryS"

const Searched = ({query}) => {
    return(<>
    <Row>
        <Col xs={12}>
          <JobS query={query} /> 
        </Col>
        <Col xs={12}>
        <CompanySearched query={query} />
        </Col>
        <Col xs={12}>
        <CategoryS query={query} />
        </Col>
        <Col xs={12}>
        <PeopleS query={query} />
        </Col>
        <Col xs={12}>
        <PostSearched query={query} />
        </Col>
    </Row>
    </>)
}

export default Searched