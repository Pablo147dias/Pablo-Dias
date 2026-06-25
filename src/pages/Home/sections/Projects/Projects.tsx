import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import orgaoImg from '../../../../assets/images/organo.png';
import codeconnectImg from '../../../../assets/images/codeconnect.png';

const ProjectsSection: React.FC = () => {

    const projects = [
        {
            title: "Organo",
            subtitle: "maio 2025 - jun 2025",
            srcImg: orgaoImg,
            description: "Este é um projeto desenvolvido durante os cursos de React da [Alura], com o objetivo de praticar conceitos de front-end, componentização, manipulação de estados e estilização em ReactJS. Este projeto é uma aplicação de gerenciamento de tarefas, semelhante ao Trello, onde os usuários podem criar, editar e excluir cartões em diferentes colunas.",
            technologies: "Technologies: JavaScript, React, UUID, HTML, CSS, Figma",
            websiteURL: "https://pablo147dias.github.io/organo/",
            codeURL: "https://github.com/Pablo147dias/organo",
        },
        {
            title: "Code-Connect feed",
            subtitle: "maio 2025 - maio 2025",
            srcImg: codeconnectImg,
            description: "Este é um projeto desenvolvido durante os cursos de React da [Alura], com o objetivo de praticar conceitos de front-end, componentização, manipulação de estados e estilização em ReactJS. Este projeto é uma aplicação de feed social, onde os usuários podem visualizar postagens, interagir com elas e compartilhar conteúdo.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas, React, Figma",
            websiteURL: "https://pablo147dias.github.io/codeconnect-feed/",
            codeURL: "https://github.com/Pablo147dias/codeconnect-feed",
        },
    ]

    return (
        <section id="projects" className="bg-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                        Projetos
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <AnimationComponent key={index} moveDirection={index % 2 == 0 ? "right" : "left"}>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection


