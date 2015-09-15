
"use strict";

import React from 'react';
import {tabs} from '../../constants/AppConstants';
import Navbar from '../Navbar/Navbar';
import {Tab1, Tab2, Tab3} from '../TabContents';

class Tab extends React.Component {
  render() {
    let content;
    let navName;
    let ctx = this;
    switch(this.props.name){
      case 'tab1':
        content = <Tab1 />;
        break;
      case 'tab2':
        content = <Tab2 />;
        break;
      case 'tab3':
        content = <Tab3 />;
        break;
      default:
        content = <Tab2 />;
        break;
    }
    tabs.forEach((tab) => {
      if(tab.name === ctx.props.name) {
        navName = tab.navName;
      }
    });
    return (
      <div id={this.props.name} className='view tab'>
        <Navbar name={navName}/>
        <div className='pages navbar-fixed'>
          <div data-page={'page-' + this.props.name} className="page">
            <div className="page-content">
              <div className="content-block">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
