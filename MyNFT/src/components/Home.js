import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Globe from "../assets/globe clear.png";
import Block from "../assets/blocks clear.png";

const Home = ({ data, setData }) => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const fileRef = useRef();

  const handleFile = (e) => {
    const filesUploaded = e.target.files;
    if (filesUploaded?.length) {
      setFile(filesUploaded[0]);
    } else {
      setFile();
    }
  };

  const getImages = () => {
    fetch("http://127.0.0.1:7860/run/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [1],
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setImage(response.data);
        setData([
          ...data,
          {
            ...response.data,
          },
        ]);
      });
  };

  return (
    <div className="bodyof">
      <div className="dropbox">
        {!image && (
          <div className="contentmain">
            <div className="maintext">
              Generate your own<span>NFTs</span>now!
            </div>
          </div>
        )}
        {image && (
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center uploaded-set-file">
                <div className="pictureFrame">
                  <img
                    className="uploadedPhoto"
                    width={800}
                    height={800}
                    src={image}
                    alt="display"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!image && (
        <>
          <div className="globe">
            <img src={Globe} className="globeimg hidden" alt="globe" />
          </div>
          <div className="blocks">
            <img src={Block} className="blocksimg hidden" alt="blocks" />
          </div>
        </>
      )}
      <div className="container">
        <div className="panel">
          <div className="button_outer">
            <Link
              className="btn_upload"
              onClick={() => {
                getImages();
              }}
            >
              Generate NFT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
