import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const About: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Inglês", "Material UI", "CNH:AB" , "Figma"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre min</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid   size={{ xs: 9, md: 2.5 }} >
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiência</Typography>
                                <Typography textAlign="center">Mais de 1 ano</Typography>
                                <Typography textAlign="center">Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Formação</Typography>
                                <Typography textAlign="center">Bacharelado de Ciências da computação</Typography>
                               
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Sou Pablo Dias, estudante de Ciência da Computação com foco em desenvolvimento Full Stack. Estou em transição de carreira após experiências profissionais em áreas como logística, montagem, TI e manutenção. Há mais de um ano venho me dedicando intensamente ao estudo de programação, com foco em desenvolvimento web, utilizando tecnologias modernas como HTML, CSS, JavaScript, React, Node.js e bancos de dados relacionais e não relacionais.

Atualmente estudo pela Faculdade Descomplica, e complemento minha formação em plataformas como Alura e Estudonauta. Participo ativamente de projetos pessoais, cursos práticos e desafios de codificação para consolidar o aprendizado. Tenho compromisso com boas práticas de desenvolvimento, versionamento com Git, organização de código e resolução de problemas de forma lógica e eficiente.

Meu objetivo é atuar como estagiário ou desenvolvedor júnior em uma equipe colaborativa, onde possa aplicar meus conhecimentos, aprender com profissionais mais experientes e contribuir de forma concreta para o crescimento dos projetos. Estou preparado para lidar com responsabilidades, prazos e a constante evolução que a área de tecnologia exige.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid size={{ xs: 5, md: 2, sm:4, lg:2, }} key={index} >
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default About
