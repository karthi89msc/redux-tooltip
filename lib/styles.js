'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var base = exports.base = {
  padding: 0,
  fontSize: 0,
  lineHeight: 0,
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 9999,
  width: 'auto',
  overflow: 'visible'
};

var content = exports.content = {
  overflow: 'hidden'
};

var arrow = exports.arrow = {
  base: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  }
};

var border = exports.border = {
  base: {
    display: 'block',
    width: 0,
    height: 0,
    position: 'absolute'
  },
  top: {
    borderLeft: '9px solid transparent !important',
    borderRight: '9px solid transparent !important',
    borderTop: '9px solid',
    bottom: '-7px',
    left: 0,
    right: 0,
    margin: '0 auto'
  }
};