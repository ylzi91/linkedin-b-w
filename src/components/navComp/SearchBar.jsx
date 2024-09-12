
import {InputGroup, Form} from 'react-bootstrap'
import {IoMdSearch} from 'react-icons/io'

const SearchBar = () => {
 return (
        <InputGroup id='search'className='me-5'>
        <InputGroup.Text>
        <IoMdSearch className='fs-5'/>
        </InputGroup.Text>
        <Form.Control
          placeholder="Cerca"
          aria-label="Search"
         />
      </InputGroup>
    )

}

export default SearchBar