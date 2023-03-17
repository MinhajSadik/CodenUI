import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import imagesPath from '../../../assets/images/imagesPath';
import NextImage from '../../Shared/NextImage/NextImage';

export default function Template({ categories }) {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');

  const handleTags = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault();
      setTags([...tags, event.target.value]);
      event.target.value = '';
    } else if (
      event.key === 'Backspace' &&
      tags.length &&
      event.target.value == 0
    ) {
      const tagsCopy = [...tags];
      tagsCopy.pop();
      event.preventDefault();
      setTags(tagsCopy);
    } else if (tags.length < 1 && event.key === 'Backspace') {
      setError("Since there is no tags you can't able to delete any tags");
    } else if (event.target.value == '' && event.key === 'Enter') {
      setError('The tag should be one character long!');
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  const handleError = () => {
    setError('');
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic form elements</h4>
                <p className="card-description"> Basic form elements </p>
                <div className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail3">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Price"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleSelectGender">Categories</label>
                    <select className="form-control">
                      <option>Choose a Category</option>
                      {categories.map(({ name, id }) => (
                        <option
                          key={id}
                          value={name}
                          onClick={(e) => console.log(e.target.value)}
                        >
                          {name}
                        </option>
                      ))}
                      <option value="">Create One</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Thumbnail upload</label>
                    <input
                      type="file"
                      name=""
                      className="file-upload-default"
                    />
                    <div className="input-group col-xs-12">
                      <input
                        type="text"
                        className="form-control file-upload-info"
                        disabled
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
                    <input
                      type="file"
                      name=""
                      className="file-upload-default"
                    />
                    <div className="input-group col-xs-12">
                      <input
                        type="text"
                        className="form-control file-upload-info"
                        disabled
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
                  <div class="cu_admin_section">
                    <div class="cu_admin_box m-auto">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="cu_admin_file_up_box d-flex align-items-center">
                            <div class="cu_admin_file_up_box_img_text d-flex justify-content-between align-items-center">
                              <NextImage src={imagesPath.Figma} alt="figma" />
                            </div>

                            <div class="d-flex">
                              <div class="cu_admin_select_box">
                                <select
                                  class="cu_admin_select"
                                  name="cars"
                                  id="cars"
                                >
                                  <option class="cu_admin_option" value="volvo">
                                    Figma
                                  </option>
                                  <option class="cu_admin_option" value="saab">
                                    Bootstarp
                                  </option>
                                  <option
                                    class="cu_admin_option"
                                    value="mercedes"
                                  >
                                    Tailwind
                                  </option>
                                  <option class="cu_admin_option" value="audi">
                                    Next JS
                                  </option>
                                </select>
                              </div>

                              <div class="cu_admin_select_box create">
                                <select
                                  class="cu_admin_select"
                                  name="cars"
                                  id="cars"
                                >
                                  <option class="cu_admin_option" value="saab">
                                    ㊉
                                  </option>
                                  <option class="cu_admin_option" value="volvo">
                                    {' '}
                                    Create Tech
                                  </option>
                                  <option class="cu_admin_option" value="saab">
                                    {' '}
                                    Create Category
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div>
                            <input class="cu_admin_input" type="text" />
                            <input class="cu_admin_input" type="text" />
                          </div>
                          <div>
                            <input class="cu_admin_input" type="text" />
                            <a class="cu_admin_submit_btn" href="#">
                              Submit
                            </a>
                          </div>
                        </div>

                        <div class="offset-lg-2 col-lg-4 ">
                          {/* overflow-x:"hidden" overflow-y:"scroll" */}
                          <div
                            style={{
                              height: '200px',
                              overflow: 'scroll',
                              overflowX: 'hidden',
                              overflowY: 'scroll',
                            }}
                          >
                            <div style={{ height: 'auto' }}>
                              <div>
                                <input type="checkbox" name="checkbox" />
                                <label
                                  class="checkbox_label"
                                  htmlFor="checkbox"
                                >
                                  Figma
                                </label>
                              </div>
                            </div>
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
                      onKeyDown={handleTags}
                      onChange={handleError}
                      placeholder="Write some tag and press enter and backspace to delete"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      aria-label="Text input with dropdown button"
                      type="file"
                      className="form-control form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">Overview</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea1"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
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
