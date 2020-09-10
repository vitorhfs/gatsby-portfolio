import profile from '../images/profile.jpeg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import projectOne from '../images/project-01.png';
import projectTwo from '../images/project-02.png';
import projectThree from '../images/project-03.png';


export const headData = {
    title: 'Vitor Portfolio 📚',
    lang: 'pt',
    description: 'Bem vindo!',
};

export const heroData = {
    name: 'Vitor',
    about: 'desenvolvedor front-end.',
};

export const aboutData = {
    image: profile,
    paragraphOne: `Me chamo Vitor Hugo Fernandes, tenho 25 anos e moro em Curitiba/PR. Venho trabalhando nos últimos meses em aumentar minha experiência com aplicações e com linguagens de programação em front end. Conheço muito bem HTML e CSS, principalmente focado em usabilidade e responsividade, inclusive utilizando Sass para melhorar a estrutura do meu código. Também tenho conhecimentos concisos de Javascript ES6 e React, focando sempre em DOM, conexão com API e em Hooks tratando-se de React.`,
    paragraphTwo: `Trabalhei sempre com administração de projetos e de empresas, mas nunca trabalhei na área de desenvolvimento, busco experiência como desenvolvedor front-end junior.`,
    technologies: '',
    resume: 'https://drive.google.com/file/d/1MaSxFZgQn--WhY_9XMRnef4DzGnQKwF6/view?usp=sharing',
};

export const projectsData = [
    {
        number: 1,
        img: projectOne,
        title: 'Grass Mowers',
        description: 'Um modelo de site baseado em empresas em formato de SPA (single page application).',
        languages: 'React, Sass, Router, Helmet e Netlify',
        liveDemo: 'https://grassmowers.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/landing-spa-react',
    },
    {
        number: 2,
        img: projectTwo,
        title: 'Radio Colagem',
        description: `Página simples com função interativa solicitada pela cliente que altera a imagem de fundo de acordo com a edição da playlist, além de uma playlist do spotify em embed.`,
        languages: 'HTML, Javascript, Sass e Netlify',
        liveDemo: 'https://radiocolagem.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/radio-colagem',
    },
    {
        number: 3,
        img: projectThree,
        title: 'Curitiba Clima',
        description: 'Página que simula app que clima direcionado para a cidade de Curitiba, utilizando dados de clima do API da OpenWeather.',
        languages: 'HTML, Javascript, Sass and Netlify',
        liveDemo: 'https://vitorhfs-portfolio.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/NotYourUsualMusic',
    }
];

export const contactData = {
    text: `Vamos trabalhar juntos?`,
    link: 'mailto:vitorhugo.fernandes12@gmail.com'
};

export const footerData = {
        twitter: {
            id: 11,
            img: twitter,
            name: 'Twitter',
            url: 'https://twitter.com/vitorhfs'
        },
        linkedin: {
            id: 12,
            img: linkedin,
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/vitor-hugo-fernandes-57b95a89/'
        },
        github: {
            id: 13,
            img: github,
            name: 'Github',
            url: 'https://www.github.com/vitorhfs'
        }
};