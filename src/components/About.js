import '../css/About.css'
import aboutImage from '../assets/about-bg.jpg';

function About () {
    return <div className="about-padge main-container">
                <img src={aboutImage} alt='star wars'/>
                <div className='content'>
                    <h1>Welcome to our Star Wars website!</h1>
                    <p>We're excited to share with you our love for the epic space saga that has captured the imaginations of millions of fans around the world.</p>
                    <p>Since the release of the original Star Wars movie in 1977, the franchise has expanded into a vast universe of stories, characters, and adventures. From the classic trilogy that introduced us to Luke Skywalker, Princess Leia, and Han Solo, to the prequels that explored the origins of the Jedi Order and the rise of Darth Vader, to the new trilogy that brought us the next generation of heroes and villains, the Star Wars movies have entertained and inspired generations of fans.</p>
                    <p>But the movies are only one part of the Star Wars universe. There are also TV shows, books, comics, video games, and more that explore the galaxy far, far away in even greater depth. Whether you're a die-hard fan or a newcomer to the franchise, there's always something new to discover and enjoy.</p>
                    <p>At our website, we aim to provide you with the latest news, reviews, and insights on all things Star Wars movies. From updates on upcoming films to in-depth analysis of classic moments, we'll be your guide through the vast and exciting world of Star Wars cinema. Join us on this epic journey and may the Force be with you!</p>
                </div>  
            </div>
}

export default About;