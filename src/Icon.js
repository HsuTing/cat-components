'use strict';

import React from 'react';
import radium from 'radium';

@radium
export default class Icon extends React.Component {
  render() {
    return (
      <svg width='400'
           height='400'
           viewBox='0 0 800 800'
           {...this.props}
      >
        <title>Hsu Ting</title>
        <path d='M390,222.19q9.93,0,9.8,10.73l-4.5,33.78q-.27,6-5.17,6-5.3,0-5.43-6l-4.38-33.78Q379.92,222.19,390,222.19Zm16.29,10.73q-.4-10.73,9.67-10.73t9.8,10.73l-4.5,33.78q-.27,6-5.17,6-5.3,0-5.43-6Z'/>
        <path d='M263.54,434.4a12.54,12.54,0,0,1-10.37-5.46l-50.9-74.33a12.56,12.56,0,0,1-.54-13.32l50.9-89.2a12.56,12.56,0,1,1,21.81,12.45l-47,82.37,46.46,67.84a12.56,12.56,0,0,1-10.35,19.65Z'/>
        <path d='M277.92,241.5a12.56,12.56,0,0,1-10.67-19.16l31.53-51a12.56,12.56,0,0,1,20.87-.74l36.79,51a12.56,12.56,0,1,1-20.37,14.69l-25.8-35.77-21.65,35A12.56,12.56,0,0,1,277.92,241.5Z'/>
        <path d='M536.46,434.4a12.56,12.56,0,0,1-10.35-19.65l46.46-67.84-47-82.37a12.56,12.56,0,1,1,21.81-12.45l50.9,89.2a12.56,12.56,0,0,1-.54,13.32l-50.9,74.33A12.54,12.54,0,0,1,536.46,434.4Z'/>
        <path d='M522.08,241.5a12.54,12.54,0,0,1-10.69-6l-21.66-35-25.79,35.77a12.56,12.56,0,1,1-20.37-14.69l36.78-51a12.33,12.33,0,0,1,10.63-5.2,12.55,12.55,0,0,1,10.23,5.95l31.53,51a12.56,12.56,0,0,1-10.67,19.16Z'/>
        <path d='M312.47,349.65a15.07,15.07,0,0,1-15.07-15.07V324.24a15.07,15.07,0,0,1,30.14,0v10.34A15.07,15.07,0,0,1,312.47,349.65Z'/>
        <path d='M493.31,352.08A15.07,15.07,0,0,1,478.24,337V326.67a15.07,15.07,0,1,1,30.14,0V337A15.07,15.07,0,0,1,493.31,352.08Z'/>
        <path d='M442.74,415.69l-31.16-55.54,19.18-33.69A12.56,12.56,0,0,0,408.93,314L351.1,415.62A12.56,12.56,0,1,0,372.93,428l24.14-42.41L420.83,428a12.56,12.56,0,0,0,21.91-12.29Z'/>
      </svg>
    );
  }
}
