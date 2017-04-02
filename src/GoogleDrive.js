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
    updateSigninStatus: React.PropTypes.func.isRequired,
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
  }

  componentDidMount() {
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
    this.props.updateSigninStatus(isSignedIn);
    this.setState({isSignedIn});
  }

  authClick(e) {
    const {authClick} = this.props;

    if(authClick)
      authClick(e);

    gapi.auth2.getAuthInstance().signIn();
  }

  signoutClick(e) {
    const {signoutClick} = this.props;

    if(signoutClick)
      signoutClick(e);

    gapi.auth2.getAuthInstance().signOut();
  }
}
