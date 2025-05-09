/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Post from "./Post";
import token from "../tooken.json"


const AllPosts = ({ postsAdded }) => {

    const [posts, setPosts] = useState([]);
    const [numOfPosts, setNumOfPosts] = useState(20);

    console.log("authorization" + token.AUTH)

    // const [postsChanged, setPostsChanged] = useState(0);
    // const [selectedPost, setSelectedPost] = useState(null);
    const [selectedPostDetails, setSelectedPostDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleCloseModal = () => setShowModal(false);


    const fetchPosts = async () => {
        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/posts",
                {
                    headers: {
                        Authorization: token.AUTH,
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
                console.log(posts)
            } else {
                console.error("Fetch fallita");
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Funzione per eliminare il post
    const handleDeletePost = async (postId) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: AUTH,
                    },
                }
            );

            if (response.ok) {
                setPosts(posts.filter(post => post._id !== postId)); // Aggiorno lo stato locale eliminando il post
                alert('Post eliminato con successo!');
            } else {
                alert('Errore durante l\'eliminazione del post');
            }
        } catch (error) {
            console.error('Errore durante l\'eliminazione del post:', error);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, [selectedPostId]);

    return (
        <>
            {posts &&
                posts
                    .slice(posts.length - numOfPosts, posts.length).reverse()
                    .map((post) => <Post key={post._id} post={post} handleDelete={handleDeletePost} />)}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedPostDetails?.username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            as="textarea"
                            className="border-0"
                            rows={3}
                            value={selectedPostDetails?.text}
                            onChange={(e) =>
                                setSelectedPostDetails({
                                    ...selectedPostDetails,
                                    text: e.target.value,
                                })
                            }
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" >
                        Aggiorna
                    </Button>
                    <Button variant="danger" onClick={() => handleDeletePost(selectedPostId)}>
                        Elimina
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default AllPosts;