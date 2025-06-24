import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import type {ProjectCardProps}  from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Organo",
            subtitle: "maio 2025 - jun 2025",
            srcImg: "/public/imagens/organo.png",
            description: "Este é um projeto desenvolvido durante os cursos de React da [Alura], com o objetivo de praticar conceitos de front-end, componentização, manipulação de estados e estilização em ReactJS. Este projeto é uma aplicação de gerenciamento de tarefas, semelhante ao Trello, onde os usuários podem criar, editar e excluir cartões em diferentes colunas.",
            technologies: "Technologies: JavaScript,React, UUID, HTML, CSS, Figma",
            websiteURL: "https://pablo147dias.github.io/organo/",
            codeURL: "https://github.com/Pablo147dias/organo",
        },
        {
            title: "Code-Connect feed",
            subtitle: "maio 2025 - maio 2025",
            srcImg: "/public/imagens/codeconnect.png",
            description: "Este é um projeto desenvolvido durante os cursos de React da [Alura], com o objetivo de praticar conceitos de front-end, componentização, manipulação de estados e estilização em ReactJS. Este projeto é uma aplicação de feed social, onde os usuários podem visualizar postagens, interagir com elas e compartilhar conteúdo.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas, React, Figma",
            websiteURL: "https://pablo147dias.github.io/codeconnect-feed/",
            codeURL: "https://github.com/Pablo147dias/codeconnect-feed",
        },
        /*{
            title: "Project Craze Maze",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/src/assets/images/project1-craze-maze.gif",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Project Blotting",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/src/assets/images/project2-blotting.png",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },*/
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }}  key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
