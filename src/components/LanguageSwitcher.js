import React from 'react';
import { GiFrance } from "react-icons/gi"; 
import { FaGlobe, FaFlagUsa, FaFlag } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './LanguageSwitcher.css';
const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={<FaGlobe size={30} />}
      menuAlign="right"
    >      
      <Dropdown.Item onClick={() => setLanguage('fr')} style={{ color:"#8B47F8",backgroundColor:"#17171C" }}>
        <GiFrance /> FR
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setLanguage('en')} style={{ color:"#8B47F8",backgroundColor:"#17171C"}}>
        <FaFlagUsa /> EN
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setLanguage('ar')} style={{ color:"#8B47F8" ,backgroundColor:"#17171C"}}>
        <FaFlag /> AR
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSwitcher;
