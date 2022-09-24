import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  const { ref: myRef, inView: isElementVisible } = useInView();
  return (
    <div
      className={`${"animate__animated"} ${"animate-fast"} ${
        isElementVisible ? "animate__fadeInLeft" : null
      }`}
    >
      <div
        className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 gap-0"
        ref={myRef}
      >
        <div className="card-body">
          <h2 className="mb-2 text-xl font-semibold hover:underline">
            <a href={html_url} rel="noreferrer" target="_blank">
              <FaLink className="inline mr-1 " /> {name}
            </a>
          </h2>
          <p className="mb-3 text-lime-400">{description}</p>
          <div>
            <div className="mr-2 badge badge-info badge-m ">
              <FaEye className="mr-2" /> {watchers_count}
            </div>
            <div className="mr-2 badge badge-succes badge-m ">
              <FaStar className="mr-2" /> {stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-m ">
              <FaInfo className="mr-2" /> {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-m ">
              <FaUtensils className="mr-2" /> {forks}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
