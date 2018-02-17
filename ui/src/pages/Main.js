import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import Progress from 'react-progressbar';

import Page from '../components/Page';

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

let MainPage = ({ age, className, money }) => (
  <Page>
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
        ${money}
      </div>
      <div style={{
      }}>
        {age}Y
      </div>
    </div>

    <div>
      <Stage/>
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
            width: '80%',
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
            width: '40%',
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
    }}>

      <div style={{
        width: '200px',
        background: '#5e87af',
        position: 'absolute',
        bottom: '100%',
        color: '#fff',
        padding: '0 10px',
      }}>
        <a href="#" style={{ lineHeight: '16pt', textDecoration: 'none', color: '#fff' }}>
          <p>Go</p>
        </a>
        <a href="#" style={{ lineHeight: '16pt', textDecoration: 'none', color: '#fff' }}>
          <p>Action</p>
        </a>
      </div>
      <MenuButton>
        <span className="fa fa-bars"></span>
      </MenuButton>
    </div>

  </Page>
);

MainPage = styled(MainPage)`
  background: #f00;
`;

const mapStateToProps = state => ({
  money: state.app.money,
  age: state.app.age,
})

export default connect(mapStateToProps)(MainPage);
