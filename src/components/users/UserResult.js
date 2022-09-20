import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResult() {
  const { users, isLoading } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-center mx-auto">
        <h3>Loading...</h3>
        <progress className="progress w-56"></progress>
      </div>
    );
  }
}

export default UserResult;
