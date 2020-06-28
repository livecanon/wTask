// Dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// Components
import BurgerMenu from "../Navbar/BurgerMenu";
import RightSideNavIcon from "../../Containers/RightSideNavIcons";
import Settings from "../Navbar/SettingsButton";
import InfoButton from "../Navbar/InfoButton";

// Styled Components
const NavigationBar = styled.div`
  height: 4.3rem;
  background: #316fea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
`;

// React Component
const Navbar = () => {
  return (
    <NavigationBar>
      <BurgerMenu />
      <RightSideNavIcon>
        <InfoButton />
        <Settings />
      </RightSideNavIcon>
    </NavigationBar>
  );
};

export default Navbar;