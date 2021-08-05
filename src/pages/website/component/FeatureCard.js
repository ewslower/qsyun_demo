/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../styles/website/component/featureCard.module.scss';

export default class FeatureCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }

  onMenu = (path) => {
    this.props.onMenu(path);
  }

  render(){
    const {
      keyword,
      title,
      description,
      imgUrl,
      imgPosition,
      btnName,
    } = this.props;

    return(
      <div>
        {
          imgPosition === 'right' ? (
            <div className={styles.qsyun_website_featureCard}>
              <div className='qsyun_website_featureCard_desSection dFlex flexColumn justifyBetween'>
                <div>
                  <div className='qsyun_website_featureCard_keyword'>
                    {keyword}
                  </div>
                  <div className='qsyun_website_featureCard_title'>
                    {title}
                  </div>
                  <div className='qsyun_website_featureCard_description'>
                    {description}
                  </div>
                </div>
                <div 
                  className='qsyun_website_featureCard_button'
                  onClick={() => this.onMenu('/landing')}
                >
                  {btnName}
                </div>
              </div>
              <div className='qsyun_website_featureCard_imgSection'>
                <img src={imgUrl} alt='' />
              </div>
            </div>
          ) : (
            <div className={styles.qsyun_website_featureCard}>
              <div className='qsyun_website_featureCard_imgSection'>
                <img src={imgUrl} alt='' />
              </div>
              <div className='qsyun_website_featureCard_desSection dFlex flexColumn justifyBetween'>
                <div>
                  <div className='qsyun_website_featureCard_keyword'>
                    {keyword}
                  </div>
                  <div className='qsyun_website_featureCard_title'>
                    {title}
                  </div>
                  <div className='qsyun_website_featureCard_description'>
                    {description}
                  </div>
                </div>
                <div 
                  className='qsyun_website_featureCard_button'
                  onClick={() => this.onMenu('/landing')}
                >
                  {btnName}
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}