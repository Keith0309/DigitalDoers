import React, { useState, useRef } from "react";
import "./AdminPanel.css";
import axios from "axios";

const AdminPanel = () => {
  const initialFormState = {
    product_name: "",
    description: "",
    category: "",
    price: "",
    stocks: "",
  };
  const [file, setFile] = useState();
  const [values, setValues] = useState(initialFormState);
  const formRef = useRef(null);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formdata = new FormData();
    formdata.append("file", file);

    // Append the values to the FormData object
    Object.keys(values).forEach((key) => {
      formdata.append(key, values[key]);
    });

    axios
      .post("http://localhost:3001/addproduct", formdata)
      .then((res) => {
        alert("Successfully Added a Product")
      })
      .catch((err) => console.log(err));

    setValues(initialFormState);
    setFile(null);
    formRef.current.reset();
  };

  return (
    <div>
      <div className="m-3">
        <h1>Admin Panel</h1>
      </div>

      <div className="d-flex justify-content-center">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div class="mb-3 admin_input">
            <label for="formFileMultiple" class="form-label">
              {" "}
              Upload Product Image/s:{" "}
            </label>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <div className="admin_input">
            <label for="product_name" class="form-label">
              {" "}
              Product Name:{" "}
            </label>
            <input
              class="form-control"
              type="text"
              name="product_name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin_input">
            <label for="description" class="form-label">
              {" "}
              Description:{" "}
            </label>
            <input
              class="form-control"
              type="text"
              name="description"
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin_input">
            <label for="category" class="form-label">
              {" "}
              Category:{" "}
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="category"
              value={values.category}
              onChange={handleChange}
              required
            >
              <option value=""> Select category </option>
              <option value="Anti-depressants">Anti-depressants</option>
              <option value="Cold Remedies">Cold Remedies</option>
              <option value="Multivitamins">Multivitamins</option>
            </select>
          </div>

          <div className="admin_input">
            <label for="price" class="form-label">
              {" "}
              Price:{" "}
            </label>
            <input
              class="form-control"
              type="number"
              name="price"
              step="0.01"
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin_input">
            <label for="stocks" class="form-label">
              {" "}
              Inventory:{" "}
            </label>
            <input
              class="form-control"
              type="number"
              name="stocks"
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin_submit">
            <button type="submit" class="btn btn-primary">
              {" "}
              Upload Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
