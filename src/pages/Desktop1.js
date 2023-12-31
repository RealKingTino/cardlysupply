import React, { useState } from "react";
import Select from "react-select";
import Button from "./Button";

// Define the options for the gift cards
const options = [
  { value: "apple/iTunes", label: "Apple/iTunes card" },
  { value: "cvs", label: "Cvs" },
  { value: "roblox", label: "Roblox" },
  { value: "doordash", label: "DoorDash" },
  { value: "visa", label: "Visa" },
  { value: "amazon", label: "Amazon" },
  { value: "target", label: "Target" },
  { value: "dunkin", label: "Dunkin'" },
  { value: "ubereats", label: "UberEats" },
  { value: "grubhub", label: "GrubHub" },
  { value: "chipotle", label: "Chipotle" },
  { value: "ulta", label: "ULTA Beauty" },
  { value: "uber", label: "Uber" },
  { value: "vanilla", label: "Vanilla" },
  { value: "google", label: "Google Play" },
  { value: "ebay", label: "Ebay" },
  { value: "master card", label: "Master card" },
  { value: "Xbox", label: "Xbox" },
  { value: "Steam", label: "STEAM" },
];

const Desktop1 = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("");

  const handleSelectChange = (e) => {
    setSelectedCards(e);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle the change of the redemption code input
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };


  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-5xl text-darkslategray-200 font-roboto">
      <div className="absolute top-[47px] left-[44px] w-[1351px] h-[155px] overflow-hidden">
        <div className="absolute top-[7px] left-[6px] bg-darkorange w-[1338px] h-[67px]" />
        <img
          className="absolute top-[80.5px] left-[6px] w-[1338px] h-[67px] object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="absolute top-[87px] left-[48px] text-[37px] font-rocknroll-one text-darkorange">
          My Cardly Supply
        </div>
        <div className="absolute top-[100px] left-[746px]">About GiftCard</div>
        <b className="absolute top-[31px] left-[30px] text-[15px] font-inter text-white">
          Vanilla Visa® Gift Card Vanilla Mastercard® Gift Card Vanilla
          Discover® Gift Card Vanilla Gift Visa®
        </b>
        <b className="absolute top-[26px] left-[978px] font-inter text-white">
          Fast and Reliable
        </b>
        <div className="absolute top-[100px] left-[959px]">Buy Giftcard</div>
        <div className="absolute top-[100px] left-[1125px]">
          Check Card Status
        </div>
      </div>
      <div className="absolute top-[216px] left-[50px] w-[1345px] h-[808px] overflow-hidden text-8xl text-darkgray-200">
        <img
          className="absolute top-[-77px] left-[-142px] w-[1497px] h-[731px] object-cover"
          alt=""
          src="/pngitem-18643282-1@2x.png"
        />
        <div className="absolute top-[104px] left-[39px] bg-white box-border w-[567px] h-[550px] overflow-hidden border-[1px] border-solid border-black">
          <img
            className="absolute top-[361px] left-[53px] w-9 h-9 overflow-hidden object-cover"
            alt=""
            src="/clarityeyehideline@2x.png"
          />
          <div className="absolute top-[92px] left-[38px] bg-gray-100 box-border w-[491px] h-[61px] border-[2px] border-solid border-darkgray-100">
            <Select
              options={options}
              isMulti
              onChange={handleSelectChange}
              placeholder="Select Type Of Card"
            />
          </div>
          <div className="absolute top-[184px] left-[132px] bg-gray-100 box-border w-[397px] h-[59px] border-[2px] border-solid border-darkgray-100">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full h-full"
              style={{ height: "55px" }}
            />
          </div>
          <div className="absolute top-[198px] left-[165px]">Amount</div>
          <div className="absolute top-[184px] left-[38px] bg-gray-100 box-border w-[83px] h-[61px] border-[2px] border-solid border-darkgray-100" />
          <div className="absolute top-[198px] left-[53px] text-darkslategray-100">
            USD
          </div>
          <div className="absolute top-[276px] left-[38px] bg-gray-100 box-border w-[491px] h-[61px] border-[2px] border-solid border-darkgray-100">
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              className="w-full w-full"
              style={{ height: "55px" }}
            />
          </div>
          <div className="absolute top-[290px] left-[68px]">
            Redemption Code
          </div>
          <div className="absolute top-[422px] left-[38px]">
            <Button />
          </div>
          <div className="absolute top-[361px] left-[105px] text-gray-200">
            Hide Card Info
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;