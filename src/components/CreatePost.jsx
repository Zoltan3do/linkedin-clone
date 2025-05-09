/* eslint-disable react/prop-types */
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CreatePostModal from './CreatePostModal'
import { Link } from 'react-router-dom'

const CreatePost = ({ trigger }) => {
  const profile = useSelector((state) => state.profile.profile)

  return (
    <Card className="mb-2">
      <Card.Body className="pb-1">
        <div className="d-flex align-items-center">
          <Link to="/profile">
            <img
              src={profile ? profile.image : ''}
              alt="profile-pic"
              height="48px"
              width="48px"
              className="rounded-circle objectfit-cover me-2 pointer"
            />
          </Link>
          <CreatePostModal profile={profile} trigger={trigger} />
        </div>
        <div className="d-flex justify-content-between flex-wrap pt-1">
          <Button className="btn-homepost text-secondary">
            <i className="fa-regular fa-image text-primary me-1"></i>
            <span className="fs-7 fw-semibold">Contenuti multimediali</span>
          </Button>
          <Button className="btn-homepost text-secondary">
            <i
              className="fa-solid fa-calendar-days me-1"
              style={{ color: '#C37D16' }}
            ></i>
            <span className="fs-7 fw-semibold">Evento</span>
          </Button>
          <Button className="btn-homepost text-secondary">
            <i
              className="fa-regular fa-newspaper me-1"
              style={{ color: '#E06848' }}
            ></i>
            <span className="fs-7 fw-semibold">Scrivi un articolo</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CreatePost
