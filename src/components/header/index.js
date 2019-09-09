import React from 'react';
import './index.less';

export default class Header extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            weibo: 'none',
            weixin: 'none',
            date: new Date()
        }
        this.handleHoverWeibo = this.handleHoverWeibo.bind(this);
        this.handleHoverWeixin = this.handleHoverWeixin.bind(this);
        this.handleLeaveWeibo = this.handleLeaveWeibo.bind(this);
        this.handleLeaveWeixin = this.handleLeaveWeixin.bind(this);
        this.getToday = this.getToday.bind(this);
    }

    handleHoverWeibo () {
        this.setState({
            weibo: 'block'
        })
    }
    handleHoverWeixin () {
        this.setState({
            weixin: 'block'
        })
    }
    handleLeaveWeibo () {
        this.setState({
            weibo: 'none'
        })
    }
    handleLeaveWeixin () {
        this.setState({
            weixin: 'none'
        })
    }
    
//得到今天的日期
    getToday(){
        const weekday=new Array(7)
        weekday[0]="星期日";
        weekday[1]="星期一";
        weekday[2]="星期二";
        weekday[3]="星期三";
        weekday[4]="星期四";
        weekday[5]="星期五";
        weekday[6]="星期六";
        return (
            weekday[this.state.date.getDay()]
        );
    }

    render() {
        return (
            <div className='header'>
                <div className='header-title'>
                    <div className='header-title-time'>{this.state.date.getFullYear()}年{this.state.date.getUTCMonth()+1}月{this.state.date.getUTCDate()}日 {this.getToday()} 河北省秦皇岛市</div>
                    <div className='header-title-tools'>
                        <ul>
                            <li>
                                <a href='#' target='_blank' onMouseOver={this.handleHoverWeibo} onMouseLeave={this.handleLeaveWeibo}>
                                    <img src='/assets/weibo.png' alt='' ></img>
                                </a>
                                <div className='header-title-tools-code' style={{display:this.state.weibo}} >
                                    <img src='/assets/weibo-code.jpeg' alt=''></img>
                                </div>
                            </li>
                            <li>
                                <a href='#' target='_blank' onMouseOver={this.handleHoverWeixin} onMouseLeave={this.handleLeaveWeixin}>
                                    <img src='/assets/weixin.png' alt='' ></img>
                                </a>
                                <div className='header-title-tools-code' style={{display:this.state.weixin}}>
                                    <img src='/assets/weixin-code.png' alt=''></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='header-clearfix-wrapper'>
                    <div className='header-clearfix'>
                        <img src='/assets/guohui.jpeg' style={{display:'block',float:'left',width: "50px",height: "110px",marginTop: '-12px'}}></img>
                        <div className='header-clearfix-details'>
                            <h1>秦皇岛市应急管理局</h1>
                            <span>Qinhuangdao Emergency Management Bureau</span>
                        </div>
                        
                        <a className='header-clearfix-search' href='http://yjgl.qhd.gov.cn/htmls/search'><img src='/assets/search.png' style={{marginTop:'-6px'}}></img></a>
                        <input></input>
                    </div>
                </div>
                <div className='header-nav-wrapper'>
                    <div className='header-nav'>
                        <ul>
                            <li><a href='#'>首页</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/newscenter/toNewsCenter'>新闻中心</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/safetytraining/toSafetyControl?categoryid=63eedd10-e7a5-4c8b-867c-15a2065433a3'>安全生产</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/securitycontrol/tofzjzControl?categoryid=176e57a7-62eb-4c0b-a07e-1eaec9cda8ac'>防震减灾</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/securitycontrol/toSecurityControl?categoryid=38b88c75-197a-4f15-ba5a-a1dcef2f8606'>应急救援</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/partybuilding/toPartyBuildingNews?newstype=djgz'>党建工作</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/partybuilding/toPartyBuildingNews?newstype=djgz'>政策法规</a></li>
                            <li><a href='http://yjgl.hebei.gov.cn/portal/partybuilding/toPartyBuildingNews?newstype=djgz'>公文公告</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
