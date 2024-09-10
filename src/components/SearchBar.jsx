import {InputGroup, Form} from 'react-bootstrap'
import {IoMdSearch} from 'react-icons/io'

const SearchBar = () => {

  
    return (
        <InputGroup className='pt-3' >
        <InputGroup.Text id="basic-addon1"><IoMdSearch/></InputGroup.Text>
        <Form.Control
          placeholder="Cerca"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    )

}

export default SearchBar