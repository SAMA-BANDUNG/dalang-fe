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
        <Header scrollPosition={scrollPosition} home={true}/> 
        <Layout>
            <Content className="layout-home">
                <Row id="beranda" style={{minHeight:500}}>
                    <Image 
                        src={width>550 ? desktopBanner : mobileBanner} 
                        style={{minWidth:"100vw"}} 
                        preview={false}
                    > 
                    </Image>
                    
                    <Text className={(width>600) ? "text-banner": "text-banner mobile"} 
                        style={{marginTop:(width>600) ? -540 : -340 , marginLeft:"auto", marginRight:"auto", zIndex:10}}>
                        <Fade >
                        {bannerText}
                        </Fade>             
                    </Text>
                </Row>
                <Row id="aboutus" style={{minHeight:500, paddingTop:(width>600) && 100, marginBottom: 40}}>
                    <Col xl={9} lg={9} sm={24} xs={24} style={{paddingLeft:(width>600) && 100}}>
                        <Image 
                            src={aboutus} 
                            style={{width:"100%", marginTop:(width>600 ? 0 : 40)}} 
                            preview={false}
                        > 
                        </Image>
                    </Col>
                    <Col xl={15} lg={15} sm={24} xs={24}>
                        <Row justify="center" align="middle">
                            <Text className={(width>600) ? "text-aboutus" : "text-aboutus mobile"}>
                                <Fade>
                                    KENALAN YUK DENGAN DALANG!
                                </Fade>             
                            </Text>
                        </Row>
                        <Row justify="center" align="middle">
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", maxWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="1" className="text-collapse"
                                    header="Apa itu DALANG?" 
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            DALANG adalah sebuah aplikasi dengan visi membuat masa depan yang
                                            lebih baik. DALANG berkomitmen untuk meningkatkan intensitas daur ulang
                                            sampah di Indonesia dengan bantuan SAHABAT DALANG untuk menyetorkan sampah daur ulang 
                                            kepada pengelola Bank Sampah terdekat.
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", maxWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="2" className="text-collapse"
                                    header="Siapa saja yang bisa menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            Siapapun dapat menggunakan aplikasi DALANG dan menjadi SAHABAT DALANG.
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", maxWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="3" className="text-collapse"
                                    header="Dimana pengguna dapat menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            DALANG dapat digunakan di seluruh wilayah Indonesia.
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", maxWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="4" className="text-collapse"
                                    header="Kapan pengguna dapat menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            DALANG dapat digunakan kapanpun SAHABAT DALANG inginkan. 
                                            Sementara layanan setor sampah menyesuaikan jam operasional Bank Sampah.
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", maxWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="5" className="text-collapse"
                                    header="Bagaimana proses setor sampah pada aplikasi DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            <p>1. Cek Bank Sampah terdekat <a href="/bank-sampah" target="_blank">disini</a> <br/>
                                            2. Pilih lokasi Bank Sampah untuk menyetorkan sampah daur ulang Anda <br/>
                                            3. Isi formulir request setor sampah <br/>
                                            4. Tunggu pengelola Bank Sampah mengonfirmasi request setor sampah <br/>
                                            5. Setorkan sampah kepada pengelola Bank Sampah</p>
                                        </Fade>             
                                    </Text>
                                </Panel>
                            </Collapse>
                            <Collapse expandIconPosition="right" expandIcon={expandIcon}
                                style={{minWidth:"80%", maxWidth:"80%", marginTop:10, borderRadius:10}}>
                                <Panel key="6" className="text-collapse"
                                    header="Kenapa anda harus menggunakan DALANG?"
                                >
                                    <Text style={{color: "#000"}}>
                                        <Fade right>
                                            Dengan menggunakan DALANG, Anda telah turut serta
                                            mewujudkan masa depan yang lebih baik. Anda juga akan mendapatkan reward poin 
                                            setiap transaksi setor sampah yang dapat diklaim untuk mendapatkan hadiah kejutan
                                            pada waktu yang akan datang.
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