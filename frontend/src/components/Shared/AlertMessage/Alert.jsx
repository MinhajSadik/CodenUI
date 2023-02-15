import React from 'react';

export default function Alert({ error, success }) {
  return (
    <div className="container">
      <div className="col-lg-6 col-md-8 m-auto text-center">
        <div
          className={
            error
              ? 'cu_reached_your_daily_limit_message_box'
              : 'cu_success_updated_message_box'
          }
        >
          <h3 className="cu_reached_your_daily_limit_message_text">
            {error || success}
          </h3>
        </div>
      </div>
    </div>
  );
}
