import { Col, Row } from "antd";
import styles from "./tictaktoe.module.sass";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";

function TicTacToe() {
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [boxValue, setBoxValue] = useState(initialState);
  const [isX, setIsX] = useState(false);
  // const [storeValue, setStoreValue] = useState("");

  const onBoxClick = (index) => {
    let strings = Array.from(boxValue);
    strings[index] = isX ? "O" : "X";
    setBoxValue(strings);
    setIsX(!isX);
    console.log("box is clicked", boxValue);
  };

  useEffect(() => {
    const win = checkWinner();
    if (win) {
      alert(`${win} won the Game`);
      setBoxValue(initialState);
    }
  }, [boxValue]);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (
        boxValue[a] &&
        boxValue[a] === boxValue[b] &&
        boxValue[b] === boxValue[c] &&
        boxValue[c]
      ) {
        return boxValue[a];
      }
    }
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.boxHeight}`}
      >
        <div className={`${styles.borderBox}`}>
          <Row>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeLeftTop} ${boxValue[0]} d-flex align-items-center justify-content-center`}
                value={boxValue[0]}
                onClick={() => {
                  onBoxClick(0);
                  // setStoreValue(boxValue[0]);
                  // console.log(storeValue);
                }}
                disabled={boxValue[0]}
              >
                {boxValue[0]}
              </button>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeCenterTop} d-flex align-items-center justify-content-center`}
                value={boxValue[1]}
                onClick={() => onBoxClick(1)}
                disabled={boxValue[1]}
              >
                {boxValue[1]}
              </button>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeRightTop} d-flex align-items-center justify-content-center`}
                value={boxValue[2]}
                onClick={() => onBoxClick(2)}
                disabled={boxValue[2]}
              >
                {boxValue[2]}
              </button>
            </Col>
          </Row>
          <Row>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeLeft} d-flex align-items-center justify-content-center`}
                value={boxValue[3]}
                onClick={() => onBoxClick(3)}
                disabled={boxValue[3]}
              >
                {boxValue[3]}
              </button>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSize} d-flex align-items-center justify-content-center`}
                value={boxValue[4]}
                onClick={() => onBoxClick(4)}
                disabled={boxValue[4]}
              >
                {boxValue[4]}
              </button>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeRight} d-flex align-items-center justify-content-center`}
                value={boxValue[5]}
                onClick={() => onBoxClick(5)}
                disabled={boxValue[5]}
              >
                {boxValue[5]}
              </button>
            </Col>
          </Row>
          <Row>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeLeftBottom} d-flex align-items-center justify-content-center`}
                value={boxValue[6]}
                onClick={() => onBoxClick(6)}
                disabled={boxValue[6]}
              >
                {boxValue[6]}
              </button>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeBottom} d-flex align-items-center justify-content-center`}
                value={boxValue[7]}
                onClick={() => onBoxClick(7)}
                disabled={boxValue[7]}
              >
                {boxValue[7]}
              </button>
            </Col>
            <Col xs={0} sm={0} md={8} lg={8} xl={8}>
              <button
                className={`${styles.buttonSizeRightBottom} d-flex align-items-center justify-content-center`}
                value={boxValue[8]}
                onClick={() => onBoxClick(8)}
                disabled={boxValue[8]}
              >
                {boxValue[8]}
              </button>
            </Col>
          </Row>
        </div>
      </div>{" "}
      <div
        className={`d-flex align-items-center justify-content-center pb-5 ${styles.restart} `}
      >
        <button
          className={`${styles.restartButton}`}
          onClick={() => setBoxValue(initialState)}
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default TicTacToe;
