import React, { Component } from 'react';
import VisibleCreateUser from '../containers/VisibleCreateUser';
import VisibleChatLog from '../containers/VisibleChatLog';
import VisibleUserPanels  from '../containers/VisibleUserPanels';

const MonsterChat = () => (
      <div>
        <img style={{position: 'fixed'}} src="../content/logo.jpg"/>
        <h1 style={{textAlign: 'center',marginBottom: '25px'}}>Monster Chat</h1>
          <div className="row">
            <div className="small-6 columns">
              <VisibleCreateUser/>
              <VisibleUserPanels/>
            </div>
            <div className="small-5 columns end">
              <VisibleChatLog/>
            </div>
          </div>
      </div>
)

export default MonsterChat
