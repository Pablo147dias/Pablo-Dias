import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const About: React.FC = () => {

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Inglês", "Material UI", "CNH:AB", "Figma", "Tailwind"
    ]

    return (
        <section className="bg-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Title */}
                <div id="about" className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                        Sobre Mim
                    </h2>
                </div>

                {/* Experience and Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <AnimationComponent moveDirection="right">
                        <div className="border-2 border-emerald-600 border-opacity-30 rounded-xl p-8 bg-slate-900 hover:bg-slate-700 transition-all duration-300 text-center">
                            <WorkspacePremiumIcon sx={{ fontSize: 40, color: "#4f8e3e", marginBottom: "1rem" }} />
                            <h3 className="text-xl font-bold text-white mb-2">Experiência</h3>
                            <p className="text-emerald-500 font-semibold mb-2">Mais de 1 ano</p>
                            <p className="text-gray-300">Frontend Development</p>
                        </div>
                    </AnimationComponent>

                    <AnimationComponent moveDirection="left">
                        <div className="border-2 border-emerald-600 border-opacity-30 rounded-xl p-8 bg-slate-900 hover:bg-slate-700 transition-all duration-300 text-center">
                            <SchoolIcon sx={{ fontSize: 40, color: "#4f8e3e", marginBottom: "1rem" }} />
                            <h3 className="text-xl font-bold text-white mb-2">Formação</h3>
                            <p className="text-gray-300">Bacharelado em Ciências da Computação</p>
                            <p className="text-gray-400 text-sm">Faculdade Descomplica</p>
                        </div>
                    </AnimationComponent>
                </div>

                {/* Bio */}
                <div className="max-w-3xl mx-auto mb-12">
                    <p className="text-gray-300 text-center leading-relaxed text-base md:text-lg">
                        Sou Pablo Dias, estudante de Ciência da Computação com foco em desenvolvimento Full Stack. Estou em transição de carreira após experiências profissionais em áreas como logística, montagem, TI e manutenção. Há mais de um ano venho me dedicando intensamente ao estudo de programação, com foco em desenvolvimento web, utilizando tecnologias modernas como HTML, CSS, JavaScript, React, Node.js e bancos de dados relacionais e não relacionais.
                    </p>
                    <p className="text-gray-300 text-center leading-relaxed text-base md:text-lg mt-4">
                        Atualmente estudo pela Faculdade Descomplica, e complemento minha formação em plataformas como Alura e Estudonauta. Participo ativamente de projetos pessoais, cursos práticos e desafios de codificação para consolidar o aprendizado. Tenho compromisso com boas práticas de desenvolvimento, versionamento com Git, organização de código e resolução de problemas de forma lógica e eficiente.
                    </p>
                    <p className="text-gray-300 text-center leading-relaxed text-base md:text-lg mt-4">
                        Meu objetivo é atuar como estagiário ou desenvolvedor júnior em uma equipe colaborativa, onde possa aplicar meus conhecimentos, aprender com profissionais mais experientes e contribuir de forma concreta para o crescimento dos projetos. Estou preparado para lidar com responsabilidades, prazos e a constante evolução que a área de tecnologia exige.
                    </p>
                </div>

                <hr className="border-emerald-600 border-opacity-20 mb-12" />

                {/* Skills Section */}
                <div id="skills" className="mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                        Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {skillsSet.map((skill, index) => (
                            <div
                                key={index}
                                className="border-2 border-emerald-600 border-opacity-30 rounded-lg p-4 bg-slate-900 hover:bg-slate-700 transition-all duration-300 text-center cursor-pointer hover:border-emerald-600 hover:shadow-lg hover:shadow-accent-green/20"
                            >
                                <p className="text-white font-medium">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About


