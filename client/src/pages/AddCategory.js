import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNewCategory } from "../redux/reducers/gallerySlice";
import './AddCategory.css';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewCategory({ name: categoryName }));
    setCategoryName("");
    navigate("/");
  };

  return (
    <div className="add-category-container">
      <div align="center">
        <form className="add-category-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name:</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="form-control"
              id="categoryName"
              placeholder="Enter category name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Add Category
          </button>
        </form>
        <button
          className="btn btn-secondary back-home-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
