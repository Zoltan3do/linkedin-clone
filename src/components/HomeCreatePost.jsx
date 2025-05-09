import { useState, useEffect } from "react";
import { Form, Button, Modal, Alert, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createHomePost,
  fetchUserProfile,
  deleteHomePost,
} from "../redux/actions/homePostAction";
import { FaCalendarDays } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { FaSmile, FaImage, FaCalendarAlt, FaCog, FaPlus } from "react-icons/fa";
import HomeCalendarEventModal from "./HomeCalendarEventModal";
import HomeAppointmentsList from "./HomeAppointmentsList";

const HomeCreatePost = () => {
  const [showHomeModal, setShowHomeModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [postHomeContent, setPostHomeContent] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState("");
  const [appointments, setAppointments] = useState([]); // Stato per gli appuntamenti

  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.homePosts.homeposts);
  const dispatch = useDispatch();

  // Funzione per creare un post
  const handleCreatePost = () => {
    if (postHomeContent) {
      dispatch(createHomePost(postHomeContent))
        .then(() => {
          setAlertMessage("Il tuo post è stato creato con successo!");
          setAlertVariant("success");
        })
        .catch(() => {
          setAlertMessage(
            "Si è verificato un errore nella creazione del post."
          );
          setAlertVariant("danger");
        });
      setPostHomeContent("");
      setShowHomeModal(false);
    } else {
      setAlertMessage("Il contenuto del post non può essere vuoto.");
      setAlertVariant("warning");
    }
  };

  // Funzione per cancellare un post
  const handleDeletePost = (postId) => {
    dispatch(deleteHomePost(postId)); // Elimina il post con il suo ID
  };

  // Funzione per creare un evento
  const handleCreateEvent = (eventDetails) => {
    if (
      eventDetails.eventName &&
      eventDetails.startDate &&
      eventDetails.startTime
    ) {
      const updatedAppointments = [...appointments, eventDetails];
      setAppointments(updatedAppointments); // Aggiunge l'evento alla lista

      // Salva gli appuntamenti nel localStorage
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }
  };

  // Funzione per eliminare un appuntamento
  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments); // Aggiorna la lista degli appuntamenti

    // Aggiorna il localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  // Recupera gli appuntamenti dal localStorage al montaggio del componente
  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments)); // Imposta lo stato con i dati salvati
    }
  }, []);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <div className="p-3" style={{ marginTop: "100px" }}>
      <Card className="p-3 rounded-3">
        <div className="d-flex align-items-center">
          {user && user.image ? (
            <img
              src={user.image}
              alt="avatar"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
          ) : (
            <div
              className="rounded-circle bg-secondary me-2"
              style={{ width: "40px", height: "40px" }}
            ></div>
          )}
          <Button
            variant="light"
            onClick={() => setShowHomeModal(true)}
            className="w-100 text-start rounded-5 border border-2 py-2"
          >
            Crea un post
          </Button>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <Button
            variant="outline-secondary"
            className="border border-0 text-black"
          >
            <i className="bi bi-image text-primary"></i> Contenuti multimediali
          </Button>
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center border border-0 text-black"
            onClick={() => setShowCalendarModal(true)}
          >
            <FaCalendarDays className="calendar-icon-home me-1" /> Evento
          </Button>
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center border border-0 text-black"
          >
            <RiArticleFill className="me-1 article-icon-home" /> Scrivi un
            articolo
          </Button>
        </div>
      </Card>

      {/* Alert per mostrare messaggi di post o errore */}
      {alertMessage && (
        <Alert
        className="mt-2"
          variant={alertVariant}
          onClose={() => setAlertMessage(null)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      {/* Modal per creare un nuovo post */}
      <Modal
        show={showHomeModal}
        onHide={() => setShowHomeModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <div className="d-flex align-items-center">
            <img
              src={user?.image || "default-avatar.png"}
              alt="avatar"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <h6 className="mb-0">{user?.name}</h6>
              <small>Pubblica: Chiunque</small>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postContent">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Di cosa vorresti parlare?"
                value={postHomeContent}
                onChange={(e) => setPostHomeContent(e.target.value)}
                style={{ border: "none", fontSize: "16px" }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaSmile className="me-3" size={20} />
            <FaImage className="me-3" size={20} />
            <FaCalendarAlt className="me-3" size={20} />
            <FaCog className="me-3" size={20} />
            <FaPlus className="me-3" size={20} />
          </div>
          <Button
            variant="primary"
            onClick={handleCreatePost}
            disabled={!postHomeContent.trim()}
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Mount the CalendarEventModal */}
      <HomeCalendarEventModal
        show={showCalendarModal}
        handleClose={() => setShowCalendarModal(false)}
        handleCreateEvent={handleCreateEvent} // Usa la funzione per creare eventi
      />

      {/* Mostra la lista dei post con il button elimina */}
      <div className="mt-4">
        {posts.map((post) => (
          <Card key={post._id} className="mb-3">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{post.user.name}</Card.Title>
                <Card.Text>{post.text}</Card.Text>
              </div>
              <Button
                variant="outline-danger"
                onClick={() => handleDeletePost(post._id)} // button elimina
              >
                Elimina
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Passa gli appuntamenti a HomeAppointmentsList */}
      <HomeAppointmentsList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
      />
    </div>
  );
};

export default HomeCreatePost;
