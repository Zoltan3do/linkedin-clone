/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import token from "./tooken.json";

const DeletePostModal = ({ id, trigger }) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/posts/${id}`
  const API_KEY = token.AUTH
  const [show, setShow] = useState(false)

  const deletePost = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'DELETE',
        headers: {
          Authorization: API_KEY,
        },
      })
      if (res.ok) {
        trigger()
      } else {
        throw new Error(`${res.status} - Errore nella fetch (delete post)`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <i
        className="fa-solid fa-xmark text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
        style={{
          height: '35px',
          width: '35px',
        }}
        onClick={() => setShow(!show)}
      ></i>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cancellazione post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vuoi eliminare questo post definitivamente? Una volta confermata
          l&apos;operazione non sarà possibile tornare indietro.
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-evenly">
          <Button
            variant="secondary"
            className="fw-semibold py-1 rounded-pill"
            onClick={() => setShow(false)}
          >
            Close
          </Button>
          <Button
            variant="danger"
            className="fw-semibold py-1 rounded-pill"
            onClick={() => {
              deletePost()
              setShow(false)
            }}
          >
            Conferma
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeletePostModal
