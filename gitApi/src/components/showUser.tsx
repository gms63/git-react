import React from "react";

interface Props {
  user: any;
}

const ShowUser: React.FC<Props> = ({ user }) => {
  console.log(user);
  return (
    <div className="border rounded-lg border-zinc-200 w-96 h-96">
      <img src={user.avatar_url} alt="" />
      <span>{user.name}</span>
    </div>
  );
};

export default ShowUser;
