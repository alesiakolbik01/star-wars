import { Routes, Route } from "react-router-dom";
import React from "react";
import About from '../components/About';
import Home from '../components/Home';
import Heroes from "../components/Heroes";
import NoPage from "../components/NoPage";
import Layout from './Layout';
import '../css/App.css';

const imagesPath = {
  character: 'https://starwars-visualguide.com/assets/img/characters',
  films: 'https://starwars-visualguide.com/assets/img/films',
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSide: null
    };
  }

  changeMainThemeApp = (name) => {
    const root = document.getElementById('root');
    root.classList.remove(...root.classList);
    if(name !== 'reset')
    {
      root.classList.add('theme', name);
    }
  }

 handleChangeUserSide = (side) => {
    if(side === 'reset')
    {
      this.setState({userSide: null})
    }
    else
    {
      this.setState({userSide: side})
    }
    this.changeMainThemeApp(side);
 }

  render() {
    return (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home handleChangeUserSide= {this.handleChangeUserSide} side={this.state.userSide}/>} />
              <Route path="heroes" element={<Heroes path = {imagesPath.character}/>} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
    );
  }
}

export default App;