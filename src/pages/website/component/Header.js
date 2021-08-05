/* jshint esversion: 6 */

import React from 'react';
import {
  Menu,
} from 'antd';
import styles from '../../../styles/website/component/header.module.scss';

const { SubMenu } = Menu;
export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={
		current: null
		};
	}

	componentDidMount = () => {
		let current = sessionStorage.getItem('current')
		let token = localStorage.getItem('token')
		this.setState({
			current: current,
			token: token
		})
	}

	onMenu = (path) => {
		this.props.onMenu(path)
		sessionStorage.setItem('current', path)
	}

	render(){
		const { current, token } = this.state;
		return(
		<div className={styles.qsyun_website_header}>
			<div className='qsyun_website_headerWrap dFlex flexRow alignItemsCenter justifyBetween'>
			<div 
				className='qsyun_website_logo'
				onClick={() => this.onMenu('/')}
			>
				青水云
			</div>
			<div className='dFlex flexRow alignItemsCenter'>
				<Menu 
				mode="horizontal"  
				onClick={(e) => this.onMenu(e.key)}
				selectedKeys={[current]}
				style={{border:'none', fontSize: '16px', color:'rgba(0,0,0,0.85)', background: 'transparent'}}
				>
				<SubMenu 
					title="产品服务"
					style={
					current === '/h/plan' || current ==='/h/bim' || current ==='/h/operation' 
					? 
					{borderBottom:'none', fontWeight: '700',color:'#8c20ff', padding:'16px'} 
					: 
					{borderBottom:'none', padding:'16px'}
					}
				>
					<Menu.Item key="/h/plan">
					智能设计平台
					</Menu.Item>
					<Menu.Item key="/h/bim">
					BIM 5D设计
					</Menu.Item>
					<Menu.Item key="/h/operation">
					智慧运营平台
					</Menu.Item>
				</SubMenu>
				<SubMenu 
					title="解决方案"
					style={
					current === '/h/designer' || current ==='/h/constructer'
					? 
					{borderBottom:'none', fontWeight: '700',color:'#8c20ff', padding:'16px'} 
					: 
					{borderBottom:'none', padding:'16px'}
					}
				>
					<Menu.Item key="/h/designer">
					我是设计方
					</Menu.Item>
					<Menu.Item key="/h/constructer">
					我是运营方
					</Menu.Item>
				</SubMenu>
				<SubMenu 
					title="团队介绍"
					style={
					current === '/h/about' || current ==='/h/joinUs'
					? 
					{borderBottom:'none', fontWeight: '700',color:'#8c20ff', padding:'16px'} 
					: 
					{borderBottom:'none', padding:'16px'}
					}
				>
					<Menu.Item key="/h/about">关于我们</Menu.Item>
				</SubMenu>
				</Menu>
				{
					token ? (
						<div
							className='qsyun_website_loginBtn'
							onClick={() => this.onMenu('/workbench')}
						>
						项目中心
						</div>
					) : (
						<div
						className='qsyun_website_loginBtn'
						onClick={() => this.onMenu('/landing')}
						>
						免费使用
						</div>
					)
				}
			</div>
			</div>
		</div>
		)
	}
}