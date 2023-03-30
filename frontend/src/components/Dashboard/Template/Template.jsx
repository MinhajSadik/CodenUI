import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../../redux/feature/productSlice';
import { productInitState } from '../../../utils/initialStates';

export default function Template({ categories, teches }) {
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState(productInitState);
  const { name, price, description } = productInfo;
  const [tags, setTags] = useState([]);
  const [techIds, setTechIds] = useState([]);
  const [selectedTech, setSelectedTech] = useState('');
  const [techOpen, setTechOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  function captureProductInfo(e) {
    const { name, value } = e.target;
    setProductInfo({
      ...productInfo,
      [name]: value,
    });
  }

  function captureImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProductInfo({
        ...productInfo,
        [e.target.name]: reader.result,
      });
    };
  }

  function handleTags(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      e.target.value = '';
    } else if (e.key === 'Backspace' && tags.length && e.target.value === 0) {
      const tagsCopy = [...tags];
      tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
    }
  }

  function handleTechIds(e) {
    if (e.target.checked) {
      setTechIds([...techIds, e.target.value]);
    } else {
      setTechIds([...techIds.filter((id) => id !== e.target.value)]);
    }
  }

  function handleSelectedTech(e) {
    setSelectedTech(e.target.value);
  }

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  function handleProductSubmit(e) {
    setProductInfo({
      ...productInfo,
      tags: tags,
    });
    dispatch(createProduct(productInfo));
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={captureProductInfo}
                      className="form-control"
                      placeholder="Enter uniqe product name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail3">Price</label>
                    <input
                      id="price"
                      type="text"
                      name="price"
                      value={price}
                      onChange={captureProductInfo}
                      className="form-control"
                      placeholder="Enter a price either text or a number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleSelectGender">Categories</label>
                    <select className="form-control">
                      <option>Choose a Category</option>
                      {categories.map(({ name, id }) => (
                        <option
                          key={id}
                          onClick={(e) => {
                            setProductInfo({
                              ...productInfo,
                              categoryId: id,
                              categoryName: e.target.value,
                            });
                          }}
                        >
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Thumbnail upload</label>
                    <div className="input-group col-xs-12">
                      <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        accept="image/*"
                        onChange={captureImage}
                        className="form-control file-upload-info"
                        placeholder="Upload Thumbnail"
                      />
                      <span className="input-group-append">
                        <button
                          className="file-upload-browse btn btn-gradient-primary"
                          type="button"
                        >
                          Upload
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Image upload</label>
                    <div className="input-group col-xs-12">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={captureImage}
                        className="form-control file-upload-info"
                        placeholder="Upload Image"
                      />
                      <span className="input-group-append">
                        <button
                          className="file-upload-browse btn btn-gradient-primary"
                          type="button"
                        >
                          Upload
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="cu_admin_section">
                    <div className="cu_admin_box">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="cu_admin_file_up_box d-flex align-items-center">
                            <div className="d-flex">
                              {teches.map(({ logo, _id }) => (
                                <div
                                  key={_id}
                                  className="cu_admin_file_up_box_img_text d-flex justify-content-between align-items-center"
                                >
                                  {selectedTech === _id && (
                                    <img
                                      width="50px"
                                      height="50px"
                                      src={logo}
                                      alt="img"
                                    />
                                  )}
                                </div>
                              ))}
                              <div className="cu_admin_select_box">
                                <select className="cu_admin_select">
                                  <option value="">Select</option>
                                  {teches.map(({ name, _id }) => (
                                    <option
                                      key={_id}
                                      className="cu_admin_option"
                                      value={_id}
                                      onClick={handleSelectedTech}
                                    >
                                      {name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="cu_admin_select_box create">
                                <select className="cu_admin_select">
                                  <option
                                    className="cu_admin_option"
                                    onClick={() => {
                                      setTechOpen(false);
                                      setCategoryOpen(false);
                                    }}
                                    value=""
                                    selected
                                  >
                                    ㊉
                                  </option>
                                  <option
                                    id="techOpen"
                                    name="techOpen"
                                    value="techOpen"
                                    className="cu_admin_option"
                                    onClick={() => setTechOpen(true)}
                                  >
                                    Create Tech
                                  </option>
                                  <option
                                    id="categoryOpen"
                                    name="categoryOpen"
                                    value="categoryOpen"
                                    className="cu_admin_option"
                                    onClick={() => setCategoryOpen(true)}
                                  >
                                    Create Category
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          {techOpen && (
                            <div className="d-flex">
                              <input className="cu_admin_input" type="text" />
                              <input className="cu_admin_input" type="file" />
                            </div>
                          )}
                          <div className="d-flex">
                            {!techOpen && categoryOpen ? (
                              <input
                                className="cu_admin_input_bottom"
                                type="text"
                              />
                            ) : (
                              <input
                                className="cu_admin_input_bottom"
                                type="file"
                                onChange={captureImage}
                              />
                            )}
                            <a className="cu_admin_submit_btn" href="#">
                              Submit
                            </a>
                          </div>
                        </div>

                        <div className="offset-lg-2 col-lg-4 ">
                          <div
                            style={{
                              height: '200px',
                              overflow: 'scroll',
                              overflowX: 'hidden',
                              overflowY: 'scroll',
                            }}
                          >
                            <ul style={{ height: 'auto' }}>
                              {teches?.map((tech) => (
                                <li
                                  key={tech._id}
                                  className="cu_admin_options d-flex align-items-center"
                                >
                                  <label>{tech.name}</label>
                                  <input
                                    id={tech?.name}
                                    name={tech?.name}
                                    value={tech._id}
                                    checked={tech.file}
                                    onChange={handleTechIds}
                                    type="checkbox"
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tags">
                    {tags.map((tag, index) => (
                      <div className="single-tag" key={index}>
                        <span>{tag}</span>
                        <i onClick={() => removeTags(index)}>
                          <MdClose />
                        </i>
                      </div>
                    ))}
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      onKeyDown={handleTags}
                      placeholder="Write some tag and press enter and backspace to delete"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">Overview</label>
                    <textarea
                      id="description"
                      type="textarea"
                      name="description"
                      value={description}
                      onChange={captureProductInfo}
                      className="form-control"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    onClick={handleProductSubmit}
                    className="btn btn-gradient-primary me-2"
                  >
                    Submit
                  </button>
                  <button className="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid d-flex justify-content-between">
          <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">
            Coden UI - All Right Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
