import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import imagesPath from '../../../assets/images/imagesPath';
import NextImage from '../../Shared/NextImage/NextImage';

export default function Template({ categories }) {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');
  const [file, setFile] = useState('');

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
                  <div></div>
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
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => {
                          const form = new FileReader();
                          form.readAsDataURL(e.target.files[0]);
                          console.log({ form, file });
                          form.onloadend = () => {
                            setFile(form);
                          };
                          console.log({ form, file });
                        }}
                        className="form-control file-upload-info"
                        placeholder="Upload Image"
                        multiple
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
                            <div className="cu_admin_file_up_box_img_text d-flex justify-content-between align-items-center">
                              <NextImage src={imagesPath.Figma} alt="figma" />
                            </div>

                            <div className="d-flex">
                              <div className="cu_admin_select_box">
                                <select
                                  className="cu_admin_select"
                                  name="cars"
                                  id="cars"
                                >
                                  <option
                                    className="cu_admin_option"
                                    value="volvo"
                                  >
                                    Figma
                                  </option>
                                  <option
                                    className="cu_admin_option"
                                    value="saab"
                                  >
                                    Bootstarp
                                  </option>
                                  <option
                                    className="cu_admin_option"
                                    value="mercedes"
                                  >
                                    Tailwind
                                  </option>
                                  <option
                                    className="cu_admin_option"
                                    value="audi"
                                  >
                                    Next JS
                                  </option>
                                </select>
                              </div>

                              <div className="cu_admin_select_box create">
                                <select
                                  className="cu_admin_select"
                                  name=""
                                  id=""
                                >
                                  <option className="cu_admin_option" value="">
                                    ㊉
                                  </option>
                                  <option className="cu_admin_option" value="">
                                    Create Tech
                                  </option>
                                  <option className="cu_admin_option" value="">
                                    Create Category
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex">
                            <input className="cu_admin_input" type="text" />
                            <input className="cu_admin_input" type="text" />
                          </div>
                          <div className="d-flex">
                            <input
                              className="cu_admin_input_bottom"
                              type="file"
                            />
                            <a className="cu_admin_submit_btn" href="#">
                              Submit
                            </a>
                          </div>
                        </div>

                        <div className="offset-lg-2 col-lg-4 ">
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
                              <div className="cu_admin_options d-flex align-items-center">
                                <input type="checkbox" name="checkbox" />
                                <label
                                  className="checkbox_label"
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
