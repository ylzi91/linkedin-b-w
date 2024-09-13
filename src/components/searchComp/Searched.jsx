import { Col, Row } from "react-bootstrap"
import CompanySearched from "./CompanySearched"
import PeopleS from "./PeopleS"
import JobS from "./JobS"
import PostSearched from "./PostSearched"
import { useEffect, useState } from "react"
import CategoryS from "./CategoryS"

const Searched = ({query}) => {

  const [catQuery, setCatQuery] = useState('')

  const setCategoryQuery = (s) => setCatQuery(s);

    return(<>
    <Row>
        <Col xs={12} md={12}>
          <JobS query={query} setCategoryQuery={setCategoryQuery}/> 
        </Col>
        <Col xs={12} md={12}>
        <CompanySearched query={query} />
        </Col>
        <Col xs={12} md={12}>
        <CategoryS query={catQuery} />
        </Col>
        <Col xs={12} md={12}>
        <PeopleS query={query} />
        </Col>
        <Col xs={12} md={12}>
        <PostSearched query={query} />
        </Col>
    </Row>
    </>)
}

export default Searched