/* jshint esversion: 6 */
import React from 'react';
import {
  Carousel,
  Card,
  Spin
} from 'antd';
import styles from '../../styles/website/home.module.scss';
import Header from './component/Header';
import SubCard from './component/SubCard';
import Footer from './component/Footer';
import customImg from '../../static/images/custom.PNG';
import homeCard_one from '../../static/images/homeCard_one.png';
import homeCard_two from '../../static/images/homeCard_two.png';
import homeCard_thr from '../../static/images/homeCard_thr.png';
import homeCard_four from '../../static/images/homeCard_four.png';
import homeCard_five from '../../static/images/homeCard_five.png';
import homeCard_six from '../../static/images/homeCard_six.png';
const { Meta} = Card;

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading: true
    };
  }

  componentDidMount = () => {
    this.setState({
      loading: false
    })
  }

  render(){
    const { loading } = this.state;
    return(
      <Spin spinning={loading} size='large' tip='努力奔跑中...'>
        <div className={styles.qsyun_website_home}>
          <Header onMenu={(path) => this.props.history.push(path)}/>
          <Carousel 
            className='qsyun_website_home_carouselWrap'
            autoplay={true}
            autoplaySpeed={3000}
            effect='fade'
          >
            <div className='qsyun_website_home_carouselItem'>
              <div className='qsyun_website_home_crousel_description'>
                <div className='qsyun_website_home_crousel_description_title'>
                  在这里，开启环保智能
                </div>
                <div style={{height:'48px'}}></div>
                <div className='qsyun_website_home_crousel_description_item'>
                  基于独家智能设计引擎
                </div>
                <div className='qsyun_website_home_crousel_description_item'>
                  提供分析-设计-运营-管理
                </div>
                <div className='qsyun_website_home_crousel_description_item'>
                  全流程增效服务
                </div>
                <div className='qsyun_website_home_crousel_description_button'>
                  立即体验
                </div>
              </div>
            </div>
            <div className='qsyun_website_home_carouselItem'>
              <div className='qsyun_website_home_crousel_description'>
                <div className='qsyun_website_home_crousel_description_title'>
                  智能设计云平台
                </div>
                <div style={{height:'48px'}}></div>
                <div className='qsyun_website_home_crousel_description_item'>
                  无需安装，扫码使用
                </div>
                <div className='qsyun_website_home_crousel_description_item'>
                  智能设计，提高工作效率，优化输出结果
                </div>
                <div className='qsyun_website_home_crousel_description_item'>
                  实现项目云端协同
                </div>
                <div className='qsyun_website_home_crousel_description_button'>
                  立即体验
                </div>
              </div>
            </div>
            <div className='qsyun_website_home_carouselItem'>
              <div className='qsyun_website_home_crousel_description'>
                <div className='qsyun_website_home_crousel_description_title'>
                  智能设计云服务
                </div>
                <div style={{height:'48px'}}></div>
                <div className='qsyun_website_home_crousel_description_item'>
                  缩略过程，直出结果
                </div>
                <div className='qsyun_website_home_crousel_description_item'>
                  提供高效设计，评估，优化服务
                </div>
                <div className='qsyun_website_home_crousel_description_item'>
                  实现项目智能托管
                </div>
                <div className='qsyun_website_home_crousel_description_button'>
                  立即体验
                </div>
              </div>
            </div>
          </Carousel>
          <div className='qsyun_website_home_content dFlex flexColumn alignItemsCenter'>
            <div className='qsyun_website_home_cardWrap dFlex flexRow alignItemsCenter justifyBetween'>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="" src={homeCard_one} />}
              >
                <Meta 
                  title="方案智能生成" 
                  description="上传项目基础数据后，通过智能生成，快速获得满足指标，规范的设计方案，简化设计流程，提高工作效率。" 
                />
              </Card>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="" src={homeCard_two} />}
              >
                <Meta 
                  title="智能辅助设计" 
                  description="支持在线修改参数，系统海量设计数据库，无需计算，可快速选择所需设备材料型号" 
                />
              </Card>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="" src={homeCard_thr} />}
              >
                <Meta 
                  title="一键分享成果" 
                  description="支持一键分析设计方案给他人浏览，可设置查看权限，保护设计成果不被盗用。" 
                />
              </Card>
            </div>
            <div className='qsyun_website_home_cardWrap dFlex flexRow alignItemsCenter justifyBetween'>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="" src={homeCard_four} />}
              >
                <Meta 
                  title="BIM 5D" 
                  description="平台为企业提供BIM应用方案，达到减少施工变更，缩短工期，控制成本，提升质量的目的。" 
                />
              </Card>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="" src={homeCard_five} />}
              >
                <Meta 
                  title="智慧运营平台" 
                  description="实现数据驱动生产，成本分析预测，科学指导管理。" 
                />
              </Card>
              <Card
                hoverable
                style={{ width: 320 }}
                cover={<img alt="" src={homeCard_six} />}
              >
                <Meta 
                  title="企业私有部署" 
                  description="平台支持企业定制，私有化部署版本。" 
                />
              </Card>
            </div>
            {/* <div className='qsyun_website_home_custom'>
              <div className='qsyun_website_home_custom_title'>
                为万千用户提供服务
              </div>
              <img src={customImg} alt='' />
            </div> */}
            <SubCard onMenu={(path) => this.props.history.push(path)}/>
          </div>
          <Footer onMenu={(path) => this.props.history.push(path)}/>
        </div>
      </Spin>
    )
  }
}