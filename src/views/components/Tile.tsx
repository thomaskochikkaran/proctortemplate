import React from "react";

interface Props {
  mywid: number;
  myhit: number;
}

const Tile: React.FC<Props> = ({ mywid, myhit  }) => {
  

  return (
    <div
      style={{
        width: mywid,
        height:myhit,
        minWidth:mywid,
        minHeight:myhit,
        
      }}
    >
      <div
      style={{
        height:"100%",
        display:"flex",
        
      }}
    >
        <div
      style={{       
        backgroundColor: "#fff",
        height:"calc(100% - 50px)",
        width:"calc(100% - 50px)",
        display:"flex",
        border:"solid 1px #000",
        padding:"3px"
      }}
    ></div>
        

    </div>
    </div>
  );
};

export default Tile;
