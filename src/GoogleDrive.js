'use strict';

import React from 'react';
import radium from 'radium';

const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

@radium
export default class GoogleDrive extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    clientId: React.PropTypes.string.isRequired,
    updateSigninStatus: React.PropTypes.func,
    authClick: React.PropTypes.func,
    signoutClick: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };

    this.handleClientLoad = this.handleClientLoad.bind(this);
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
    this.authClick = this.authClick.bind(this);
    this.signoutClick = this.signoutClick.bind(this);

    this.handleClientLoad();
  }

  render() {
    const {isSignedIn} = this.state;
    const {children} = this.props;

    return React.cloneElement(children, {
      onClick: isSignedIn ? this.signoutClick : this.authClick
    });
  }

  handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
  }

  initClient() {
    const {clientId} = this.props;

    gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId,
      scope: SCOPES
    }).then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  updateSigninStatus(isSignedIn) {
    if(this.props.updateSigninStatus)
      this.props.updateSigninStatus(isSignedIn);

    this.setState({isSignedIn});
  }

  authClick() {
    if(this.props.authClick)
      this.props.authClick();

    gapi.auth2.getAuthInstance().signIn();
  }

  signoutClick() {
    if(this.props.signoutClick)
      this.props.signoutClick();

    gapi.auth2.getAuthInstance().signOut();
  }
}
