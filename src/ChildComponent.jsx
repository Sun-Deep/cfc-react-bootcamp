import { useEffect, useState } from "react";

function ChildComponent({ name, age }) {
  const [fact, setFact] = useState("");

  const loadCatFact = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    console.log(res);
  };

  useEffect(() => {
    loadCatFact();
  }, []);
  return (
    <p>
      Hi, I am {name}. I am {age} years young.
    </p>
  );
}

export default ChildComponent;
