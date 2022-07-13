import Link from "next/link";
import MyCalc from "../myCalc/MyCalc";

function Navbar() {
  return (
    <div
      className={`d-flex justify-content-center align-items-center`}
      style={{
        fontSize: "18px",
        backgroundColor: "whitesmoke",
        height: "50px",
      }}
    >
      <div>
        <Link href="/TicTakToe">TicTakToe</Link>
      </div>
      <div className="px-2">
        <Link href="/MyCalc">Mac-Calculator</Link>
      </div>
    </div>
  );
}

export default Navbar;
