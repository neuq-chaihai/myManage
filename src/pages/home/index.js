import React,{Component} from 'react';
import {Carousel} from 'antd';
import './index.less';
import Header from './../../components/header';
import MainNews from './../../components/mainNews';
import Footer from './../../components/footer';

class Index extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='main'>
          <div style={{height:'400px',width:'1200px',margin:'0 auto'}}>
              <Carousel
                  autoplay
              >
                  <img src='./../../assets/bac-1.jpg' alt='' />
                  <img src='./../../assets/bac-2.jpg' alt='' />
                  <img src='./../../assets/bac-3.jpg' alt='' />
                  <img src='./../../assets/bac-4.jpg' alt='' />
              </Carousel>
          </div>
          <MainNews />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index;