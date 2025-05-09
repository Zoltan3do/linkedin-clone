/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import token from "./tooken.json";

const ModifyPostModal = ({ id, text, trigger }) => {
  const endPoint = `https://striveschool-api.herokuapp.com/api/posts/${id}`
  const API_KEY = token.AUTH
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState(text)
  const [img, setImg] = useState(null)
  const inputRef = useRef()

  const addImgToPost = async () => {
    const formData = new FormData()
    formData.append('post', img)
    try {
      const res = await fetch(endPoint, {
        method: 'POST',
        headers: {
          Authorization: API_KEY,
        },
        body: formData,
      })
      if (!res.ok) {
        throw new Error(`${res.status} - Errore nella fetch (upload img post)`)
      }
    } catch (err) {
      console.log(err)
    } finally {
      trigger()
    }
  }

  const modifyPost = async () => {
    try {
      const res = await fetch(endPoint, {
        method: 'PUT',
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),
      })
      if (!res.ok) {
        throw new Error(`${res.status} - Errore nella fetch (nuovo post)`)
      }
    } catch (err) {
      console.log(err)
    } finally {
      if (img) {
        addImgToPost()
        setImg(null)
        setInputValue('')
        setShow(false)
      } else {
        setInputValue('')
        setShow(false)
        trigger()
      }
    }
  }

  const handleChange = () => {
    setImg(inputRef.current.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    modifyPost()
  }

  return (
    <>
      <i
        className="fa-solid fa-ellipsis text-secondary fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
        style={{
          height: '35px',
          width: '35px',
        }}
        onClick={() => setShow(true)}
      ></i>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        className="mt-5"
      >
        <Modal.Header closeButton className="align-items-start p-4 border-0">
          <h4>Modifica post</h4>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="pt-0">
            <Form.Control
              as="textarea"
              rows={8}
              placeholder="Di cosa vorresti parlare?"
              className="fs-5 border-0 boxshadow-0 mb-3"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="d-flex align-items-center">
              <div className="d-flex me-4">
                <div
                  className="postmodal-btn rounded-circle canvas-btn bg-gray me-2"
                  onClick={() => inputRef.current.click()}
                >
                  <i className="fa-regular fa-image fs-5 text-secondary"></i>
                </div>
                <div className="postmodal-btn rounded-circle canvas-btn bg-gray me-2">
                  <i className="fa-solid fa-calendar-days fs-5 text-secondary"></i>
                </div>
                <div className="postmodal-btn rounded-circle canvas-btn bg-gray me-2">
                  <i className="fa-solid fa-certificate fs-5 text-secondary"></i>
                </div>
                <div className="postmodal-btn rounded-circle canvas-btn bg-gray me-2">
                  <i className="fa-solid fa-ellipsis fs-5 text-secondary"></i>
                </div>
              </div>
              {img && <p className="m-0 border rounded-1 p-2">{img.name}</p>}
            </div>
            <input
              type="file"
              ref={inputRef}
              className="d-none"
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <i
              className="fa-regular fa-clock fs-5 pointer bg-gray-hover rounded-circle d-flex justify-content-center align-items-center"
              style={{
                height: '40px',
                width: '40px',
              }}
            ></i>
            <Button
              type="submit"
              variant={inputValue === '' ? 'secondary' : 'primary'}
              className="fw-semibold rounded-pill px-3 py-1"
              disabled={inputValue === '' ? true : false}
            >
              Pubblica
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default ModifyPostModal
