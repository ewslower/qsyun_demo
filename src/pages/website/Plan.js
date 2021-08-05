/* jshint esversion: 6 */

import React from 'react';
import styles from '../../styles/website/plan.module.scss';
import Header from './component/Header';
import BannerCard from './component/BannerCard';
import FeatureCard from './component/FeatureCard';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import bannerIcon from '../../static/images/design.png';
import plan_create from '../../static/images/plan_create.png';
import plan_editFlow from '../../static/images/plan_editFlow.png';
import plan_edit from '../../static/images/plan_edit.png';
import plan_pdfView from '../../static/images/plan_pdfView.png';
import plan_share from '../../static/images/plan_share.png';

export default class Plan extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  render(){
    return(
      <div className={styles.qsyun_website_plan}>
        <Header onMenu={(path) => this.props.history.push(path)}/>
        <BannerCard 
          title={'智能设计'}
          description={'经千万数据学习，数万专业工程师训练，一站交互实现设计方案构思、生成、编辑、输出'}
          imgUrl={bannerIcon}
          btnName={'立即体验'}
          onMenu={(path) => this.props.history.push(path)}
        />
        <div className='qsyun_website_plan_content dFlex flexColumn alignItemsCenter'>
          <div style={{height: '100px'}}></div>
          <FeatureCard 
            keyword={'智能设计'}
            title={'快速获得合规方案'}
            description={'上传项目信息后，通过智能生成，快速获得符合设计构思、满足指标、规范、排放标准的设计方案。简化设计流程，提高工作效率。'}
            imgUrl={plan_create}
            imgPosition={'right'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智能设计'}
            title={'云端设计流程图'}
            description={'无需安装，云端设计流程图。系统自动更新流程图，不用担心源文件丢失。让流程图调整更轻松。'}
            imgUrl={plan_editFlow}
            imgPosition={'left'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智能设计'}
            title={'在线编辑方案，实时匹配参数'}
            description={'可编辑构筑物，设备，经济技术指标参数，系统自动配置相关参数，用户无需在自己收集参数。'}
            imgUrl={plan_edit}
            imgPosition={'right'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智能设计'}
            title={'审查设计方案'}
            description={'在线生成成套设计方案，实时获得方案指标数据。支持在线下载。'}
            imgUrl={plan_pdfView}
            imgPosition={'left'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智能设计'}
            title={'方案实时分享'}
            description={'支持实时对设计方案流程图，工艺参数，经济指标进行手机端分享查看。'}
            imgUrl={plan_share}
            imgPosition={'right'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <SubCard onMenu={(path) => this.props.history.push(path)}/>
        </div>
        <Footer onMenu={(path) => this.props.history.push(path)}/>
      </div>
    )
  }
}