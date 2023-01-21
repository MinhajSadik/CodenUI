import React from 'react'

export default function ChckoutBeforeLogin() {
    return (
        <section>
            <div class="cu_checkout_page_wrapper">
                <div class="container pt-60">
                    <a href="#" class="cu_back_btn"> <img class="cu_top_left_arrow_icon" src="./assets/img/icon/left-arrow.svg" alt="left-arrow.svg"> Back</a>

                    <div class="text-center cu_checkout_page_logo">
                      <img  class="m-auto" src="./assets/img/logo/logo-Coden-UI.svg" alt="">
                  </div>

                    
                    <div class="col-lg-6 m-auto pt-106">
                        <p class="cu_order_details_title">Order Details</p>
                        <div class="cu_product_details_box">
                            <div class="d-flex justify-content-between">
                                <p class="cu_product_details">Plan Name</p>
                                <p class="cu_product_details">Item Price</p>

                            </div>

                            <div class="d-flex justify-content-between align-items-center mt-20">
                                <p class="cu_product_name"><img class="cu_product_icon" src="./assets/img/icon/Crown.svg" alt="">Coden UI Yearly</p>
                                <p class="cu_product_price">$99 USD</p>

                            </div>
                        </div>
                        <p class="cu_personal_info_title">Personal Information</p>
                        <div class="cu_personal_info_box">
                            <form class="row g-3">

                                <div class="col-md-6">
                                  <label for="name" class="form-label">Name</label>
                                  <input type="text" class="form-control" id="" placeholder="Enter your name">
                                </div>

                                <div class="col-md-6">
                                  <label for="email" class="form-label">Email</label>
                                  <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your email">
                                </div>
                                <div class="col-md-6">
                                  <label for="password" class="form-label">Password</label>
                                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                </div>

                                <div class="col-md-6">
                                  <label for="password" class="form-label">Confirm Password</label>
                                  <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password">
                                </div>
                               

                              </form>


                        </div><!--cu_personal_info_box-->
                        <form class="row g-3 mt-20">
                          <p class="cu_form_msg_text">Already have an account? <a class="color-red">Sign in</a> </p>

                          <div class="col-12">
                            <button type="submit" class="cu_checkout_btn w-100">Confirm & Pay</button>
                          </div>
                        </form>



                    </div>
                </div>
            </div>
        </section>
    )
}
