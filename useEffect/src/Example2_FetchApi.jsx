import { useState, useEffect } from "react";

function FetchApi() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  setLoading(true);
  setError(null);

  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data); // ✅ This should show full API data
      setUser(data.results[0]);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);


  return (
    <div>
      <h1>Random User Info</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <img src={user.picture.medium} alt="user" />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>Email: {user.email}</p>
          <p>
            Location: {user.location.city}, {user.location.country}
          </p>
        </div>
      )}
    </div>
  );
}

export default FetchApi;
