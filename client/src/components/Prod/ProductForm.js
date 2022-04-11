import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";

import { addProduct, updateProduct } from "../../JS/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

function ProductForm({ edit, product, idUser }) {
  const user = useSelector((state) => state.productsReducer.user);

  const [show, setShow] = useState(false);
  const [Title, setTitle] = useState("");
  const [Model, setModel] = useState("");
  const [categories, setCategories] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      setTitle(product.Title);
      setModel(product.Model);
      setDescription(product.Description);
      setCategories(product.categories);
      setPrice(product.price);
    } else {
      setTitle("");
      setModel("");
      setPrice("");
      setDescription("");
    }
  }, [edit, product]);

  const update = (e) => {
    e.preventDefault();

    let updatedProduct = {
      Title,
      categories,
      Model,
      price,
      Description,
    };

    dispatch(updateProduct(product._id, updatedProduct, idUser));
    handleClose();
  };

  const add = (e) => {
    e.preventDefault();

    let newProduct = {
      Title,
      categories,
      Model,
      price,
      Description,
    };

    dispatch(addProduct(newProduct, user.id));
    handleClose();
  };

  return (
    <>
      {edit ? (
        <EditIcon onClick={handleShow} />
      ) : (
        <AddCircleIcon
          onClick={handleShow}
          className="add-icon"
          fontSize="large"
        />
      )}

      <Modal show={show} onHide={handleClose} className="myform">
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit" : "Add"} Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <Form.Control
            type="text"
            placeholder="Brand ..."
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br />
          <Form.Control
            type="text"
            placeholder="Model ..."
            value={Model}
            onChange={(e) => setModel(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Price ..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Desc ..."
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              edit ? update(e) : add(e);
            }}
          >
            {edit ? "Edit" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductForm;
