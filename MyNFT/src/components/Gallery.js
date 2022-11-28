import React from "react";
import CardComp from "./cardComp";

// export const data_a = [
//   {
//     id: 1,
//     title: "001284829 ETH",
//     desc: "Rakoon",
//   },
//   {
//     id: 2,
//     title: "0284924849 ETH",
//     desc: "Chimtu",
//   },
//   {
//     id: 3,
//     title: "0284924849 ETH",
//     desc: "Shocoa",
//   },
//   {
//     id: 4,
//     title: "0284924849 ETH",
//     desc: "Ramboo",
//   },
//   {
//     id: 11,
//     title: "0284924849 ETH",
//     desc: "Kriyum",
//   },
// ];

const Gallery = ({ data }) => {
  return (
    <div className="
    6+++++++++++++++++++++++++++++++666666666666666666666666666666666666666 m-0" style={{ padding: "45px" }}>
      <div className="row">
        {data &&
          data.map((record) => <CardComp coin={record} key={record.id} />)}
      </div>
    </div>
  );
};

export default Gallery;
