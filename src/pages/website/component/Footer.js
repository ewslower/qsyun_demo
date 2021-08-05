/* jshint esversion: 6 */

import React from 'react';
import {
  Col,
  Row
} from 'antd';
import styles from '../../../styles/website/component/footer.module.scss';
import qrCode from '../../../static/images/qrCode.jpg';

export default class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  onMenu = (path) => {
    this.props.onMenu(path)
  }

  render(){
    return(
      <div className={styles.qsyun_website_footer}>
        <div className='qsyun_website_contentWrap'>
          <Row gutter={16}>
            <Col 
              span={4} 
              className='qsyun_website_footer_section'
            >
              <div 
                className='qsyun_website_logo'
                onClick={() => this.onMenu('/')}
              >
                青水云
              </div>
            </Col>
            <Col 
              span={5}
              className='qsyun_website_footer_section'
            >
              <div className='qsyun_website_footer_title'>关注我们</div>
              <div className='qrCode'>
                <img src={qrCode} alt='请关注公众号'/>
              </div>
            </Col>
            <Col 
              span={5}
              className='qsyun_website_footer_section'
            >
              <div className='qsyun_website_footer_title'>产品服务</div>
              <div 
                className='qsyun_website_footer_link'
                onClick={() => this.onMenu('/h/plan')}
              >
                智能设计平台
              </div>
              <div 
                className='qsyun_website_footer_link'
                onClick={() => this.onMenu('/h/bim')}
              >
                BIM 5D设计
              </div>
              <div 
                className='qsyun_website_footer_link'
                onClick={() => this.onMenu('/h/operation')}
              >
                智慧运营平台
              </div>
            </Col>
            <Col 
              span={5}
              className='qsyun_website_footer_section'
            >
              <div className='qsyun_website_footer_title'>解决方案</div>
              <div 
                className='qsyun_website_footer_link'
                onClick={() => this.onMenu('/h/designer')}
              >
                我是设计方
              </div>
              <div 
                className='qsyun_website_footer_link'
                onClick={() => this.onMenu('/h/constructer')}
              >
                我是运营方
              </div>
            </Col>
            <Col 
              span={5}
              className='qsyun_website_footer_section'
            >
              <div className='qsyun_website_footer_title'>联系电话（微信同号）</div>
              <div className='qsyun_website_footer_link'>13982266182</div>
              <div style={{height: '48px'}}></div>
              <div className='qsyun_website_footer_title'>电子邮箱</div>
              <div className='qsyun_website_footer_link'>wang@ecoiiot.com</div>
              <div style={{height: '48px'}}></div>
              <div className='qsyun_website_footer_title'>通讯地址</div>
              <div className='qsyun_website_footer_link'>成都市高新区</div>
              <div className='qsyun_website_footer_link'>天府软件园</div>
            </Col>
          </Row>
          <div className='qsyun_website_footer_bottomInfo dFlex flexColumn alignItemsCenter'>
            <div>
              Copyright © 2020 Ecoiiot Technology. All rights reserved.
            </div>
            <div className='dFlex flexRow alignItemsCenter'>
              备案号：蜀ICP备18032694号-1
            </div>
          </div>
        </div>
      </div>
    )
  }
}