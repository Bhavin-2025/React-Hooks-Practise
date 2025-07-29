import { useReducer, useMemo } from "react";

const initialState = {
  math: "",
  english: "",
  physics: "",
  chemistry: "",
  gujarati: "",
};

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export default function GradeCalculator() {
  const [marks, dispatch] = useReducer(reducer, initialState);

  const { total, avg, grade } = useMemo(() => {
    const values = Object.values(marks).map(Number);
    const total = values.reduce((sum, val) => sum + val, 0);
    const avg = total / values.length;

    let grade = "F";
    if (avg >= 90) grade = "A";
    else if (avg >= 75) grade = "B";
    else if (avg >= 50) grade = "C";

    return { total, avg, grade };
  }, [marks]);

  return (
    <div className="p-4 space-y-3">
      <input
        className="border-2 p-1"
        name="math"
        placeholder="Math"
        value={marks.math}
        onChange={(e) => dispatch({ field: "math", value: e.target.value })}
      />
      <input
        className="border-2 p-1"
        name="english"
        placeholder="English"
        value={marks.english}
        onChange={(e) => dispatch({ field: "english", value: e.target.value })}
      />
      <input
        className="border-2 p-1"
        name="physics"
        placeholder="Physics"
        value={marks.physics}
        onChange={(e) => dispatch({ field: "physics", value: e.target.value })}
      />
      <input
        className="border-2 p-1"
        name="chemistry"
        placeholder="Chemistry"
        value={marks.chemistry}
        onChange={(e) =>
          dispatch({ field: "chemistry", value: e.target.value })
        }
      />
      <input
        className="border-2 p-1"
        name="gujarati"
        placeholder="Gujarati"
        value={marks.gujarati}
        onChange={(e) =>
          dispatch({ field: "gujarati", value: e.target.value })
        }
      />

      <div className="mt-4">
        <p>Total Marks: {total}</p>
        <p>Average Marks: {avg.toFixed(2)}</p>
        <p>Grade: {grade}</p>
      </div>
    </div>
  );
}
