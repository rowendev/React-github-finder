import { FaCode, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import RepoList from "../components/repos/RepoList";
import CountUp from "react-countup";

function User() {
  const { getUser, user, isLoading, getUserRepos, repos } =
    useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  console.log();
  if (isLoading) {
    return (
      <div className="text-center mx-auto">
        <h3>Loading...</h3>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            back to search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>

              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title mb-4">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rouded-lg shadow-xl bg-slate-300 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md text-black">Location</div>
                  <div className="text-lg stat-value text-black">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md text-black">Blog</div>
                  <div className="text-lg stat-value text-black">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-600"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md text-black">Twitter</div>
                  <div className="text-lg stat-value text-black">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-600"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-gray-600 stats">
          <div className="stat">
            <div className="stat-figure text--zinc-500">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 pt-1 text-3xl md:text-4xl">
              {/* <p className="text-slate-50">{followers}</p> */}
              <CountUp
                end={followers > 1000 ? parseInt(followers / 1000) : followers}
                duration={2}
                className="text-slate-50"
              />
              <p
                className="text-slate-50"
                style={{ fontSize: "1.5rem", display: "inline-block" }}
              >
                {" "}
                K+
              </p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text--zinc-500">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl ">
              {/* <p className="text-slate-50">{following}</p> */}
              <CountUp end={following} duration={2} className="text-slate-50" />
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text--zinc-500">
              <FaCode className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {/* <p className="text-slate-50">{public_repos}</p> */}
              <CountUp
                end={public_repos}
                duration={2}
                className="text-slate-50"
              />
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text--zinc-500">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {/* <p className="text-slate-50">{public_gists}</p> */}
              <CountUp
                end={public_gists}
                duration={2}
                className="text-slate-50"
              />
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
