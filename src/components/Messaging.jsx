import { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Form,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { BsThreeDots, BsEmojiSmile, BsSearch } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import "./Messaging.css";
import FooterHome from "./FooterHome";

const initialConversations = [
  {
    id: 1,
    name: "Franklin Tavarez",
    position: "Marketing @ LinkedIn",
    messages: [
      {
        sender: "Franklin Tavarez",
        text: "Ciao Loïc! Mi chiamo Franklin e faccio parte del team LinkedIn Premium. Grazie di aver scelto la community di LinkedIn.",
      },
    ],
    imageUrl: "https://placedog.net/500",
  },
  {
    id: 2,
    name: "Manuel B",
    position: "Junior FullStack",
    messages: [
      { sender: "Manuel B", text: "Hai visto l'ultimo aggiornamento?" },
      { sender: "Tu", text: "Sì, è perfetto" },
    ],
    imageUrl: "https://placedog.net/600",
  },
];

const Messaging = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedConversation = conversations.find(
    (conv) => conv.id === selectedConversationId
  );

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === selectedConversationId) {
        return {
          ...conv,
          messages: [...conv.messages, { sender: "Tu", text: newMessage }],
        };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setNewMessage("");
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="messaging-container">
      <Row className="h-100">

        <Col md={3} className="p-3 bigi-1">
        </Col>


        <Col md={6} className="d-flex flex-column p-3 bg-light central-section ">
          <div className="mess">
            <div className="d-flex justify-content-start align-items-start mb-4 ">
              <h5 className="pt-1 me-3">Messaggistica</h5>

              <InputGroup style={{ width: "30%" }}>
                <InputGroup.Text>
                  <BsSearch />
                </InputGroup.Text>
                <FormControl
                  placeholder="Cerca messaggi"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </div>

            <div className="d-flex justify-content-start mb-5 ms-2 ">
              <DropdownButton
                title="Posta in arrivo"
                variant="success"
                className=" me-3  green"
              >
                <Dropdown.Item href="#/action-1">Posta in arrivo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Posta Indesiderata
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Archiviati</Dropdown.Item>
              </DropdownButton>

              <Button variant="outline-secondary rounded-pill me-2">
                Da leggere
              </Button>
              <Button variant="outline-secondary rounded-pill me-2">
                I miei collegamenti
              </Button>
              <Button variant="outline-secondary rounded-pill me-2">
                Messaggi InMail
              </Button>
              <Button variant="outline-secondary rounded-pill me-2">
                Contrassegnati con una stella
              </Button>
            </div>

            <Row className="mt-5">
              <Col md={4}>
                <ListGroup variant="flush" className="conversation-list">
                  {filteredConversations.map((conversation) => (
                    <ListGroup.Item
                      key={conversation.id}
                      active={conversation.id === selectedConversationId}
                      onClick={() => setSelectedConversationId(conversation.id)}
                      className="conversation-item"
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          src={conversation.imageUrl}
                          roundedCircle
                          width={40}
                          height={40}
                          className="me-2"
                        />
                        <div>
                          <strong>{conversation.name}</strong>
                          <br />
                          <small>
                            {conversation.messages[
                              conversation.messages.length - 1
                            ]?.text.slice(0, 30)}
                            ...
                          </small>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>

              <Col md={8}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <Image
                      src={selectedConversation?.imageUrl}
                      roundedCircle
                      width={50}
                      height={50}
                      className="me-3"
                    />
                    <div>
                      <h5>{selectedConversation?.name}</h5>
                      <small>{selectedConversation?.position}</small>
                    </div>
                  </div>
                  <BsThreeDots size={20} />
                </div>

                <div className="chat-body flex-grow-1 border rounded p-3 overflow-auto">
                  {selectedConversation?.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`message ${message.sender === "Tu" ? "text-end" : ""
                        }`}
                    >
                      <strong>{message.sender}</strong>
                      <p className="message-text">{message.text}</p>
                    </div>
                  ))}
                </div>

                <Form
                  className="mt-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <InputGroup>
                    <InputGroup.Text>
                      <BsEmojiSmile />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Scrivi un messaggio..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit" variant="success">
                      <AiOutlineSend />
                    </Button>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </div>

        </Col>


        <Col md={3} className="p-1 bigi">
          <div className="loreme-ipsum">
            <div className="immagine text-center me-5 ">
              <img
                src="https://media.licdn.com/dms/image/v2/D560CAQHnX32JxlGu7Q/spinmail-bannerimage-shrink_300_250/spinmail-bannerimage-shrink_300_250/0/1649861338774?e=1726736400&v=beta&t=pKVGrmWZyl3YfPG8Q7Fxmu3N4IW17XHeNux5o8W7ptw"
                alt=""
              />
            </div>
            <div className="immagine text-center mt-3 me-5 ">
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
                alt=""
              />
            </div>


            {/*<div className="card text-center mt-5 ms-5  " style={{ width: "19rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>*/}

            <FooterHome />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Messaging;
