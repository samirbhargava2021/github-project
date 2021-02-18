import React from "react";
import "./HorizontalCard.scss";

const HorizontalCard = ({ repo }) => {
  return (
    <div className="repo-unit">
      <div className='repo-unit__left-section'>
        <img className="avatar" src={repo.owner.avatarUrl} alt="avatar"/>
        <div className="repo-unit__header__owner">{repo.owner.login}</div>
      </div>
      <div className='repo-unit__right-section'>
        <div className="repo-unit__top-section">
          <a
            href={repo.url}
            target="_blank"
            className="repo-unit__header__repo-name"
          >
            {repo.name}
          </a>
          
            <div className="repo-unit__top-section__stars-count">
              <p>&#11088; {repo.stargazerCount}</p>
            </div>
        </div>
        <div className="repo-unit__content">
          <p>{repo.description}</p>
        </div>
        <div className="repo-unit__languages">
          {repo?.languages.nodes && repo.languages.nodes.map((lang, index)=>{
            return <span key={index}>{lang.name}</span>
            })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;