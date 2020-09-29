import React from "react";
import LogListItem from "./LogListItemComponent";

function LogList(props) {
  if (props.log.length < 1) {
    return null;
  } else
    return (
      <div className="log-list">
        {props.log.map((dive) => {
          return (
            <LogListItem
              key={dive._id}
              dive={dive}
              openDetails={(dive) => props.openDetails(dive)}
            />
          );
        })}
      </div>
    );
}

export default LogList;
