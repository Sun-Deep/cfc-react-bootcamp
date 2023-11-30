import { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";

function MemeForm() {
  const [values, setValues] = useState({
    top: "",
    bottom: "",
  });
  const [image, setImage] = useState("https://i.imgflip.com/1g8my4.jpg");

  const [memeData, setMemeData] = useState([]);

  const loadMemeData = async () => {
    const res = await axios.get("https://api.imgflip.com/get_memes");

    if (res.status === 200) {
      setMemeData(res.data.data.memes);
    }
  };

  const handleFormChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const randomMemeImage = () => {
    const index = Math.floor(Math.random() * (memeData.length - 0) + 0);
    setImage(memeData[index].url);
  };

  useEffect(() => {
    loadMemeData();
  }, []);

  return (
    <div>
      <div className="meme-form">
        <input
          type="text"
          name="top"
          value={values.top}
          id=""
          placeholder="Top text"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="bottom"
          value={values.bottom}
          id=""
          placeholder="Bottom text"
          onChange={handleFormChange}
        />
        <button onClick={randomMemeImage}>Generate Meme</button>
      </div>

      <div className="meme-image">
        <div className="image">
          <img src={image} alt="meme" />
          <div>
            <p className="top-text">{values.top}</p>
            <p className="bottom-text">{values.bottom}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemeForm;
