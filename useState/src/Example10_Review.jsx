

    import { useState } from "react";

function StarRating() {
  // State to track selected rating (1 to 5)
  const [rating, setRating] = useState(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl mb-4 font-bold">Rate this Product:</h2>

      {/* Stars */}
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-3xl ${
              star <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <p className="mt-4 text-lg text-gray-700">You rated: {rating} star(s)</p>
    </div>
  );
}

export default StarRating;


