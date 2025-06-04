import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

  const StyleHero = styled("div")(() => ({
    backgroundColor: "#f0f0f0",
    height: "100vh",
  }))

  const StyleImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",

  }))

  return (
    <>
      <StyleHero>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyleImage src={Avatar} alt="avatar logo" />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="primary" variant="h1" textAlign="center">
                Pablo Dias
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvedor de Software
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <Button>
                    <EmailIcon />
                    Entre em Contato
                  </Button>
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
