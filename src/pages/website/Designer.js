/* jshint esversion: 6 */

import React from 'react';
import { Steps } from 'antd';
import styles from '../../styles/website/designer.module.scss';
import Header from './component/Header';
import FeatureCard from './component/FeatureCard';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import designer_banner from '../../static/images/designer_banner.png'
import plan_edit from '../../static/images/plan_edit.png';
import bim_design from '../../static/images/bim_design.png';
import operation_screen from '../../static/images/operation_screen.gif';

const { Step } = Steps;

export default class Designer extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  renderSteps = (type) => {
    if(type === 'plan') {
      return(
        <div className='qsyun_website_designer_featureCard_steps'>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex' 
              style={{backgroundColor: 'rgb(179,132,255)'}}
            >
              01
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              通过输入基础数据智能生成合规方案
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(153,105,255)'}}
            >
              02
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持多行业多条件方案
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(128,52,241)'}}
            >
              03
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持对方案云端修改编辑
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(103,31,180)'}}
            >
              04
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              云端链接分享查看与协同
            </div>
          </div>
        </div>
      )
    } else if(type === 'bim') {
      return(
        <div className='qsyun_website_designer_featureCard_steps'>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex' 
              style={{backgroundColor: 'rgb(179,132,255)'}}
            >
              01
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              通过BIM模型生成施工图纸
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(153,105,255)'}}
            >
              02
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持管道材料等工程量清单校核
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(128,52,241)'}}
            >
              03
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持模型指导现场施工管理
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(103,31,180)'}}
            >
              04
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持模型三维可视化平台
            </div>
          </div>
        </div>
      )
    } else if(type === 'operation') {
      return(
        <div className='qsyun_website_designer_featureCard_steps'>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex' 
              style={{backgroundColor: 'rgb(179,132,255)'}}
            >
              01
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              数字化运营指挥系统
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(153,105,255)'}}
            >
              02
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持运行数据统计与能耗分析
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(128,52,241)'}}
            >
              03
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持水质监控与分析预测
            </div>
          </div>
          <div className='qsyun_website_designer_featureCard_stepItem'>
            <div 
              className='qsyun_website_designer_featureCard_stepIndex'
              style={{backgroundColor: 'rgb(103,31,180)'}}
            >
              04
            </div>
            <div className='qsyun_website_designer_featureCard_stepText'>
              支持监控设备运行状况
            </div>
          </div>
        </div>
      )
    }
  }

  render(){
    const steps = [
      {
        title: '方案设计',
      },
      {
        title: 'BIM设计',
      },
      {
        title: '调试运营',
      },
    ];
    
    return(
      <div className={styles.qsyun_website_designer}>
        <Header onMenu={(path) => this.props.history.push(path)}/>
        <div className='qsyun_website_designer_banner'>
          <img src={designer_banner} alt=''/>
          <div className='qsyun_website_bannerCard_contentWrap dFlex flexColumn alignItemsCenter justifyCenter'>
            <div className='qsyun_website_bannerCard_subTitle'>
              为环保公司/设计院/工程师打造的
            </div>
            <div className='qsyun_website_bannerCard_title'>
              智能设计云平台
            </div>
            <div className='qsyun_website_bannerCard_description'>
              无需安装，扫码使用。智能设计，提高工作效率，优化输出成果 实现项目云端协同
            </div>
          </div>
        </div>

        <div className='qsyun_website_designer_content dFlex flexColumn alignItemsCenter'>
          <Steps className='qsyun_website_designer_steps'>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div style={{height: '100px'}}></div>
          <FeatureCard 
            // keyword={'方案设计'}
            title={'方案设计'}
            description={this.renderSteps('plan')}
            imgUrl={plan_edit}
            imgPosition={'right'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            // keyword={'BIM设计'}
            title={'BIM设计'}
            description={this.renderSteps('bim')}
            imgUrl={bim_design}
            imgPosition={'left'}
            btnName={'咨询详情'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            // keyword={'智慧运营平台'}
            title={'调试运营'}
            description={this.renderSteps('operation')}
            imgUrl={operation_screen}
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