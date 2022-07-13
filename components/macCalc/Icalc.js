import Head from "next/head";
import styles from "./calc.module.sass";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";

function Icalc() {
  const [num, setNum] = useState([7, 8, 9, 4, 5, 6, 1, 2, 3]);
  const [selectedNum, setSelectedNum] = useState(0);
  const [filterNum, setFilterNum] = useState([]);
  const [output, setOutput] = useState(0);

  // function selectedValue(value) {
  //   setSelectedNum(value);
  //   console.log(selectedNum);
  // }

  useEffect(() => {
    let targetNum =
      filterNum.length > 0 ? parseFloat(filterNum.join("")) : output;
    setSelectedNum(targetNum);
    console.log(targetNum);
  }, [filterNum, output]);

  console.log("selecetedNumber", selectedNum);
  console.log("output", output);
  // console.log("filternum", filterNum);

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.calcHeight}`}
      >
        <div className={`${styles.calcBorder}`}>
          <div
            className={`d-flex align-items-end justify-content-end  ${styles.calcUpper}`}
          >
            <div>{selectedNum}</div>
          </div>

          <div className={`${styles.calcNumBox}`}>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcGray} ${styles.button}`}
                  onClick={() => {
                    setFilterNum([]);
                    setOutput(0);
                    setSelectedNum(0);
                  }}
                >
                  {selectedNum === 0 ? "AC" : "C"}
                </button>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcGray} ${styles.button}`}
                  onClick={() => setSelectedNum(selectedNum * -1)}
                >
                  +/-
                </button>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center  ${styles.calcBox} ${styles.calcGray} ${styles.button}`}
                  // onClick={() => {
                  //   let mod = output !== 0 ? output % selectedNum : selectedNum;
                  //   setOutput(mod);
                  //   setFilterNum([]);
                  //   setSelectedNum(0);
                  // }}
                >
                  %
                </button>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  // onClick={() => {
                  //   let div = output !== 0 ? output / selectedNum : selectedNum;
                  //   setOutput(div);
                  //   setFilterNum([]);
                  //   setSelectedNum(0);
                  // }}
                >
                  <i className="fa-solid fa-divide"></i>
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                <Row>
                  {num.map((data, i) => (
                    <Col
                      className={`d-flex align-items-center justify-content-center `}
                      key={i}
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      xl={8}
                    >
                      <button
                        className={`${styles.calcBox} ${styles.calcLightGray} ${styles.button}`}
                        onClick={() => {
                          setFilterNum([...filterNum, data]);
                        }}
                      >
                        {data}
                      </button>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  // onClick={() => {
                  //   let mul = output > 0 ? output * selectedNum : selectedNum;
                  //   setOutput(mul);
                  //   setFilterNum([]);
                  //   setSelectedNum(0);
                  // }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  // onClick={() => {
                  //   let subtract =
                  //     output !== 0 ? output - selectedNum : selectedNum;
                  //   setOutput(subtract);
                  //   setFilterNum([]);
                  //   setSelectedNum(0);
                  // }}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => {
                    setOutput(output + selectedNum);
                    setFilterNum([]);
                    // setSelectedNum(0);
                    setSelectedNum(output);
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.button}`}
                  style={{
                    width: "120px",
                    backgroundColor: "#D4D4D2",
                    borderBottomLeftRadius: "10px",
                  }}
                  onClick={() => setFilterNum([...filterNum, 0])}
                >
                  0
                </button>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcLightGray} ${styles.button}`}
                  onClick={() => setFilterNum([...filterNum, "."])}
                >
                  .
                </button>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <button
                  style={{ borderBottomRightRadius: "10px" }}
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => setSelectedNum(output)}
                >
                  =
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Icalc;
