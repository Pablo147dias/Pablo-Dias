import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {

    const StyledToobar = styled(Toolbar)(({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly",
  }))

    return (
        <>
         <AppBar position="absolute">
            <StyledToobar>
               
                    <MenuItem>Sobre min</MenuItem>
                    <MenuItem>Habilidades</MenuItem>    
                    <MenuItem>Projetos</MenuItem>
                
            </StyledToobar>
        </AppBar>
        </>
    )
}

export default NavBar;