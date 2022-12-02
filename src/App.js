import React, { useState } from "react";
import Date, { Time } from "./components/time";
import "./App.css";
import uppersvg from "./images/upper.svg";
import back from "./images/backspace.svg";
import plusMinus from "./images/plusMinus.svg";
import downsvg from "./images/down.svg";
import signal from "./images/signal.svg";
import wifi from "./images/wifi.svg";
import battery from "./images/battery.svg";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clean = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calcu = () => {
    setResult(eval(result));
  };

  // const vaa = () => {
  //   const today = new Date();

  //    console.log(today);
  // };

  return (
    <div className="bg-[#E5E5E5] max-w-7xl min-w-full p-24 font-gentium">
      <div className="bg-[#17171C] dark:bg-[#F1F2F3] mx-auto flex flex-col justify-between max-w-[375px] h-[712px] mb-9 text-white dark:text-black px-5 rounded-lg">
        <div className="flex flex-row justify-around">
          <div className="pt-2 dark:text-black">
            <Time />
          </div>

          <img src={uppersvg} alt="Mysvg" className="w-[164px] mx-auto" />

          <div className="flex flex-row gap-1">
            <div className=" pt-3 dark:bg-black">
              <img src={signal} alt="signal" />
            </div>
            <div className=" py-3 dark:bg-black">
              <img src={wifi} alt="wifi" />
            </div>
            <div className=" py-3 dark:bg-black">
              <img src={battery} alt="battery" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div>
            <form className="text-white text-[96px] leading-[112px]">
              <input
                className="w-[300px] text-right bg-[#17171C] h-[96px]"
                type="text"
                value={result}
              />
            </form>
          </div>
          {/* buttons */}
          <div className="grid grid-cols-4 gap-4 mx-auto text-[32px]">
            <button
              onClick={clean}
              className="bg-[#4E505F] dark:bg-[#D2D3DA] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              c
            </button>
            <button className="bg-[#4E505F] dark:bg-[#D2D3DA] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]">
              <span>
                <img className="mx-auto" src={plusMinus} alt="plusminus" />
              </span>
            </button>
            <button className="bg-[#4E505F] dark:bg-[#D2D3DA] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]">
              %
            </button>
            <button
              name="/"
              onClick={handleClick}
              className="bg-[#4B5EFC] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              ÷
            </button>
            <button
              name="7"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              7
            </button>
            <button
              name="8"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              8
            </button>
            <button
              name="9"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              9
            </button>
            <button
              name="*"
              onClick={handleClick}
              className="bg-[#4B5EFC] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              ×
            </button>
            <button
              name="4"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              4
            </button>
            <button
              name="5"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              5
            </button>
            <button
              name="6"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              6
            </button>
            <button
              name="-"
              onClick={handleClick}
              className="bg-[#4B5EFC] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              -
            </button>
            <button
              name="1"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              1
            </button>
            <button
              name="2"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              2
            </button>
            <button
              name="3"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              3
            </button>
            <button
              name="+"
              onClick={handleClick}
              className="bg-[#4B5EFC] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              +
            </button>
            <button
              name="."
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              .
            </button>
            <button
              name="0"
              onClick={handleClick}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              0
            </button>
            <button
              onClick={backspace}
              className="bg-[#2E2F38] dark:bg-[#FFFFFF] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white w-[72px]"
            >
              <span>
                <img className="mx-auto" src={back} alt="backspace" />
              </span>
            </button>
            <button
              name="="
              onClick={calcu}
              className="bg-[#4B5EFC] rounded-[24px] p-[12px] cursor-pointer hover:bg-gray-100 text-white text-center w-[72px]"
            >
              =
            </button>
          </div>
        </div>

        <img
          className="mb-2 w-[134px] h-[5px] mx-auto"
          src={downsvg}
          alt="downsvg"
        />
      </div>
    </div>
  );
}

export default App;
