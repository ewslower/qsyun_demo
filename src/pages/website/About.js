/* jshint esversion: 6 */

import React from 'react';
import styles from '../../styles/website/about.module.scss';
import Header from './component/Header';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import about_banner from '../../static/images/about_banner.png';

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  onMenu = (path) => {
    this.props.history.push(path)
  }
  
  render(){
    return(
      <div className={styles.qsyun_website_about}>
        <Header onMenu={(path) => this.props.history.push(path)}/>
        <div className='qsyun_website_about_banner'>
          <img src={about_banner} alt=''/>
          <div className='qsyun_website_bannerCard_contentWrap dFlex flexColumn alignItemsCenter justifyCenter'>
            <div className='qsyun_website_bannerCard_title'>
              关于我们
            </div>
            <div 
              className='qsyun_website_bannerCard_button'
              onClick={() => this.onMenu('/landing')}
            >
              立即体验
            </div>
          </div>
        </div>
        <div className='qsyun_website_about_content dFlex flexColumn alignItemsCenter'>
          <div className='qsyun_website_about_textSection'>
            <div className='qsyun_website_about_text'>
              团队由资深环保工程师、海外背景资深软件工程师、985高校、设计院等拥有出色教育和工作背景的成员组成。
            </div>
            <div className='qsyun_website_about_text'>
              致力于将新科技转化为生产力，辅助污水处理厂规划、设计方案与运营决策。基于独家的AI设计引擎，打造主产品-人工智能设计云平台，提供分析-设计-运营-管理全流程增效方案，并以AI+服务应用于环保项目全周期，提高产业效率。
            </div>
            <div className='qsyun_website_about_text'>
              将为万千企业提供智能环保产品与服务，协助企业在新一轮挑战中降本增效、提升价值。
            </div>
          </div>
          <SubCard onMenu={(path) => this.props.history.push(path)}/>
        </div>
        <Footer onMenu={(path) => this.props.history.push(path)}/>
      </div>
    )
  }
}