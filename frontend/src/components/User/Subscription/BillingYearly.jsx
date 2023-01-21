import React from 'react';
import NextLink from '../../Shared/Link/NextLink';

export default function BillingYearly() {
  return (
    <section class="cu_billing_paid_wrapper">
      <div class="container">
        <div class="col-lg-6 m-auto pt-40">
          <div class="cu_billing_paid_box">
            <h4 class="cu_billing__paid_title">Billing</h4>
            <p class="cu_billing_paid_text">
              Manage your billing & payment details.
            </p>
          </div>
          <div class="cu_billing_paid_details_box">
            <h4 class="cu_billing_paid_details_title pb-10">Yearly Plan</h4>
            <p class="cu_billing_paid_details_text">
              You are now on yearly plan. To enjoy more, upgrade your plan.
            </p>
            <h3 class="cu_billing_paid_price">
              $99
              <span class="cu_billing_paid_price_span">/Billed Yearly</span>
            </h3>
            <p class="cu_billing_paid_date">Billing Issue date: 15 Jan 2023</p>

            <div class="cu_billing_paid_details_box_bottom d-flex justify-content-between align-items-center mt-30">
              <p class="cu_billing_paid_next_date">Next Billing 15 Jan 2024</p>
              <NextLink class="cu_billing_cancel_sub_btn" href="">
                Cancel Subscription
              </NextLink>
              <NextLink class="cu_change_plan_btn" href="">
                Change Plan
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
