import { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("");

  const loadCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setFact(data.fact);
      });
  };

  useEffect(() => {
    loadCatFact();
  }, []); //dependency array

  return (
    <div>
      <h2>{fact}</h2>
      <button onClick={loadCatFact}>Other fact</button>
    </div>
  );
}

export default CatFact;
