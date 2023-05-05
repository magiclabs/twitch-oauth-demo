import { magic } from "../lib/magic";
import { FaTwitch } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "twitch",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic Auth + Twitch</h1>
      <button onClick={handleSocialLogin}>
        <FaTwitch size={"2.5rem"} />
        Log in with Twitch
      </button>
    </div>
  );
};

export default Login;
