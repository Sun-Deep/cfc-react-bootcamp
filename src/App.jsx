import { useCallback, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitData = (e) => {
    console.log("form submitted");
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitData}>
        <label htmlFor="">
          Name:
          <input type="text" name="name" id="" onChange={handleChange} />
        </label>
        <label htmlFor="">
          Age:
          <input type="text" name="age" id="" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default App;
