import React, { useState } from "react";

interface Props {
  getUser: Function;
}

const SearchBox: React.FC<Props> = ({ getUser }) => {
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col">
      <span>Digite o nome de um usuario</span>
      <input
        className="outline-none text-gray-800 py-2 px-4"
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <button
        onClick={() => getUser(username)}
        className="border rounded-lg border-zinc-200 text-zinc-200 py-2 px-4"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
