import { Link } from "react-router-dom"

const HomeButton = () => {
  return (
    <Link className="text-decoration-none" to="/">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="white"
          width="24"
          height="24">
          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
        </svg>
        <p className="text-white m-0 iconNames d-none d-lg-flex">Home</p>

      </div>
    </Link>
  )
}

export default HomeButton;
