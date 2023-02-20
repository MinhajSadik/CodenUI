import React from 'react';

export default function Template() {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Basic form elements</h4>
                <p class="card-description"> Basic form elements </p>
                <form class="forms-sample">
                  <div class="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail3">Price</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail3"
                      placeholder="Price"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleSelectGender">Categories</label>
                    <select className="form-control">
                      <option>Choose a Category</option>
                      <option>Coded Template</option>
                      <option>Coded Block</option>
                      <option>Email Template</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Thumbnail upload</label>
                    <input
                      type="file"
                      name="img[]"
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
                      name="img[]"
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
                  <div className="form-group">
                    <label for="exampleInputCity1">Tags</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCity1"
                      placeholder="Tags"
                    />
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        aria-label="Text input with dropdown button"
                        type="text"
                        class="form-control form-control"
                      />
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-sm btn-outline-primary dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div class="">
                          <div class="form-group">
                            <div class="form-check">
                              <input type="checkbox" name="" id="" />
                              Figma
                            </div>
                            <div class="form-check">
                              <input type="checkbox" name="" id="" />
                              Tailwind
                            </div>
                            <div class="form-check">
                              <input type="checkbox" name="" id="" />
                              Bootstrap
                            </div>
                            <div class="form-check">
                              <input type="checkbox" name="" id="" />
                              Css
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="exampleTextarea1">Overview</label>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container-fluid d-flex justify-content-between">
          <span class="text-muted d-block text-center text-sm-start d-sm-inline-block">
            Coden UI - All Right Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
