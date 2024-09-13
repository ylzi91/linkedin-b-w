import { Badge } from "react-bootstrap";
import { HiOutlinePencil } from "react-icons/hi";

const EditIcon = ({actionState, state}) => {

    return (
        <Badge onClick={() => actionState(!state)}
            className={` rounded rounded-circle bg-transparent p-2 edit-icon-profile ${state
                ? "text-white-50"
                : ""
                }`}
        >
            <HiOutlinePencil />
        </Badge>
    )
}

export default EditIcon;