/* jshint esversion: 6 */

import React from 'react';
import styles from '../../styles/website/bim.module.scss';
import Header from './component/Header';
import BannerCard from './component/BannerCard';
import FeatureCard from './component/FeatureCard';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import bannerIcon from '../../static/images/bim.png';
import bim_design from '../../static/images/bim_design.png';
import bim_3dView from '../../static/images/bim_3dView.png';
import bim_construct from '../../static/images/bim_construct.png';
import bim_cubeDesign from '../../static/images/bim_cubeDesign.png';
import bim_material from '../../static/images/bim_material.png';

export default class Bim extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  
  render(){
    return(
      <div className={styles.qsyun_website_bim}>
        <Header onMenu={(path) => this.props.history.push(path)}/>
        <BannerCard 
          title={'BIM 5D'}
          description={'平台为用户提供BIM应用方案，达到减少施工变更、缩短工期、控制成本、提升质量的目的，涉及软件：SmartPlant、PDMS、CADWorx、AutoPLANT、Plant 3D等。'}
          imgUrl={bannerIcon}
          btnName={'咨询详情'}
          onMenu={(path) => this.props.history.push(path)}
        />
        <div className='qsyun_website_bim_content dFlex flexColumn alignItemsCenter'>
          <div style={{height: '100px'}}></div>
          <FeatureCard 
            keyword={'BIM 5D'}
            title={'水处理装置设计'}
            description={'所谓装置设计，就是按照PID的要求对构筑物，设备，管线按照操作、维修、安全，并考虑经济、美观、安全等因素进行合理的布置设计。'}
            imgUrl={bim_design}
            imgPosition={'right'}
            btnName={'咨询详情'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'BIM 5D'}
            title={'模块化设计'}
            description={'所谓模块化就是将工艺设计单元化、功能化，充分利用工厂设备和场地资源及管理优势, 将建造和安装集成化,从而达到提高制造质量、缩短制造周期和节约制造成本的新型设计模式。'}
            imgUrl={bim_cubeDesign}
            imgPosition={'left'}
            btnName={'咨询详情'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'BIM 5D'}
            title={'快速校核工程量清单'}
            description={'利用BIM模型提供的工程量快速测算或校核标的工程量，为商务标投标标的提供参考。在投标前期对资金进行把控，加强对后期资金成本控制，方便后期资金流转。'}
            imgUrl={bim_material}
            imgPosition={'right'}
            btnName={'咨询详情'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'BIM 5D'}
            title={'精细化施工管理'}
            description={'利用真实三维模型自动出图技术特点，可准确输出全方位多角度图纸，准确传递设计结果。'}
            imgUrl={bim_construct}
            imgPosition={'left'}
            btnName={'咨询详情'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'BIM 5D'}
            title={'三维可视化看板系统'}
            description={'基于BIM运维的数据可视化平台，能够显著提高企业的BIM运维水平，改善企业BIM运维效率，提高企业的市场竞争能力，并且能够有效降低企业的运维成本，提高企业的资产价值。'}
            imgUrl={bim_3dView}
            imgPosition={'right'}
            btnName={'咨询详情'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <SubCard onMenu={(path) => this.props.history.push(path)}/>
        </div>
        <Footer onMenu={(path) => this.props.history.push(path)}/>
      </div>
    )
  }
}