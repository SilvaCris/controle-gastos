import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styles";


const Navbar = ()=> {

    return (
        <StyledNavbar>   
            <NavLink to= "/">Home</NavLink>
            <NavLink to= "/criar-despesas"> Criar Despesa </NavLink>
            <NavLink to= "/dashboard"> Dashboard </NavLink>
        </StyledNavbar>
    )

}

export default Navbar;