import avatar from "./../../../assets/default-avatar.svg";
import React from "react";
export function Person({ name, images, nickName = "shake and bake" }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>Nickname:{nickName}</p>
      <img
        src={images?.[0]?.small?.url || avatar}
        alt="person"
        style={{ width: "60px" }}
      />
    </li>
  );
}
