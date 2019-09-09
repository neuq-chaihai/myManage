import React,{Component} from 'react';
import './index.less';

export default class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <div className='main-new-footer'>
                    <span>专题网站</span>
                    <ul>
                        <li><a href='http://cpc.people.com.cn/19th/GB/index.html'><img src='/assets/20171027shijiuda.jpg'></img></a></li>
                        <li><a href='http://www.12371.cn/special/lxyz'><img src='/assets/20180629liangxueyizuo.jpg'></img></a></li>
                        <li><a href='http://syss.12371.cn'><img src='/assets/flink_03.jpg'></img></a></li>
                        <li><a href='http://www.12371.cn/special/xxzd/jh/'><img src='https://www.neuq.edu.cn/images/xxls.jpg'></img></a></li>
                    </ul>
                </div>
                <div className='footer-details-wrap'>
                    <div className='footer-details'>
                        <div className='footer-details-1'>
                            <span>主办单位：秦皇岛市应急管理局</span>
                            <span>地址：秦皇岛市燕山大街109号</span>
                            <span>电话：0335-3650560 </span>
                            <span>网站标识码：1303000020</span>
                            <span>邮政编码：066001 </span>
                        </div>
                        <div className='footer-details-2'>
                            <a href='http://121.43.68.40/exposure/jiucuo.html?site_code=1303000020&url=http%3A%2F%2Fwww.qhdsafety.gov.cn%2Findex.html'><img src='http://121.43.68.40/exposure/images/jiucuo.png?v=1303000020' alt=''></img></a>
                            <a href='http://bszs.conac.cn/sitename?method=show&id=082080304EE01E77E053012819AC76B5'><img src='http://dcs.conac.cn/image/red.png' alt=''></img></a>
                        </div>
                        <div className='footer-details-3'>
                            <img src='assets/weixin-code.png' style={{width:'60px',height:'60px',margin:'10px',display:'block',float:'left'}}></img>
                            <img src='assets/weibo-code.jpeg' style={{width:'60px',height:'60px',margin:'10px',display:'block',float:'left'}}></img>
                        </div>
                    </div>
                </div>
                <div className='footer-else-wrap'>
                    <div className='footer-else'>
                        <span>ICP备案号：冀ICP备15003849号</span>
                    </div>
                </div>
            </div>
        )
    }
}