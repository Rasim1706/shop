import React from 'react';
import button from './button.module.css';
import { NavLink } from "react-router-dom";





const Button = () => {
	return (
		<div  className={button.Look}>
		<NavLink to="/header">Посмотреть</NavLink>	
		</div>
		);
}


export default Button;