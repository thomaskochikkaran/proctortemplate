import React, { useRef, useEffect } from "react";
import Tile from "./Tile";

// interface Props {
//   children: ReactNode;
// }

const Live: React.FC = () => {
  const tiledata = [3,2,3,2,3,2,3,2,4,3,2,3,2,3,2,3,
  ];
  const [inr, setInr] = React.useState<number>(0);
  const tilelength = tiledata.length;
  const divRef = useRef<HTMLDivElement>(null);
  const [widths, setWidths] = React.useState<number>(0);
  const [heights, setHeights] = React.useState<number>(0);
  useEffect(() => {
    if (divRef.current) {
      setInr(100);
      if (tilelength == 1) {
        setInr(100);
      } else if (tilelength >= 2 && tilelength <= 4) {
        setInr(50);
      } else if (tilelength >= 5 && tilelength <= 9) {

        setInr(33);
      } else if (tilelength >= 10 && tilelength <= 16) {
        setInr(25);
      }
      setWidths(divRef.current.offsetWidth);
      setHeights(divRef.current.offsetHeight);
    }
  }, [inr, tilelength]);
  // const mywid = widths / inr;
  // const myhit = heights / inr;
  const myValue = "calc("+inr+"% - 10px)";
  return (
    <>
      <div
        style={{
          width: "100px",
          backgroundColor: "blue",
          height: "100vh",
        }}
      ></div>
      <div
        className="parent"
        style={{
          width: heights,
        }}
        ref={divRef}
      >
        
        {tiledata?.map((item) => {
          return (
            //  <Tile key={item} mywid={mywid} myhit={myhit} />
            <div
              key={item}
              className="child"
              style={{
                width: myValue,
                height: myValue,
                minHeight: myValue,
              }}
            >
              Child 1
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Live;
