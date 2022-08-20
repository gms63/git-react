import { useEffect, useState } from "react";
import SearchBox from "./components/searchBox";
import ShowUser from "./components/showUser";
import { api } from "./libs/api";

function App() {
  const [user, setUser] = useState({});
  const [hasUser, setHasUser] = useState(false);

  const getUser = (username: any) => {
    api.get(`/users/${username}`).then((res) => {
      setUser(res.data);
      setHasUser(true);
      console.log(user);
    });
  };

  return (
    <div className="h-screen w-screen bg-zinc-800 text-zinc-200 flex justify-center items-center overflow-hidden">
      {hasUser ? <ShowUser user={user} /> : <SearchBox getUser={getUser} />}
    </div>
  );
}

export default App;
