import React from "react";
import teamImage from "../../assets/team-1.jpg";
import Image from "next/image";

const TeamCard = () => {
  return (
    <div>
      <Image className="w-full" src={teamImage} alt="team" />

      <h1 className="text-xl font-bold my-3 mt-5"> REV: JOSE MATHEW </h1>

      <p className="text-gray-700 text-sm text-justify mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, beatae?
        Animi non atque optio et cumque cum sit totam quaerat! Porro
        reprehenderit, suscipit maiores possimus tempora nam odio iure a.
      </p>

      <a className=" text-sm text-gray-700" href="#">
        {" "}
        Facebook/ Twitter{" "}
      </a>
    </div>
  );
};

export default TeamCard;
