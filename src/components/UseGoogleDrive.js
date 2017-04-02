'use strict';

import React from 'react';
import radium from 'radium';

import GoogleDrive from './../GoogleDrive';

const clientId = '490149305457-0ql2dk9sf50gf8j9m1bie940ugm55k2q.apps.googleusercontent.com';

@radium
export default class UseGoogleDrive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      info: [],
    };

    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.authClick = this.authClick.bind(this);
    this.signoutClick = this.signoutClick.bind(this);
    this.listFiles = this.listFiles.bind(this);
  }

  render() {
    const {isSignedIn, info} = this.state;

    return (
      <div>
        <GoogleDrive clientId={clientId}
                     updateSigninStatus={this.updateSigninStatus}
                     authClick={this.authClick}
                     signoutClick={this.signoutClick}
        >
          <button>{isSignedIn ? 'Sign out' : 'Authorize' }</button>
        </GoogleDrive>
        {info && info.length > 0 ?
          info.map((data, index) => {
            return (
              <div key={index}>
                <h4>{`Item ${index}:`}</h4>
                <p>{`ID: ${data.id}`}</p>
                <p>{`Name: ${data.name}`}</p>
              </div>
            );
          }) : (
            <p>No files found.</p>
          )
        }
      </div>
    );
  }

  listFiles() {
    gapi.client.drive.files.list({
      pageSize: 2,
      fields: 'nextPageToken, files(id, name)'
    }).then(function(response) {
      this.setState({info: response.result.files});
    }.bind(this));
  }

  updateSigninStatus(isSignedIn) {
    if(isSignedIn)
      this.listFiles();

    this.setState({isSignedIn});
  }

  authClick() {
    console.log('auth');
  }

  signoutClick() {
    console.log('sign out');
  }
}
