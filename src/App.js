import { useState, useEffect } from "react";
import Tour from "./components/tour";

function App() {
  const [tourdata, setTourdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [head, setHead] = useState("Our Tours");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    await fetch("https://course-api.com/react-tours-project")
      .then((val) => {
        return val.json();
      })
      .then((data) => {
        setLoading(false);
        return setTourdata(data);
      });
  };

  const handlechange = (id) => {
    const remove = tourdata.filter((val) => {
      return val.id !== id;
    });
    setTourdata(remove);
  };

  const datahandler = tourdata.map((value) => (
    <Tour data={value} handlechange={handlechange} />
  ));

  return (
    <div className="App">
      <p>{loading ? "Loading..." : tourdata.length ? head : "No tours left"}</p>
      <div>{datahandler}</div>
      <div>
        {!tourdata.length ? <button onClick={getData}>Refresh </button> : ""}
      </div>
    </div>
  );
}

export default App;
