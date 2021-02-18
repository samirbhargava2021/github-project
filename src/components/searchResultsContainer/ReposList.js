import React from "react";
import HorizontalCard from "../horizontalCard/HorizontalCard";
import "./ReposList.scss";

const ReposList = ({ list }) => {
  return (
    <div className="repo-section">
      {
        <>
          {list.map((item, index) => (
            <>
              <HorizontalCard key={index} repo={item.node} />
              <hr />
            </>
          ))}
        </>
      }
    </div>
  );
};

export default ReposList;
