import React from 'react';
import { Carousel } from 'antd';
import './index.less';
import A from './../../pages/a';

export default class mainNews extends React.Component {
    render() {
        return (
            <div className='main-news'>
                <div className='main-news-header'>
                    <h2>新闻中心</h2>
                </div>
                <A />
                {/* <div style={{height:'480px',backgroundColor:'gray'}}></div> */}
                <div className='main-news-details'>
                    <div className='main-news-details-div'>
                        <h3>
                            <span>安全生产</span>
                            <a href='#'>更多>></a>
                        </h3>
                        <ul>
                            <li><a href='#'>省应急管理厅党组书记宋文玲在唐</a></li>
                            <li><a href='#'>河北万全宏宇化工有限责任公司安</a></li>
                            <li><a href='#'>省应急管理厅在全省范围内开展安</a></li>
                            <li><a href='#'>提升雄安新区安全生产监管能力加</a></li>
                        </ul>
                    </div>
                    <div className='main-news-details-div'>
                        <h3>
                            <span>防震减灾</span>
                            <a href='#'>更多>></a>
                        </h3>
                        <ul>
                            <li><a href='#'>省应急管理厅党组书记宋文玲在唐</a></li>
                            <li><a href='#'>河北万全宏宇化工有限责任公司安</a></li>
                            <li><a href='#'>省应急管理厅在全省范围内开展安</a></li>
                            <li><a href='#'>提升雄安新区安全生产监管能力加</a></li>
                        </ul>
                    </div>
                    <div className='main-news-details-div'>
                        <h3>
                            <span>应急救援</span>
                            <a href='#'>更多>></a>
                        </h3>
                        <ul>
                            <li><a href='#'>省应急管理厅党组书记宋文玲在唐</a></li>
                            <li><a href='#'>河北万全宏宇化工有限责任公司安</a></li>
                            <li><a href='#'>省应急管理厅在全省范围内开展安</a></li>
                            <li><a href='#'>提升雄安新区安全生产监管能力加</a></li>
                        </ul>
                    </div>
                    <div className='main-news-details-div'>
                        <h3>
                            <span>党建工作</span>
                            <a href='#'>更多>></a>
                        </h3>
                        <ul>
                            <li><a href='#'>省应急管理厅党组书记宋文玲在唐</a></li>
                            <li><a href='#'>河北万全宏宇化工有限责任公司安</a></li>
                            <li><a href='#'>省应急管理厅在全省范围内开展安</a></li>
                            <li><a href='#'>提升雄安新区安全生产监管能力加</a></li>
                        </ul>
                    </div>
                    <div className='main-news-details-div'>
                        <h3>
                            <span>政策法规</span>
                            <a href='#'>更多>></a>
                        </h3>
                        <ul>
                            <li><a href='#'>省应急管理厅党组书记宋文玲在唐</a></li>
                            <li><a href='#'>河北万全宏宇化工有限责任公司安</a></li>
                            <li><a href='#'>省应急管理厅在全省范围内开展安</a></li>
                            <li><a href='#'>提升雄安新区安全生产监管能力加</a></li>
                        </ul>
                    </div>
                    <div className='main-news-details-div'>
                        <h3>
                            <span>公文公告</span>
                            <a href='#'>更多>></a>
                        </h3>
                        <ul>
                            <li><a href='#'>省应急管理厅党组书记宋文玲在唐</a></li>
                            <li><a href='#'>河北万全宏宇化工有限责任公司安</a></li>
                            <li><a href='#'>省应急管理厅在全省范围内开展安</a></li>
                            <li><a href='#'>提升雄安新区安全生产监管能力加</a></li>
                        </ul>
                    </div>
                </div>
                {/* <div className='main-new-footer'>
                    <span>专题网站</span>
                    <ul>
                        <li><a href='http://cpc.people.com.cn/19th/GB/index.html'><img src='/assets/20171027shijiuda.jpg'></img></a></li>
                        <li><a href='http://www.12371.cn/special/lxyz'><img src='/assets/20180629liangxueyizuo.jpg'></img></a></li>
                        <li><a href='http://syss.12371.cn'><img src='/assets/flink_03.jpg'></img></a></li>
                        <li><a href='http://www.12371.cn/special/xxzd/jh/'><img src='https://www.neuq.edu.cn/images/xxls.jpg'></img></a></li>
                    </ul>
                </div> */}
            </div>
        )
    }
}