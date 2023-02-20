import React from 'react';

export default function Template() {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          {/* <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Default form</h4>
                <p class="card-description"> Basic form layout </p>
                <form class="forms-sample">
                  <div class="form-group">
                    <label for="exampleInputUsername1">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputUsername1"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputConfirmPassword1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputConfirmPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-check form-check-flat form-check-primary">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" />{' '}
                      Remember me{' '}
                    </label>
                  </div>
                  <button type="submit" class="btn btn-gradient-primary me-2">
                    Submit
                  </button>
                  <button class="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Horizontal Form</h4>
                <p class="card-description"> Horizontal form layout </p>
                <form class="forms-sample">
                  <div class="form-group row">
                    <label
                      for="exampleInputUsername2"
                      class="col-sm-3 col-form-label"
                    >
                      Email
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputUsername2"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputEmail2"
                      class="col-sm-3 col-form-label"
                    >
                      Email
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail2"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputMobile"
                      class="col-sm-3 col-form-label"
                    >
                      Mobile
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputMobile"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputPassword2"
                      class="col-sm-3 col-form-label"
                    >
                      Password
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword2"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputConfirmPassword2"
                      class="col-sm-3 col-form-label"
                    >
                      Re Password
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputConfirmPassword2"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="form-check form-check-flat form-check-primary">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" />{' '}
                      Remember me{' '}
                    </label>
                  </div>
                  <button type="submit" class="btn btn-gradient-primary me-2">
                    Submit
                  </button>
                  <button class="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div> */}
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
          {/* <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Input size</h4>
                <p className="card-description">
                  {' '}
                  Add classNamees like <code>.form-control-lg</code> and{' '}
                  <code>.form-control-sm</code>.{' '}
                </p>
                <div className="form-group">
                  <label>Large input</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
                <div className="form-group">
                  <label>Default input</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
                <div className="form-group">
                  <label>Small input</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Select size</h4>
                <p className="card-description">
                  {' '}
                  Add classNamees like <code>.form-control-lg</code> and{' '}
                  <code>.form-control-sm</code>.{' '}
                </p>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Large select</label>
                  <select
                    className="form-control form-control-lg"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect2">Default select</label>
                  <select className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect3">Small select</label>
                  <select
                    className="form-control form-control-sm"
                    id="exampleFormControlSelect3"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic input groups</h4>
                <p className="card-description"> Basic bootstrap input groups </p>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-gradient-primary text-white">
                        $
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <div className="input-group-prepend">
                      <span className="input-group-text">0.00</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-sm btn-gradient-primary"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-sm btn-outline-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div role="separator" class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with dropdown button"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Find in facebook"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-sm btn-facebook" type="button">
                        <i class="mdi mdi-facebook"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Checkbox Controls</h4>
                <p class="card-description">
                  Checkbox and radio controls (default appearance is in primary
                  color)
                </p>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />{' '}
                            Default{' '}
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked
                            />{' '}
                            Checked{' '}
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              disabled
                            />{' '}
                            Disabled{' '}
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              disabled
                              checked
                            />{' '}
                            Disabled checked{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="optionsRadios"
                              id="optionsRadios1"
                              value=""
                            />{' '}
                            Default{' '}
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="optionsRadios"
                              id="optionsRadios2"
                              value="option2"
                              checked
                            />{' '}
                            Selected{' '}
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="optionsRadios2"
                              id="optionsRadios3"
                              value="option3"
                              disabled
                            />{' '}
                            Disabled{' '}
                          </label>
                        </div>
                        <div class="form-check">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="optionsRadio2"
                              id="optionsRadios4"
                              value="option4"
                              disabled
                              checked
                            />{' '}
                            Selected and disabled{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-body">
                <p class="card-description">
                  Add class for checkbox and radio controls in theme colors
                </p>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="form-check form-check-primary">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked
                            />{' '}
                            Primary{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-success">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked
                            />{' '}
                            Success{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-info">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked
                            />{' '}
                            Info{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-danger">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked
                            />{' '}
                            Danger{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-warning">
                          <label class="form-check-label">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked
                            />{' '}
                            Warning{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <div class="form-check form-check-primary">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="ExampleRadio1"
                              id="ExampleRadio1"
                              checked
                            />{' '}
                            Primary{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-success">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="ExampleRadio2"
                              id="ExampleRadio2"
                              checked
                            />{' '}
                            Success{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-info">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="ExampleRadio3"
                              id="ExampleRadio3"
                              checked
                            />{' '}
                            Info{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-danger">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="ExampleRadio4"
                              id="ExampleRadio4"
                              checked
                            />{' '}
                            Danger{' '}
                          </label>
                        </div>
                        <div class="form-check form-check-warning">
                          <label class="form-check-label">
                            <input
                              type="radio"
                              class="form-check-input"
                              name="ExampleRadio5"
                              id="ExampleRadio5"
                              checked
                            />{' '}
                            Warning{' '}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Inline forms</h4>
                <p class="card-description">
                  {' '}
                  Use the <code>.form-inline</code> class to display a series of
                  labels, form controls, and buttons on a single horizontal row{' '}
                </p>
                <form class="form-inline">
                  <label class="sr-only" for="inlineFormInputName2">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Jane Doe"
                  />
                  <label class="sr-only" for="inlineFormInputGroupUsername2">
                    Username
                  </label>
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-check mx-sm-2">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" checked />{' '}
                      Remember me{' '}
                    </label>
                  </div>
                  <button type="submit" class="btn btn-gradient-primary mb-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Horizontal Two column</h4>
                <form class="form-sample">
                  <p class="card-description"> Personal info </p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">
                          First Name
                        </label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Last Name</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Gender</label>
                        <div class="col-sm-9">
                          <select class="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">
                          Date of Birth
                        </label>
                        <div class="col-sm-9">
                          <input
                            class="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Category</label>
                        <div class="col-sm-9">
                          <select class="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">
                          Membership
                        </label>
                        <div class="col-sm-4">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="membershipRadios"
                                id="membershipRadios1"
                                value=""
                                checked
                              />{' '}
                              Free{' '}
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="membershipRadios"
                                id="membershipRadios2"
                                value="option2"
                              />{' '}
                              Professional{' '}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="card-description"> Address </p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Address 1</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">State</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Address 2</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Postcode</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">City</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Country</label>
                        <div class="col-sm-9">
                          <select class="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
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
