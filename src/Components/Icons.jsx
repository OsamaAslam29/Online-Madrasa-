import React from 'react'
import * as FontAwesome from "react-icons/fa";

const Icons = () => {
    const ICONS = ["FaInfoCircle", "FaKey", "FaLaptopCode"];

  return (
    <div>
       {ICONS.solid.map((item) => {
        const Icon = FontAwesome[item];
        return <Icon />;
      })}
    </div>
  )
}

export default Icons
