import { useState, useMemo } from "react";

export default function AttendanceTracker() {
  const [list, setList] = useState([
    { id: 1, name: "Bhavin", present: false },
    { id: 2, name: "Abhinn", present: false },
    { id: 3, name: "Kevin", present: false },
    { id: 4, name: "Alex", present: false },
  ]);

  
  const presentCount = useMemo(() => {
    return list.filter((student) => student.present).length;
  }, [list]);

  return (
    <div>
      <h1>Student Attendance Tracker</h1>

      {list.map((student) => (
        <div key={student.id} style={{ marginBottom: "10px" }}>
          <strong>{student.name}</strong> —{" "}
          {student.present ? " Present" : " Absent"}

          <button
            onClick={() => {
              const updatedList = list.map((s) =>
                s.id === student.id ? { ...s, present: !s.present } : s
              );
              setList(updatedList);
            }}
            style={{ marginLeft: "10px" }}
          >
            Toggle
          </button>
        </div>
      ))}

      <hr />
      <h3>Total Present: {presentCount}</h3>
    </div>
  );
}
