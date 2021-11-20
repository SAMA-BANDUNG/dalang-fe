/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import { Layout, Row, Col, Image, Typography, Collapse } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Fade from 'react-reveal/Fade';
import mobileBanner from '../../assets/images/mobile-banner.jpg'
import desktopBanner from '../../assets/images/desktop-banner.jpg'
import aboutus from '../../assets/images/aboutus.png'
import useWindowDimensions from '../../components/util/WindowSize'
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
// import moment from 'moment';

const { Content } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

const HomePage = () => {
    const { width } = useWindowDimensions();
    // const [currentTime, setCurrentTime] = useState(moment().format("DD/MM/YYYY HH:mm:ss"));
    
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         setCurrentTime(moment().format("DD/MM/YYYY HH:mm:ss"))
    //       }, 1000);
    //       return () => clearInterval(interval);
    // }, [])

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bannerText = "#DAURULANGSAMPAHKITA"
    const expandIcon = (props) => {
        if(props.isActive){
            return <MinusOutlined style={{fontSize:25}}/>
        } else {
            return <PlusOutlined style={{fontSize:25}}/>
        }
    }

    return(
        <>
        <Header scrollPosition={scrollPosition}/> 
        <Layout>
            <Content className="layout-home">
                <Row id="beranda" style={{minHeight:500}}>
                    <Image 
                        src={width>550 ? desktopBanner : mobileBanner} 
                        style={{width:"100%", height:(width<600 && "100%"), marginTop:(width>600 ? 0 : 40)}} 
                        preview={false}
                    > 
                    </Image>
                    
                        <Text className="text-banner" style={{marginTop:-550, marginLeft:"auto", marginRight:"auto", zIndex:10}}>
                            <Fade >
                            {bannerText}
                            </Fade>             
                        </Text>
                </Row>
                <Row id="aboutus" style={{minHeight:500, paddingTop:100, marginBottom: 40}}>
                    <Col xl={9} lg={9} sm={24} xs={24} style={{paddingLeft:100}}>
                        <Image 
                            src={aboutus} 
                            style={{width:"100%", marginTop:(width>600 ? 0 : 40)}} 
                            preview={false}
                        > 
                        </Image>
                    </Col>
                    <Col xl={15} lg={15} sm={24} xs={24}>
                        <Row justify="center" align="middle">
                            <Text className="text-aboutus">
                                <Fade>
                                    KENALAN YUK DENGAN DALANG!
                                </Fade>             
                            </Text>
                        </Row>
                        <Row justify="center" align="middle">
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="1" className="text-collapse"
                                    header="Apa itu DALANG?" 
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            LOREM IPSUM
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="2" className="text-collapse"
                                    header="Siapa saja yang bisa menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            LOREM IPSUM
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="3" className="text-collapse"
                                    header="Dimana pengguna dapat menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            LOREM IPSUM
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="4" className="text-collapse"
                                    header="Kapan pengguna dapat menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}} className="text-collapse">
                                        <Fade right>
                                            LOREM IPSUM
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="5" className="text-collapse"
                                    header="Bagaimana proses setor sampah pada aplikasi DALANG?"
                                >
                                    <Text style={{color: "#000"}}className="text-collapse">
                                        <Fade right>
                                            LOREM IPSUM
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="6" className="text-collapse"
                                    header="Kenapa anda harus menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            LOREM IPSUM
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
        <Footer/>
        </>
    );
}

export default withRouter(HomePage)