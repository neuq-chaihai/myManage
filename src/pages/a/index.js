import React from 'react';
import { Carousel } from 'antd';
import './index.less';

class A extends React.Component {

    constructor(props) {
        super(props);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }
    prev() {
        this.slider.prev()
    }
    next () {
        this.slider.next();
    }

    render () {
        return (
            <div>
            <div className='main-news-content'>
                <div className='main-news-left main-news-arrow' onClick={this.prev} ></div>
                <Carousel
                    ref={el => this.slider= el}
                    dots = {false}
                >
                    {/* <div>
                        <h3>1</h3>
                    </div> */}
                    <div className='content-1 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>1</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-2.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>2</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-3.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>3</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div>
                <div className='content-1 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-4.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>4</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-5.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>5</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-6.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>6</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div>
                <div className='content-1 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-7.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>7</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-8.png')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>8</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-9.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div>
                <div className='content-1 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-10.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>10</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>1</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-2.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>2</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div>
                </Carousel>
                <a className='main-news-right main-news-arrow' onClick={this.next}></a>
            </div>
                {/* <div className='content-1 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div> */}
                {/* <div className='content-2 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div>
                <div className='content-3 content'>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                    <div className='content-one main'>
                        <a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>
                            <img src={require('./ban-1.jpg')} alt=''></img>
                        </a>
                        <div className='details'>
                            <div className='data'>
                                <h3 className='nums'>9</h3>
                                <p className='date'>2019.07</p>
                            </div>
                            <h3 className='title'><a href='http://www.qhdsafety.gov.cn/xwdt/2019/7/156203530427162674ca17e8400fa2b7.html'>秦皇岛市举办直升机应急救援保障基地揭牌仪式正式开通空中应急救援通道</a></h3>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default A;