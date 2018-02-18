import React from 'react';
import styled from 'react-emotion';

let Background = styled('div')`
  z-index: 1000;
  position: absolute;
  background: rgba(0, 0, 0, .25);
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Button = styled('button')`
  -webkit-appearance: none;
  outline: none;
  font-family: 'Press Start 2P', cursive;
  border: 2px solid #707070;
  text-align: center;
  width: 90%;
  font-size: 13pt;
  color: #525252;
  line-height: 28pt;
  text-transform: uppercase;
  margin-top: 10px;
`

function listButtons(buttons) {
  return buttons.map((button, index) => (
    <Button key={index} onClick={ button.action }>
      <span>{ button.title }</span>
    </Button>
  ))
}

const Modal = ({ active, buttons, onDismiss, title }) => {
  return (active) ? (
    <Background onClick={onDismiss}>
      <div style={{
        marginTop: '1em',
        background: '#f2f2f2',
        boxShadow: '5px 5px 0px 0px #cbcbcb',
        width: '95%',
        height: '60%',
        textAlign: 'center',
      }}>
        <h2 style={{ marginBottom: '15px', textAlign: 'center', color: '#525252' }}>{ title }</h2>

        <div style={{
          height: '80%',
          overflow: 'scroll',
        }}>
          { listButtons(buttons) }
        </div>
      </div>
    </Background>
  ): (<div></div>);
}

Modal.defaultProps = {
  active: false,
  title: 'Modal Title',
  buttons: [
    {
      title: 'Test',
      action: (() => { alert('Test') }),
    },
    {
      title: 'Test',
      action: (() => { alert('Test') }),
    }
  ],
}

export default Modal;
