import React from 'react';
import { CiEdit } from "react-icons/ci";
import { LuNotebookTabs } from "react-icons/lu";
import { BsHeartFill } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdNotInterested } from "react-icons/md";
import { GoAlertFill } from "react-icons/go";
import { GrDislike } from "react-icons/gr";
import "../../styles/Profile.css";

const Profile = () => {
    const card = [
      {
        icon: LuNotebookTabs,
        title: "Meal Plan",
        desc: "Vegan",
      },
      {
        icon: BsHeartFill,
        title: "Favorites",
        desc: "Honey, Okra",
      },
      {
        icon: MdOutlineMedicalServices,
        title: "Medical Profile",
        desc: "Obesity Management",
      },
      {
        icon: MdNotInterested,
        title: "Dietary Restriction",
        desc: "Low Sodium Salt",
      },
      {
        icon: GoAlertFill,
        title: "Allergies",
        desc: "Peanut",
      },
      {
        icon: GrDislike,
        title: "Dislikes",
        desc: "Honey, Okra",
      },
    ];
  return (
    <div className="container">
      <div className="firstBox">
        <div className="firstBoxDiv">
          <div className="firstBoxImg">
            <img
              src="/assets/pro.jpg"
              alt="Profile"
              width={"100%"}
              height={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="vertical-line" />
          <div className="editBox">
            <div className="editBoxDiv">
              <p className="editBoxProfile">John Asiloku</p>
              <p className="editBoxEmail">johndoe2024@gmail.com</p>
              <p className="editBoxPN">+234 901 111 1234</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <CiEdit color="" fontSize={"30px"} />
            </div>
          </div>
        </div>
      </div>
      <div className="secondBox">
        <div className="goal">
          <div className="goalDiv">
            <p className="goalPTag">
              <span className="goalSpan"> Goals: </span>Weight loss
            </p>
          </div>
        </div>
        <hr />
        <div className="weightBox">
          <div className="cwBox">
            <p className="cwFPBox">Current weight</p>
            <p className="cwSPBox">185kg</p>
          </div>
          <div className="cSLine" />
          <div>
            <p className="cwFPBox">Goal weight</p>
            <p className="cwSPBox">100kg</p>
          </div>
          <div className="cSLine" />
          <div>
            <p className="cwFPBox">BMI</p>
            <p className="cwSPBox">27.3</p>
          </div>
        </div>
      </div>
      <div className="thirdDiv">
        <div className="thirdContainer">
          {card.map((card, index) => (
            <div key={index} className="thirdCon">
              <div>
                <card.icon fontSize={"32px"} color="#059669" />
              </div>
              <div>
                <p className="thirdConFP">{card.title}</p>
              </div>
              <div>
                <p className="thirdConSP">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fourthDiv">
        <div className="fourthDivCon">
          <div className="fourthDivConF">
            <div>
              <p className="fourthDivConFP">Address Book</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <CiEdit color="" fontSize={"30px"} />
            </div>
          </div>
          <div className="fourthDivConS">
            <div>
              <p className="fourthDivConSP">Your Default Address:</p>
            </div>
            <div className="address">
              <p className="fourthDivConSPll">
                4 Olaseni Diyaolu Street, Kilo Aguda. Get to LEVERAGE Hotel from
                Kilo Bustop, turn to second street to your left Surulere
                (Aguda), Lagos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
