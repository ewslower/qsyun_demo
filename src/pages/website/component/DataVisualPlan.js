/* jshint esversion: 6 */

import React from 'react';
import { Table } from 'antd';
import styles from '../../../styles/website/component/dataVisualPlan.module.scss';
import {
  visualData1,
  visualData2,
  visualData3,
  visualData4,
  visualData5,
  visualData6,
} from '../../../static/data/visualData';


export default class DataVisualPlan extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  };

  render(){
    const columns = [
      {
        title: '功能',
        dataIndex: 'name',
        width: '20%'
      },
      {
        title: '描述',
        dataIndex: 'description',
        width: '80%'
      }
    ]

    return(
      <div className={styles.qsyun_website_dataVisualPlan}>
        <h2>无人污水处理厂基础架构</h2>
        <div className='tableWrap dFlex flexColumn alignItemsCenter w100 h100'>
          <Table 
            title={() => {return <h3>一  数据管理系统</h3>}}
            rowKey={Math.random()}
            columns={columns} 
            dataSource={visualData1}
            pagination={false}
            bordered
            className='tables'
          />
          <Table 
            title={() => {return <h3>二  实时监测系统</h3>}}
            rowKey={Math.random()}
            columns={columns} 
            dataSource={visualData2}
            pagination={false}
            bordered
            className='tables'
          />
          <Table 
            title={() => {return <h3>三  总图管理系统</h3>}}
            rowKey={Math.random()}
            columns={columns} 
            dataSource={visualData3}
            pagination={false}
            bordered
            className='tables'
          />
          <Table 
            title={() => {return <h3>四  业务管理系统</h3>}}
            rowKey={Math.random()}
            columns={columns} 
            dataSource={visualData4}
            pagination={false}
            bordered
            className='tables'
          />
          <Table 
            title={() => {return <h3>五  综合评价系统</h3>}}
            rowKey={Math.random()}
            columns={columns} 
            dataSource={visualData5}
            pagination={false}
            bordered
            className='tables'
          />
          <Table 
            title={() => {return <h3>六  成本分析/预测系统</h3>}}
            rowKey={Math.random()}
            columns={columns} 
            dataSource={visualData6}
            pagination={false}
            bordered
            className='tables'
          />
        </div>
      </div>
    )
  }
}