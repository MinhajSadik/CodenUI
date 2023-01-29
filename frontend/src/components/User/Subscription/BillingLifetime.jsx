import React from 'react';

export default function BillingLifetime() {
  return (
    <section className="cu_billing_paid_lifetime_wrapper">
      <div className="container">
        <div className="col-lg-6 m-auto pt-40">
          <div className="cu_billing_paid_lifetime_box">
            <h4 className="cu_billing__paid_lifetime_title">Billing</h4>
            <p className="cu_billing_paid_lifetime_text">
              Manage your billing & payment details.
            </p>
          </div>
          <div className="cu_billing_paid_lifetime_details_box">
            <h4 className="cu_billing_paid_lifetime_details_title pb-10">
              Lifetime Plan
            </h4>
            <p className="cu_billing_paid_lifetime_details_text">
              You are now on lifetime plan. To enjoy more, upgrade your plan.
            </p>
            <h3 className="cu_billing_paid_lifetime_price">
              $99
              <span className="cu_billing_paid_lifetime_price_span">
                /Billed Lifetime
              </span>
            </h3>
            <p className="cu_billing_paid_lifetime_date">
              Billing Issue date: 15 Jan 2023
            </p>

            <p className="cu_billing_paid_never_e pt-40">Never Expired🔥</p>
          </div>
        </div>
      </div>
    </section>
  );
}
