import React from 'react';

export default function Notify({ notification, error }) {
  return (
    <div className="container top-right">
      <div className="col-lg-6 col-md-8 m-auto text-center">
        <div
          className={error ? 'cu_error_message_box' : 'cu_success_message_box'}
        >
          <h3
            className={
              error ? 'cu_error_message_text' : 'cu_success_message_text'
            }
          >
            {notification}
          </h3>
        </div>
      </div>
    </div>
  );
}
