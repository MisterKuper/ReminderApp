import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { toggleNavbar } from "./store/actions";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

function App() {
  const dispatch = useDispatch();
  const navbar_expanded = useSelector(({ UI }) => {
    return UI.navbar_expanded;
  });
  const [session, setSession] = useState(null);

  useEffect(() => {
    api.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = api.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  if (!session) {
    return <Auth supabaseClient={api} appearance={{ theme: ThemeSupa }} />;
  } else {
    return (
      <div>
        Logged in!
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            dispatch(toggleNavbar());
          }}
        >
          {navbar_expanded ? "EXANDED" : "COLLAPSED"}
        </button>
      </div>
    );
  }
}

export default App;
