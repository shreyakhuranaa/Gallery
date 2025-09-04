import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  getSingleImage,
  deleteCategory,
} from "../redux/reducers/gallerySlice";
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, [dispatch]);

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    setSelectedCategoryId(id);
    dispatch(getSingleImage(id));
  };

  const handleDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
    setSelectedCategoryId(null);
  };

  const resetCategory = () => {
    setSelectedCategoryId(null);
    dispatch(getAllImages());
  };

  const filteredImages = selectedCategoryId
    ? images.filter((image) => image.category === selectedCategoryId)
    : images;

  return (
    <div className="container my-3">
      <div className="row">
        <div className="category-buttons" align="center">
          <button
            onClick={resetCategory}
            className={`btn filter-button ${!selectedCategoryId ? "btn-primary" : "btn-default"}`}
            data-filter="all"
          >
            All
          </button>

          {categories &&
            categories.map((item) => (
              <div key={item._id} className="category-item">
                <button
                  onClick={() => handleCategories(item._id)}
                  className={`btn filter-button border mx-2 ${selectedCategoryId === item._id ? "btn-primary" : "btn-default"}`}
                  data-filter="hdpe"
                >
                  {item.name}
                </button>
                <button
                  onClick={() => handleDeleteCategory(item._id)}
                  className="btn btn-danger mx-1 delete-button"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>

        <br />

        <div className="row">
          {filteredImages &&
            filteredImages.map((item) => (
              <div
                key={item._id}
                className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4"
              >
                <img
                  src={`http://localhost:8000/${item.name}`}
                  className="img img-responsive"
                  height="300px"
                  width="300px"
                  alt={item.name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
