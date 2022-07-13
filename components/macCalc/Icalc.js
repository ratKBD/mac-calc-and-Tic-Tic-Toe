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
      <Head>
        <title>My page title</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.0/css/v4-shims.min.css"
          integrity="sha512-p++g4gkFY8DBqLItjIfuKJPFvTPqcg2FzOns2BNaltwoCOrXMqRIOqgWqWEvuqsj/3aVdgoEo2Y7X6SomTfUPA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
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
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
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
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
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
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <button
                  className={`d-flex align-items-center justify-content-center ${styles.calcBox} ${styles.calcLightGray} ${styles.button}`}
                  onClick={() => setFilterNum([...filterNum, "."])}
                >
                  .
                </button>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
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