import React from 'react';
import { withRouter } from '../../../components';
import NextLink from '../../Shared/NextLink/NextLink';

function BillingBasic() {
  return (
    <section className="cu_billing_wrapper">
      <div className="container">
        <div className="col-lg-6 m-auto pt-40">
          <div className="cu_billing_box">
            <h4 className="cu_billing_title">Billing</h4>
            <p className="cu_billing_text">
              Manage your billing & payment details.
            </p>
          </div>
          <div className="cu_billing_details_box text-center">
            <h4 className="cu_billing_details_title">
              You don't have any plan
            </h4>
            <NextLink className="cu_Upgrade_now_btn" href="pricing">
              Upgrade now
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(BillingBasic);
