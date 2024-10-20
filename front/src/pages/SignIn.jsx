import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (click) => {
    click.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Echec de la connexion. Verifier vos informations");
      }

      const data = await response.json();

      const token = data.body.token;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      console.log("Connexion reussie :", data);

      navigate("/profile");

      setEmail("");
      setPassword("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(text) => setEmail(text.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(text) => setPassword(text.target.value)}
                required
              />
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(box) => setRememberMe(box.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Connexion..." : "Connect"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
