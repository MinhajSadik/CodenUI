import React from 'react';
import NextLink from '../../Shared/Link/NextLink';

export default function BillingBasic() {
  return (
    <section class="cu_billing_wrapper">
      <div class="container">
        <div class="col-lg-6 m-auto pt-40">
          <div class="cu_billing_box">
            <h4 class="cu_billing_title">Billing</h4>
            <p class="cu_billing_text">
              Manage your billing & payment details.
            </p>
          </div>
          <div class="cu_billing_details_box text-center">
            <h4 class="cu_billing_details_title">You don't have any plan</h4>
            <NextLink class="cu_Upgrade_now_btn" href="pricing">
              Upgrade now
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
