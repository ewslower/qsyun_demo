/* jshint esversion: 6 */

import React from 'react';
import styles from '../../styles/website/operation.module.scss';
import Header from './component/Header';
import BannerCard from './component/BannerCard';
import FeatureCard from './component/FeatureCard';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import bannerIcon from '../../static/images/operationIcon.png';
import operation_equipment from '../../static/images/operation_equipment.png';
import operation_data from '../../static/images/operation_data.png';
import operation_screen from '../../static/images/operation_screen.gif';
import operation_custom from '../../static/images/operation_custom.png';

export default class Operation extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  render(){
    return(
      <div className={styles.qsyun_website_operation}>
        <Header onMenu={(path) => this.props.history.push(path)}/>
        <BannerCard 
          title={'智慧运营平台'}
          description={'用户无需负担昂贵的硬件和软件开发成本，无需专业维护，即可实现数据驱动生产，成本分析预测，科学指导管理。'}
          imgUrl={bannerIcon}
          btnName={'立即体验'}
          onMenu={(path) => this.props.history.push(path)}
        />
        <div className='qsyun_website_operation_content dFlex flexColumn alignItemsCenter'>
          <div style={{height: '100px'}}></div>
          <FeatureCard 
            keyword={'智慧运营平台'}
            title={'设备联网'}
            description={'硬件采用工业级设计，可靠性强，支持即插即连多品牌PLC和DCS，数据采用加密方式进行传送，避免数据被他人获取。'}
            imgUrl={operation_equipment}
            imgPosition={'right'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智慧运营平台'}
            title={'数据采集'}
            description={'系统支持采集污水处理装置生产运行所产生的各种数据，包括工业实时数据，工业历史数据，水质监测数据，设备运行数据等。'}
            imgUrl={operation_data}
            imgPosition={'left'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智慧运营平台'}
            title={'数字化大屏'}
            description={'通过大屏，即可全局总览运营数据，快速定位生产瓶颈。准确掌握运行效率实时监控设备运行状况，数据驱动生产，科学指导管理。'}
            imgUrl={operation_screen}
            imgPosition={'right'}
            btnName={'立即体验'}
            onMenu={(path) => this.props.history.push(path)}
          />
          <div style={{height: '200px'}}></div>
          <FeatureCard 
            keyword={'智慧运营平台'}
            title={'定制开发'}
            description={'平台支持企业定制，私有化部署版本。'}
            imgUrl={operation_custom}
            imgPosition={'left'}
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