import React from "react";

const Message = (props) => {
    return (
        <div className="ui card">
        <div className="content">
          <div className="header">{props.headerText}</div>
          <div className="description">
            {props.description}
          </div>
        </div>
      </div>
    )
}

export default Message