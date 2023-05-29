import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import EditCard from "./components/EditCard";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState();
  return (
    <div className="App">
      {!isEditing ? (
        <Card
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          data={data}
          setData={setData}
        />
      ) : (
        <EditCard
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}

export default App;
