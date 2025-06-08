import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {
    const StyleButton  = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.secondary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText
        }
 }))
    return (
        <>
            <StyleButton>
                {children}
            </StyleButton>
        </>
    )
}

export default StyledButton;