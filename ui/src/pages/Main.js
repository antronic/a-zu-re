import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Page from '../components/Page';
import Modal from '../components/Modal';

import { setMenu, setDie } from '../ducky/app';

let Stage = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Stage = styled(Stage)`
  border: 5px solid #37699b;
  width: 340px;
  height: 340px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background: #fff;
`;

let MenuButton = styled('button')`
  -webkit-appearance: none;
  outline: none;
  border: 0;
  width: 55px;
  height: 55px;
  background: #5d87b1;
  color: #fff;
  font-size: 25pt;
`

const MainPage = class MainPage extends Component {
  state = {
    modalActive: false,
    modalTitle: 'Modal',
    modalKey: 'go',

    menuActive: false,
  }

  getImage() {
    let name = '';

    switch (`${this.props.menu.currentMenu.name}`.toLowerCase()) {
      case 'house':
        switch (this.props.menu.buttonShow.player.assets[0].lv) {
          case 1:
            name = 'house1.png';
          break;
          case 2:
            name = 'house2.png';
          break;
          case 3:
            name = 'house3.png';
          break;
          case 4:
            name = 'house4.png';
          break;
          case 5:
            name = 'house5.png';
          break;
          default:
            name = 'house1.png';
        }
        break;
      case 'hospital':
        name = 'hospital.png';
        break;
      case 'office':
        name = 'Office.png';
        break;
      case 'police station':
        name = 'Police.png';
        break;
      case 'school':
        name = 'school.png';
        break;
      case 'convinient store':
        name = 'supermarket.png';
        break;
      case 'university':
        name = 'university.png';
        break;
      default:
        name = 'cloud.png';
    }

    return '/img/' + name;
  }

  normalizeTime(time) {
    return '' + ((time <= 9) ? '0' : '') + time;
  }

  openModal(title, key) {
    this.setState({
      modalActive: !this.state.modalActive,
      modalTitle: title,
      modalKey: key,

      menuActive: false,
    })
  }

  componentWillMount() {
    if (this.props.menu.buttonShow.player.health <= 0) {
      this.props.setDie(true);  
    }
  }

  render() {
    const player = this.props.menu.buttonShow.player;

    return (
      <Page>
        <Modal onDismiss={() => { this.setState({modalActive: !this.state.modalActive}) }}
          active={this.state.modalActive}
          title={this.state.modalTitle}
          buttons={this.props.menu.currentMenu[this.state.modalKey].map(m => ({ title: m.name, action: () => {
            const newMenu = this.props.menu;
            switch(this.state.modalKey) {
              case 'go': {
                Object.assign(newMenu.currentMenu, {}, m.destination(this.props.menu));
                break;
              }
              case 'action': {
                newMenu.currentMenu.player = m.action(this.props.menu.buttonShow.player)
                break;
              }
            }
            this.props.setMenu(Object.assign({}, newMenu))
          } }))}/>
        <div className="title">
          <div style={{
            height: '90px',
            width: '100%',
          }}>
            <img style={{ width: '90%', position: 'absolute', top: '-50px' }} src="/img/cloud.png" alt=""/>
            <h2 style={{
              textShadow: '3px 3px 0px #bebebe',
              textAlign: 'center',
              position: 'absolute',
              width: '100%',
            }}>A-ZU-RE</h2>
          </div>
        </div>

        <div style={{
          display: 'flex',
          padding: '0 15px',
          justifyContent: 'space-between',
        }}>
          <div style={{
          }}>
            ${player.money}
          </div>
          <div style={{
          }}>
            {player.age}Y
          </div>
        </div>

        <div>
          <Stage>
            <img width="100%" src={this.getImage()} alt=""/>
          </Stage>
        </div>

        <div style={{
          display: 'flex',
          padding: '0 15px',
          justifyContent: 'space-between',
        }}>
          <div style={{
          }}>
            <p>Energy</p>
            <div style={{
              width: '140px',
              height: '12px',
              background: '#d0d0d0',
            }}>
              <div style={{
                width: `${player.energy}%`,
                height: '100%',
                background: '#4bcc40',
              }}></div>
            </div>
          </div>

          <div style={{
          }}>
            <p>Health</p>
            <div style={{
              width: '140px',
              height: '12px',
              background: '#d0d0d0',
            }}>
              <div style={{
                width: `${player.health}%`,
                height: '100%',
                background: '#4bcc40',
              }}></div>
            </div>
          </div>

        </div>

        <div style={{
          background: '#37699b',
          position: 'absolute',
          width: '100%',
          height: '55px',
          bottom: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}>

          <div style={{
            width: '200px',
            background: '#5e87af',
            position: 'absolute',
            bottom: '100%',
            color: '#fff',
            padding: '0 10px',

            display: (this.state.menuActive) ? 'block' : 'none',
          }}>
            <a onClick={() => { this.openModal('GO', 'go') }} href="#" style={{ lineHeight: '16pt', textDecoration: 'none', color: '#fff' }}>
              <p>Go</p>
            </a>
            <a onClick={() => { this.openModal('ACTION', 'action') }} href="#" style={{ lineHeight: '16pt', textDecoration: 'none', color: '#fff' }}>
              <p>Action</p>
            </a>
          </div>
          <MenuButton onClick={() => {
            this.setState({
              menuActive: !this.state.menuActive,
            })
          }}>
            <span className="fa fa-bars"></span>
          </MenuButton>

          <p style={{ alignSelf: 'flex-end', color: '#fff' }}>
            {this.normalizeTime(player.time.hour)}:{this.normalizeTime(player.time.minute)}
          </p>
        </div>

      </Page>
    )
  }
}

const mapStateToProps = state => ({
  menu: state.app.menu,
})

export default withRouter(connect(mapStateToProps, { setMenu, setDie })(MainPage));
