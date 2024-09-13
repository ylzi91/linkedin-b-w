import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const PeopleS = ({ query }) => {
  const AllProfile = useSelector((s) => s.profile.allProfiles);
  const [peopleExpand, setPeopleExpand] = useState(5);
  const [expand, setExpand] = useState(false);

  // Funzione di filtraggio per i profili che corrispondono alla query
  const filteredProfiles = AllProfile.filter(
    (p) =>
      p.username.includes(query) ||
      p.name.includes(query) ||
      p.surname.includes(query)
  );

  return (
    <Card
      bg="dark"
      className="text-white rounded-3 text-wrap mb-2"
      id="People"
    >
      {filteredProfiles.length > 0 ? (
        <>
          <Card.Body>
            <Card.Title className="mb-4">People</Card.Title>
            <ListGroup className="p-0 m-0 border-0 border-bottom border-secondary pb-0 rounded-0">
              {filteredProfiles.slice(0, peopleExpand).map((p) => (
                <ListGroup.Item
                  key={p._id}
                  className="bg-dark px-3 py-2 d-flex align-items-center pe-0 border-0"
                >
                  <div>
                    <img
                      src={p.image}
                      className="profileo rounded-circle"
                      alt="profile"
                    />
                  </div>
                  <div className="text-white flex-column w-100 me-0 ps-3 border-0">
                    <p>
                      {p.name} {p.surname}
                    </p>
                    <p className="py-1 text-secondary">{p.title}</p>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Bottone per espandere o nascondere le persone */}
            {expand ? (
              <div className="show-all-experiences">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(false);
                    setPeopleExpand(5); // Riduci la lista a 5 persone
                  }}
                >
                  Hide people
                  <span className="ms-1">&larr;</span>
                </button>
              </div>
            ) : (
              <div className="show-all-experiences">
                <button
                  className="btn btn-link text-decoration-none w-100 py-3 text-secondary fw-semibold"
                  onClick={() => {
                    setExpand(true);
                    setPeopleExpand(filteredProfiles.length); // Espandi la lista per mostrare tutte le persone
                  }}
                >
                  Show all {filteredProfiles.length} people
                  <span className="ms-1">&rarr;</span>
                </button>
              </div>
            )}
          </Card.Body>
        </>
      ) : (
        <div className="d-flex align-items-center px-3 text-secondary" style={{ height: "70px" }}>
          <p>Nessun profilo trovato.</p>
        </div>
      )}
    </Card>
  );
};

export default PeopleS;
