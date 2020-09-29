import React from "react";
import LogListItem from "./LogListItemComponent";

function LogList(props) {
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
