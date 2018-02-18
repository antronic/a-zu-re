import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import {hydrate, injectGlobal} from 'emotion';
import styled from 'react-emotion';
import { connect } from 'react-redux';

import { player, menu } from './games/start';
import { allMenu } from './games/mainGame';

import Main from './pages/Main';

import { setPlayer, setMenu } from './ducky/app'

const Background = styled.div`
  background-color: #f00;
`;

const Frame = styled.div`
  border: 5px solid #000;
  border-top-width: 80px;
  border-left-width: 20px;
  border-right-width: 20px;
  border-bottom-width: 80px;
  border-radius: 35px;
  width: 410px;
  height: 800px;
`;

const Display = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

const StatusBar = styled.div`
  width: 100%;

  font-size: 10pt;

  background-color: #aaa;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const Phone = ({ children, setPlayer, setMenu }) => (
  <Frame>
    <Display>
      <StatusBar>
        <div style={{
        }}>
          <span className="fa fa-signal"></span>
        </div>
        <div>09:41</div>
        <div>
          <span className="fa fa-battery-three-quarters"></span>
        </div>
      </StatusBar>
      { children }
    </Display>
  </Frame>
);

class App extends Component {
  componentWillMount() {
    injectGlobal`
      @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
      body {
        background: #e4e4e4;
        margin: 0;
        font-family: Roboto, sans-serif;
        font-weight: 300;
      }

      html, body, #root {
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }
    `
    const newMenu = menu;
    newMenu.currentMenu = allMenu[0];

    Object.assign(newMenu.buttonShow.player, {}, player)

    this.props.setMenu(Object.assign({}, newMenu));
  }

  render() {
    return (
      <Router>
        <div style={{
          height: '100%',
          'display': 'flex',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Phone>
            <Route exact path="/" component={Main}/>
          </Phone>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  player: state.app.player,
})

export default connect(mapStateToProps, { setPlayer, setMenu })(App);
