import profile from '../images/profile.jpeg';
import projectOne from '../images/project-01.jpg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

export const headData = {
    title: 'Vitor Portfolio 📚',
    lang: 'en',
    description: 'Welcome to my website',
};

export const heroData = {
    name: 'Vitor',
    about: 'front-end developer.',
};

export const aboutData = {
    image: profile,
    paragraphOne: `My name is Vitor Hugo Fernandes, I've been studying front end development in this year of 2020, focusing my skillset mostly on React. I'm looking forward to working with React in a real application so I could add to the team and be helpful as a junior developer.`,
    paragraphTwo: `I am 25 years old, and I'm located in Curitiba, state of Paraná, Brazil. And my past jobs are all related to administration and project management.`,
    technologies: '',
    resume: '',
};

export const projectsData = [
    {
        number: 1,
        img: projectOne,
        title: 'NotYourUsualMusic',
        description: '',
        languages: 'HTML, CSS, JavaScript and Netlify',
        liveDemo: 'https://vitorhfs-portfolio.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/NotYourUsualMusic',
    },
    {
        number: 2,
        img: projectOne,
        title: 'Demonstration Page',
        description: '',
        languages: 'React, Sass and Netlify',
        liveDemo: 'https://vitorhfs-portfolio.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/NotYourUsualMusic',
    },
    {
        number: 3,
        img: projectOne,
        title: 'Something using API',
        description: '',
        languages: 'React, Sass and Netlify',
        liveDemo: 'https://vitorhfs-portfolio.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/NotYourUsualMusic',
    }
];

export const contactData = {
    text: `Would you like for us to work together? Let's Talk!`,
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