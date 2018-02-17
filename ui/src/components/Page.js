import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';

let Page = ({ children, className }) => (
  <div className={className}>{children}</div>
);

Page = styled(Page)`
  background: #80BFFF;
  color: #37699b;

  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;

  font-family: 'Press Start 2P', cursive;
`;

export default connect()(Page);
