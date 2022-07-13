import styles from "./mycalc.module.sass";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";

function MyCalc() {
  const [num, setNum] = useState([7, 8, 9, 4, 5, 6, 1, 2, 3]);
  const [selectedNum, setSelectedNum] = useState(0);
  const [filterNum, setFilterNum] = useState([]);
  const [output, setOutput] = useState(0);
  const [operation, setOperation] = useState("");
  const [finalResultOperation, setFinalResultOperation] = useState("");

  useEffect(() => {
    let targetNum = filterNum.length > 0 ? parseFloat(filterNum.join("")) : 0;
    setSelectedNum(targetNum);
    console.log(targetNum);
  }, [filterNum]);

  const finalOutput = () => {
    if (finalResultOperation === "add") {
      setOutput(output + selectedNum);
    } else if (finalResultOperation === "sub") {
      setOutput(
        output > 0 && selectedNum !== 0 ? output - selectedNum : output
      );
    } else if (finalResultOperation === "div") {
      setOutput(
        output > 0 && selectedNum !== 0 ? output / selectedNum : output
      );
    } else if (finalResultOperation === "mod") {
      setOutput(
        output > 0 && selectedNum !== 0 ? output % selectedNum : output
      );
    } else if (finalResultOperation === "mul") {
      setOutput(
        output > 0 && selectedNum !== 0 ? output * selectedNum : output
      );
    }
  };

  console.log("selecetedNumber", selectedNum);
  console.log("output", output);
  console.log("operation", operation);
  // console.log("filternum", filterNum);

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.calcHeight}`}
      >
        <div className={`${styles.calcBorder} shadow`}>
          <div
            className={`d-flex align-items-end justify-content-end  ${styles.calcUpper}`}
          >
            <div>{operation ? output : selectedNum}</div>
          </div>

          <div className={`${styles.calcNumBox}`}>
            <Row>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
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
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcGray} ${styles.button}`}
                  onClick={() => setSelectedNum(selectedNum * -1)}
                >
                  +/-
                </button>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center  ${styles.calcBox} ${styles.calcGray} ${styles.button}`}
                  onClick={() => {
                    let mod =
                      output > 0 && selectedNum !== 0
                        ? output % selectedNum
                        : output;
                    setOutput(mod);
                    finalOutput();
                    setFilterNum([]);
                    setFinalResultOperation("mod");
                    setOperation("mod");
                    setSelectedNum(0);
                  }}
                >
                  %
                </button>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => {
                    let div =
                      output > 0 && selectedNum !== 0
                        ? output / selectedNum
                        : output;
                    setOutput(div);
                    finalOutput();
                    setFilterNum([]);
                    setFinalResultOperation("div");
                    setOperation("div");
                    setSelectedNum(0);
                  }}
                >
                  <i className="fa-solid fa-divide"></i>
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={0} sm={0} md={18} lg={18} xl={18}>
                <Row>
                  {num.map((data, i) => (
                    <Col
                      className={`d-flex align-items-center justify-content-center `}
                      key={i}
                      xs={0}
                      sm={0}
                      md={8}
                      lg={8}
                      xl={8}
                    >
                      <button
                        className={`${styles.calcBox} ${styles.calcLightGray} ${styles.button}`}
                        onClick={() => {
                          setFilterNum([...filterNum, data]);
                          setOperation("");
                        }}
                      >
                        {data}
                      </button>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => {
                    let mul =
                      output > 0 && selectedNum !== 0
                        ? output * selectedNum
                        : output;
                    setOutput(mul);
                    finalOutput();
                    setFilterNum([]);
                    setFinalResultOperation("mul");
                    setOperation("mul");
                    setSelectedNum(0);
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => {
                    let subtract =
                      output !== 0 ? output - selectedNum : selectedNum;
                    setOutput(subtract);
                    finalOutput();
                    setFilterNum([]);
                    setFinalResultOperation("sub");
                    setOperation("sub");
                    setSelectedNum(0);
                  }}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => {
                    setOutput(output + selectedNum);
                    finalOutput();
                    setFilterNum([]);
                    setOperation("add");
                    setFinalResultOperation("add");
                    setSelectedNum(0);
                  }}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.button} `}
                  style={{
                    width: "120px",
                    backgroundColor: "#D4D4D2",
                    borderBottomLeftRadius: "10px",
                  }}
                  onClick={() => {
                    setFilterNum([...filterNum, 0]);
                    setOperation("");
                  }}
                >
                  0
                </button>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center  ${styles.calcLightGray} ${styles.button}`}
                  onClick={() => {
                    setFilterNum([...filterNum, "."]);
                    setOperation("");
                  }}
                >
                  .
                </button>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  style={{ borderBottomRightRadius: "10px" }}
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcOrange} ${styles.button}`}
                  onClick={() => {
                    setFilterNum([]);
                    finalOutput();
                    setOperation("finalOutput");
                  }}
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

export default MyCalc;
