import React from "react";
import MenuItem from "./MenuItem";
const Menu = ({links, ulClassName}) => {
    return (
        <ul className={`${ulClassName} list-unstyled`}>
            {
                links.map(link => {
                   return (
                    <MenuItem details={link} key={link.name}/>
                   )
                })
            }
        </ul>
    );
}

export default Menu;