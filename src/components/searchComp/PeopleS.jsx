import { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import SpinnerCircle from "../spinners/SpinnerCircle";

const PeopleS = ({ query }) => {
  const AllProfile = useSelector((s) => s.profile.allProfiles);
  const [peopleExpand, setPeopleExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  const filteredProfiles = AllProfile.filter(
    (p) =>
      p.username.includes(query) ||
      p.name.includes(query) ||
      p.surname.includes(query)
  );

  return (
    <>
      <Card bg="dark" className="text-white rounded-3 text-wrap mb-2" id="People">
        <Card.Title className="ms-3 py-3">
          Persone che potrebbero interessarti
        </Card.Title>
        <ListGroup className="p-0 m-0 border-0 border-bottom border-secondary pb-0 rounded-0">
          {!AllProfile.length ? (
            <SpinnerCircle />
          ) : (
            filteredProfiles.slice(0, peopleExpand).map((p) => (
              <ListGroup.Item
                key={p._id}
                className="bg-dark pt-2 d-flex pe-0 border-0 pb-0"
              >
                <div>
                  <img
                    src={p.image}
                    className="profileo rounded-circle"
                    alt="profile"
                  />
                </div>
                <div className="text-white flex-column w-100 me-0 ps-3 pb-2 border-0 border-secondary border-bottom">
                  <p>
                    {p.name} {p.surname}
                  </p>
                  <p className="py-1 text-secondary">{p.title}</p>
                </div>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
        {expand ? (
          <div className="show-all-experiences">
            <button
              className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
              onClick={() => {
                setExpand(false);
                setPeopleExpand(5);
              }}
            >
              Nascondi persone <span className="ms-1">&larr;</span>
            </button>
          </div>
        ) : (
          <div className="show-all-experiences">
            <button
              className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
              onClick={() => {
                setExpand(true);
                setPeopleExpand(filteredProfiles.length);
              }}
            >
              Mostra tutte le {filteredProfiles.length} persone{" "}
              <span className="ms-1">&rarr;</span>
            </button>
          </div>
        )}
      </Card>
    </>
  );
};

export default PeopleS;

