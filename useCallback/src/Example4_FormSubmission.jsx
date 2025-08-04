import React, { useState, useCallback } from "react";

const SubmitButton = React.memo(({ onSubmit }) => {
  console.log(" SubmitButton Rendered");

  return (
    <button
      onClick={onSubmit}
      className="!bg-green-600 text-white px-4 py-2 rounded"
    >
      Submit Feedback
    </button>
  );
});

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");

  // ✅ useCallback to prevent recreation on every render
  const handleSubmit = useCallback(() => {
    if (feedback.trim() === "") {
      setStatus(" Feedback is empty");
    } else {
      setStatus(" Feedback submitted: " + feedback);
      setFeedback(""); // Clear input after submit
    }
  }, [feedback]);

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-semibold">📝 Give Your Feedback</h2>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full border px-3 py-2 rounded"
        rows={4}
      />

      {/* Pass memoized handler to memoized component */}
      <SubmitButton onSubmit={handleSubmit} />

      {status && <p className="mt-2 text-blue-600">{status}</p>}
    </div>
  );
}

export default FeedbackForm;
