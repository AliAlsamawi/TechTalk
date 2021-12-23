import React from 'react'


const UserCard = (props) => {
  return (
    <div className="user-card">
      <img src={props.profile.avatar} alt="user animal avatar" />
      <div className="user-info">
        <h4>
          {props.profile.name}
        </h4>
      </div>
    </div>
  )
}

export default UserCard