/* jshint esversion: 6 */

import React from 'react';
import { 
  Modal
} from 'antd';
import styles from '../../styles/website/constructer.module.scss';
import Header from './component/Header';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import DataVisualPlan from './component/DataVisualPlan';
import constructer_banner from '../../static/images/constructer_banner.png'
import constructer_screen from '../../static/images/operation_custom.png';
import constructer_data from '../../static/images/constructer_data.png';
import constructer_alarm from '../../static/images/constructer_alarm.png';
import constructer_3d from '../../static/images/constructer_3d.png';
import constructer_person from '../../static/images/constructer_person.png';
import constructer_analist from '../../static/images/constructer_analist.png';
import constructer_erp from '../../static/images/constructer_erp.png';

export default class Constructer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visible: false
    };
  }

  render(){
    const { visible } = this.state;

    return(
      <div className={styles.qsyun_website_constructer}>
        <Header onMenu={(path) => this.props.history.push(path)}/>
        <div className='qsyun_website_constructer_banner'>
          <img src={constructer_banner} alt=''/>
          <div className='qsyun_website_bannerCard_contentWrap dFlex flexColumn alignItemsCenter justifyCenter'>
            <div className='qsyun_website_bannerCard_subTitle'>
              为项目建设方/运营方打造的
            </div>
            <div className='qsyun_website_bannerCard_title'>
              智慧运营云服务
            </div>
            <div className='qsyun_website_bannerCard_description'>
              数据驱动生产，成本分析预测，科学指导运营，实现项目智能托管
            </div>
          </div>
        </div>
        <div className='qsyun_website_constructer_content dFlex flexColumn alignItemsCenter'>
          <div style={{height: '120px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              运营指挥中心
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              全局总览，提高运行效率，快速定位异常，科学指导管理
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_screen} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>

          <div style={{height: '200px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              数据管理
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              自动记录，分析运行，水质等数据及趋势
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_data} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>

          <div style={{height: '200px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              实时监测
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              指标超限报警，远程在线控制等
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_alarm} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>

          <div style={{height: '200px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              总图管理
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              污水设施三维可视化，设施数据查询，运行状态管理等
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_3d} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>

          <div style={{height: '200px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              业务管理
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              设施维护，巡检等日常信息管理
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_person} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>

          <div style={{height: '200px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              综合评价
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              设备，水质管理考核，综合评估分析等
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_erp} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>

          <div style={{height: '200px'}}></div>
          <div className='qsyun_website_constructer_serverCard dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_constructer_serverCard_title'>
              成本分析预测
            </div>
            <div className='qsyun_website_constructer_serverCard_subTitle'>
              总成本，经营成本，单位处理等成本费用分析及预测
            </div>
            <div className='qsyun_website_constructer_serverCard_img'>
              <img src={constructer_analist} alt=''/>
            </div>
            <div 
              className='qsyun_website_constructer_serverCard_btn'
              onClick={() => this.setState({visible: true})}
            >
              获取解决方案
            </div>
          </div>
          <SubCard onMenu={(path) => this.props.history.push(path)}/>
        </div>
        <Footer onMenu={(path) => this.props.history.push(path)}/>
        <Modal
          title={null}
          visible={visible}
          style={{top:0}}
          width={1224}
          footer={null}
          destroyOnClose
          onCancel={() => this.setState({visible: false})}
        >
          <div className='dFlex flexColumn alignItemsCenter'>
            <DataVisualPlan />
          </div>
        </Modal>
      </div>
    )
  }
}