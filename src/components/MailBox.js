import React from 'react';

function MailBox() {
    const count = 0;
    return (
      <div>
        {count && (
        <h1>
          Messages:
          {' '}
          {count}
        </h1>
)}
      </div>
    );
}

export default MailBox;
