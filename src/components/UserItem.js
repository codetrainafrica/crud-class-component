import React from 'react';

function UserItem(props) {
  return (
    <div className="row">
      <div className="col-md-2">{props.user.username}</div>
      <div className="col-md-3">{props.user.email}</div>
      <div className="col-md-2">{props.user.country}</div>
      <div className="col-md-5">
        <button className="btn btn-success">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default UserItem;
