/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../styles/website/component/subCard.module.scss';

export default class SubCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  };

  onMenu = (path) => {
    this.props.onMenu(path);
  };

  render(){
    return(
      <div className={styles.qsyun_website_subCard}>
        <div className='qsyun_website_subCard_title'>
          深研百万方案，受教千人经验，集行业智慧，助产业增效
        </div>
        {/* <div className='qsyun_website_subCard_description'>
          深研百万方案，受教千人经验，集行业智慧，助产业增效
        </div> */}
        <div 
          className='qsyun_website_subCard_button'
          onClick={() => this.onMenu('/landing')}
        >
          立即体验
        </div>
      </div>
    )
  }
}