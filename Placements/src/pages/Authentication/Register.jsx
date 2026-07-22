import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const userData = {
        name,
        email,
        password,
        role
      };

      const response = await api.post("/auth/register", userData);

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");
      setRole("student");

      navigate("/login");
    } catch (error) {
      const message =
        error.response?.data?.message || "Registration failed";

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>User Register</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;