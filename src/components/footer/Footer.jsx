import React from 'react';
import Fade from 'react-reveal/Fade';
import GitHubButton from 'react-github-btn'
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

const Footer = () => {

    return (
        <div className="footer-container">
            <Fade bottom duration={1000}>
                <div className="social-images">
                    <a href={'https://twitter.com/vitorhfs'}><img className="img-social" src={twitter} alt={'twitter'} /></a>
                    <a href={'https://www.linkedin.com/in/vitor-hugo-fernandes-57b95a89/'}><img className="img-social" src={linkedin} alt={'linkedin'} /></a>
                    <a href={'https://www.github.com/vitorhfs'}><img className="img-social" src={github} alt={'github'} /></a>
                </div>
                <div className="footer-credits">
                <p>©{new Date().getFullYear()} - Página criada por <a href="http://github.com/vitorhfs">Vitor Hugo</a></p>
                </div>
                <GitHubButton href="https://github.com/vitorhfs/gatsby-portfolio" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
                <GitHubButton href="https://github.com/vitorhfs/gatsby-portfolio/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork vitorhfs/flexboxwebsite on GitHub">Fork</GitHubButton>
            </Fade>
        </div>
    )
}

export default Footer;