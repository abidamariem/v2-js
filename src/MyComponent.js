import React from 'react';

const MyComponent = (props) => {
 const firstName = props.firstName || 'there';

 return (
    <div className="my-component">
      <h5>Hello, {firstName}!</h5>
    </div>
 );
};

export default MyComponent;