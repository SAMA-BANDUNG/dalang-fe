import React, { useEffect, useState } from "react";
import { withRouter, NavLink } from 'react-router-dom';
import { Layout, Breadcrumb, Row, Col, Card, Typography, List, Image, Input } from 'antd';
import { HomeOutlined, EnvironmentFilled, PhoneFilled } from '@ant-design/icons';
import CONFIG from '../../services/config';
import APIServices  from '../../services/index';
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

import DummyVendor from '../../services/dummy'
import vendor from "../../assets/images/vendor.png"
import vendor2 from "../../assets/images/vendor2.png"

const { Content } = Layout;
const { Text } = Typography;
const { Search } = Input;

const BankSampah = () => {
    const [listVendor, setListVendor] = useState([]);
    const [loading, setLoading] = useState(false);

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

    useEffect(()=>{
        getListVendor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getListVendor = () => {
        setLoading(true);
        APIServices.getListVendor().then(res => {
                if(res.data){
                    // setListVendor(res.data.data);
                    setLoading(false)

                    setListVendor(DummyVendor)
                }
            }).catch(err => {
                if(err){
                    console.log(err.response)
                    setLoading(false)

                    setListVendor(DummyVendor)
                }
            })
        }

    return(
        <>
        <Header scrollPosition={scrollPosition}/> 
        <Layout style={{minWidth: 700, backgroundColor:"#008753"}}>
            <Content className="layout-content">
                <Breadcrumb style={{marginTop: 20, marginLeft:40, marginBottom:20, color:"#FFF"}} separator=">">
                    <Breadcrumb.Item>
                        <NavLink to="/">
                            <Text className="title">
                                <HomeOutlined />
                            </Text>
                        </NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <NavLink to="/bank-sampah">
                            <Text className="title">
                                <span>Bank Sampah</span>
                            </Text>
                        </NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row style={{marginBottom:20, marginRight:20}}>
                    <Card className="informasi-card" style={{width:"100%", marginLeft:40, justifyContent:"center"}}>
                        <Row style={{marginBottom:20}}>
                            <Search 
                                allowClear
                                placeholder="Cari Bank Sampah" 
                                onChange={(e)=> {
                                    // setSearchKey(e.target.value)
                                    if(e.target.value === ""){
                                        setListVendor(DummyVendor)
                                    } else {
                                        let z = DummyVendor.filter(o1 => o1.name == e.target.value)
                                        setListVendor(z)
                                    }
                                }} 
                                style={{ width: 300, maxWidth:"90%", marginBottom: 20, borderRadius: 20}}
                            />
                        </Row>
                        <Row>
                        <List 
                            grid={{ gutter: 50, 
                                xl: (listVendor.length < 5) ? listVendor.length : 5, 
                                lg: (listVendor.length < 4) ? listVendor.length : 4, 
                                md: (listVendor.length < 3) ? listVendor.length : 3, 
                                sm: (listVendor.length < 2) ? listVendor.length : 2, 
                                xs: (listVendor.length < 2) ? listVendor.length : 2
                            }}
                            dataSource={listVendor}
                            renderItem={(item, idx) => (
                                <List.Item>
                                    <Row justify="center">
                                      <Card className="profil-card" >
                                          <Row justify="center">
                                            <Image 
                                                // src={CONFIG.BASE_URL+"/"+item.avatar}  
                                                // src={(idx%2 === 0) ? vendor : vendor2}  
                                                src={vendor}
                                                preview={false}
                                                className="image-profil"
                                            />
                                          </Row>
                                          <Row justify="center">
                                              <Text className="title-profil" ellipsis={{ rows: 1}}>
                                                <b>{item.name}</b>
                                              </Text>
                                          </Row>
                                          <Row justify="center">
                                            <Text className="title-profil">
                                                {item.description}
                                            </Text>
                                          </Row>
                                          <Row justify="center">
                                                <Col span={12}>
                                                    <Row justify="center">
                                                        <Text className="title-profil">
                                                            <EnvironmentFilled  style={{fontSize:20, color:"#008753", paddingTop:10}}/> 
                                                            {item.distance}
                                                        </Text>
                                                    </Row>
                                                </Col>
                                                <Col span={12}>
                                                    <Row justify="center">
                                                        <Text className="title-profil">
                                                            <PhoneFilled  style={{fontSize:20, color:"#008753", paddingTop:10}}/> 
                                                            {item.phone_office}
                                                        </Text>
                                                    </Row>
                                                </Col>
                                          </Row>
                                      </Card>
                                    </Row>
                                </List.Item>
                            )}
                        />
                        </Row>
                    </Card>
                </Row>
            </Content>
        </Layout>
        <Footer/>
        </>
    );
}

export default withRouter(BankSampah)