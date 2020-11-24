import profile from '../images/profile.jpeg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import projectOne from '../images/project-01.png';
import projectTwo from '../images/project-02.jpg';
import projectThree from '../images/project-03.jpg';
import projectFour from '../images/project-04.jpg';
import projectFive from '../images/project-05.jpg';

export const headData = {
    title: 'Vitor Portfolio 📚',
    lang: 'pt',
    description: 'Bem vindo!',
};

export const enHeadData = {
    title: 'Vitor Portfolio 📚',
    lang: 'en',
    description: 'Welcome!',
};

export const heroData = {
    name: 'Vitor',
    greeting: 'Oi!',
    call: `Sou o `,
    about: 'desenvolvedor front-end.',
};

export const enHeroData = {
    name: 'Vitor',
    greeting: 'Hi!',
    call: `I'm `,
    about: 'front-end developer.',
};

export const aboutData = {
    image: profile,
    paragraphOne: `Me chamo Vitor Hugo Fernandes, tenho 25 anos e moro em Curitiba/PR. Estudo desenvolvimento web desde o começo de 2020 e adquiri muito conhecimento sobre HTML, CSS, Javascript e os principais conceitos de programação e das ferramentas que precisamos. Hoje foco em desenvolver aplicações em React, tenho um ótimo entendimento de utilização de API's, de administração de estado na biblioteca (ContextAPI, Redux, Flux) e com seu formato de componentização mais recente, os Hooks. Também desenvolvo Rest API simples com Node.js.`,
    paragraphTwo: `Busco uma oportunidade como Desenvolvedor de Front End, principalmente com React, tenho preparo e determinação para fazer parte de um projeto em produção e trazer significado aonde eu estiver trabalhando.`,
    cv: 'Currículo',
    resume: 'https://drive.google.com/file/d/1pFaQcssnpKM-6Mxo3EY1EtKg6hrMOa1p/view?usp=sharing',
};

export const enAboutData = {
    image: profile,
    paragraphOne: `My name is Vitor Hugo Fernandes, I'm 25 years old and I live in Curitiba - Brazil. I study web deveolpment since the very beginning of this year, and I've acquired a very concise knowledge in HTML, CSS, Javascript and the fundamentals of programming as well as the tools that we use in our daily basis. Approximatedly since July I've been working with React in my applications, and I've developed experience in state management (Redux, ContextAPI), in API usage, and with the most recent component syntax that is Hooks. I also can build a simple Rest API with Node.js.`,
    paragraphTwo: `I'm searching for an opportunity at a company to show my skills as a developer and to bring meaning to an actual project in production.`,
    cv: 'My CV',
    resume: 'https://drive.google.com/file/d/1YBtG8tnqFt9lmrmYgyhg9kgasBBFYJRh/view?usp=sharing',
};

export const projectsData = [
    {
        number: 1,
        img: projectOne,
        title: 'Spotify UI Clone',
        description: 'Representação de UI do cliente do Spotify, recebe dados da API do Spotify e apresenta na tela os dados do cliente após login.',
        languages: 'React, Material-UI, SpotifyAPI, Netlify',
        liveDemo: 'https://spotify-uiclone.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/spotify-clone',
    },
    {
        number: 2,
        img: projectTwo,
        title: 'IP Address Tracker',
        description: `Aplicação web que mostra a localização de seu IP e também possibilita procurar por qualquer IP ou endereço válido.`,
        languages: 'React, leaflet, axios, SASS, IPify and Netlify',
        liveDemo: 'https://trackyourip.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/IP-address-tracker',
    },
    {
        number: 3,
        img: projectThree,
        title: 'Curitiba Clima',
        description: 'Página que simula app que clima direcionado para a cidade de Curitiba, utilizando dados de clima do API da OpenWeather.',
        languages: 'HTML, Javascript, Sass e Netlify',
        liveDemo: 'https://curitiba-clima.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/weather-app',
    },
    {
        number: 4,
        img: projectFour,
        title: 'CSS Illustration',
        description: 'Ilustração em CSS feita em Sass para um desafio do site frontendmentor para treinamento de pixel perfect design.',
        languages: 'HTML, Sass e Netlify',
        liveDemo: 'https://chatapp-illust.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/chat-app-css-illustration'
    },
    {
        number: 5,
        img: projectFive,
        title: 'Grass Mowers',
        description: 'Um modelo de site baseado em empresas em formato de SPA (single page application).',
        languages: 'React, Sass, Router, Helmet e Netlify',
        liveDemo: 'https://grassmowers.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/landing-spa-react',
    }
];

export const enProjectsData = [
    {
        number: 1,
        img: projectOne,
        title: 'Spotify UI Clone',
        description: `Representation of Spotify's web view capturing data from the Spotify API.`,
        languages: 'React, Material-UI, SpotifyAPI, Netlify',
        liveDemo: 'https://spotify-uiclone.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/spotify-clone',
    },
    {
        number: 2,
        img: projectTwo,
        title: 'IP Address Tracker',
        description: `Web application that shows your IP and its location, you can also search for any valid IP or internet address.`,
        languages: 'React, leaflet, axios, SASS, IPify and Netlify',
        liveDemo: 'https://trackyourip.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/IP-address-tracker',
    },
    {
        number: 3,
        img: projectThree,
        title: 'Curitiba Clima',
        description: 'Weather page that consumes the OpenWeatherAPI which provides live data from Curitiba, Brazil that changes background according to climate conditions.',
        languages: 'HTML, Javascript, Sass and Netlify',
        liveDemo: 'https://curitiba-clima.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/weather-app',
    },
    {
        number: 4,
        img: projectFour,
        title: 'CSS Illustration',
        description: 'HTML and CSS exercise from frontendmentor. Which the main challenge was to emulate a messaging app layout inside a simple page.',
        languages: 'HTML, Sass e Netlify',
        liveDemo: 'https://chatapp-illust.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/chat-app-css-illustration'
    },
    {
        number: 5,
        img: projectFive,
        title: 'Grass Mowers',
        description: 'A single page application simulating a simple company website',
        languages: 'React, Sass, Router, Helmet and Netlify',
        liveDemo: 'https://grassmowers.netlify.app/',
        sourceCode: 'https://github.com/vitorhfs/landing-spa-react',
    }
];

export const contactData = {
    text: `Vamos trabalhar juntos?`,
    link: 'mailto:vitorhugo.fernandes12@gmail.com',
    title: 'CONTATO'
};

export const enContactData = {
    text: `Let's work together?`,
    link: 'mailto:vitorhugo.fernandes12@gmail.com',
    title: 'CONTACT'
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