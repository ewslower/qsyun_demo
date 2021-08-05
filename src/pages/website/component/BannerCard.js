/* jshint esversion: 6 */

import React from 'react';
import {
  Col,
  Row
} from 'antd';
import styles from '../../../styles/website/component/bannerCard.module.scss';

export default class BannerCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  onMenu = (path) => {
    this.props.onMenu(path)
  }

  render(){
    const {
      title,
      description,
      imgUrl,
      btnName,
    } = this.props;

    return(
      <div className={styles.qsyun_website_bannerCard}>
        <Row className='qsyun_website_bannerCard_contentWrap'>
          <Col span={20}>
            <div className='qsyun_website_bannerCard_title'>
              {title}
            </div>
            <div className='qsyun_website_bannerCard_description'>
              {description}
            </div>
            <div 
              className='qsyun_website_bannerCard_button'
              onClick={() => this.onMenu('/landing')}
            >
              {btnName}
            </div>
          </Col>
          <Col span={4}>
            <img src={imgUrl} alt='' />
          </Col>
        </Row>
      </div>
    )
  }
}