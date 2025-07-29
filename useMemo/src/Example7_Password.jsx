import { useState, useMemo } from "react";

export default function PasswordStrength() {
  const [password, setPassword] = useState("");
  const strength = useMemo(() => {
    console.log("🔄 Recalculating password strength...");
    if (password.length === 0) return "";

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";

        return "Strong";
    
  }, [password]);


  return (
    <div>
      <h2>Password Strength checker</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", width: "100%" }}
      />

      {password && (
        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
          Strength:{" "}
          <span
            style={{
              color:
                strength === "Strong"
                  ? "green"
                  : strength === "Medium"
                  ? "orange"
                  : "red",
            }}
          >
            {strength}
          </span>
        </p>
      )}
    </div>
  );
}
