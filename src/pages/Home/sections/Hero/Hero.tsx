import { Box, Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButttons/StyleButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyleHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }))

  const StyleImage = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`

  }))

  return (
    <>
      <StyleHero>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={"absolute"} textAlign={"center"}>
                  <StyleImage src={Avatar} alt="avatar logo" />
                </Box>
              </Box>
              
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} >
                Pablo Dias
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                Desenvolvedor de Software
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                
                  <StyledButton >
                    <DownloadIcon />
                        <Typography>Download CV</Typography>
                  </StyledButton >
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton >
                    <EmailIcon />
                    <Typography>Entre em Contato</Typography>
                  </StyledButton >
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
       </StyleHero>
    </>
  )
}

export default Hero
