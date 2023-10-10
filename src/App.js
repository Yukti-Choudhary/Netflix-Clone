import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Browse, Home, Search, SignIn, SignUp } from "./pages";
import useAuthState from "./hooks/useAuthState";
import { ProtectedRoutes, IsUserRedirect } from "./utils/protectedRoutes";

function App() {
  const user = useAuthState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes user={user} />}>
            <Route exact path="/browse" element={<Browse />} />
            <Route exact path="/search" element={<Search />} />
          </Route>

          <Route element={<IsUserRedirect user={user} />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signIn" element={<SignIn />} />
            <Route exact path="/signUp" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
