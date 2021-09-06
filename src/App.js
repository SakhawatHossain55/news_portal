import { createContext } from "react";
import { useState } from "react";
import AppRouter from './AppRouter';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <AppRouter />
      </UserContext.Provider>
    </div>
  );
}

export default App;

// name=newsPortal
// pass=7NJxplU4JLQvUdPq
// user=newsPortal