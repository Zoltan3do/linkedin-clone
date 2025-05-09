/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'
import token from "./tooken.json";

function ImageUploadProfile({ show, hide }) {
  const API_KEY = token.AUTH
  const inputRef = useRef()

  const handleButtonClick = () => {
    inputRef.current.click()
  }

  const handleFileChange = () => {
    let file = inputRef.current.files[0]
    if (file) {
      let formData = new FormData()
      formData.append('profile', file)
      let id = '66decad84d0def0015cef103'

      fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`,
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: API_KEY,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Network response was not ok')
          }
        })
        .then((data) => {
          console.log(data)
          window.location.reload()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={hide}
        animation={false}
        aria-labelledby="example-modal-sizes-title-lg"
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Aggiungi foto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Modifica la tua foto profilo</Modal.Body>
        <Modal.Footer className="justify-content-between ">
          <div>
            <input
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
          <div>
            <Button variant="secondary" onClick={hide} className="me-3">
              Modifica foto di sfondo
            </Button>
            <Button variant="primary" onClick={handleButtonClick}>
              Modifica foto profilo
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ImageUploadProfile
