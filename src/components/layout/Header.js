/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Layout, Typography, Row, Col, Button, Menu} from "antd";
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { withRouter, useHistory, NavLink } from "react-router-dom";
import useWindowDimensions from '../../components/util/WindowSize'
import Auth from "../../services/authService"
import NavbarMenu from '../drawer/Menu';

const { Text } = Typography;

const HeaderLayout = (props) => {
    const { width } = useWindowDimensions();
    const history = useHistory();
    const [visibleMenu, setVisibleMenu] = useState(false);

    const handleDrawerMenu = () => {
        setVisibleMenu(!visibleMenu);
    };

    const gotoHome= () => {
        const loc = '/';
        history.push(loc);
    }

    const gotoDashboard= () => {
        const loc = '/dashboard';
        history.push(loc);
    }

    const gotoRegistrasi= () => {
        const loc = '/registrasi';
        history.push(loc);
    }

    return (
        <Layout align="middle" className={(props.scrollPosition>700 || (!props.home)) ? "navmenu" : "navmenu top"}>
            <Row justify="center" align='middle' style={{height:'100%'}}>
                {/* <Col xs={12} sm={6} md={6} lg={6} xl={10} xxl={12} style={{paddingLeft:10}}> */}
                <Col style={{paddingLeft:10, paddingRight:(width>600) ? 150 : 100}}>
                    <Row align='middle'>
                        <Col style={{paddingLeft:5}}>
                            <Text className="text-logo">
                                dalang
                            </Text>
                        </Col>
                    </Row>
                </Col>
                {/* <Col xs={2} sm={14} md={16} lg={18} xl={14} xxl={12}> */}
                <Col style={{minWidth: (width>600) && 800, display:(width<600) && "none"}}>
                <Menu mode="horizontal" style={{minWidth: "100%", backgroundColor:"transparent", marginTop:5}}>
                    <Menu.Item key="1">
                            <Text className="text-navmenu"
                                onClick={()=> {
                                    if(props.home){
                                        let elmnt = document.getElementById("beranda");
                                        elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});  
                                    } else {
                                        gotoHome()
                                    }
                                }}
                            >
                                BERANDA
                            </Text>
                    </Menu.Item>
                    <Menu.Item key="2">
                            <Text className="text-navmenu" 
                                onClick={()=> {
                                    if(props.home){
                                        let elmnt = document.getElementById("aboutus");
                                        elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                                    } else {
                                        gotoHome()
                                    }
                                }}
                            >
                                TENTANG KAMI
                            </Text>
                    </Menu.Item>
                    <Menu.Item key="3">
                        {/* <NavLink to="/#kontak" > */}
                            <Text className="text-navmenu"
                                onClick={()=> {
                                    if(props.home){
                                        window.scrollTo({
                                            top: document.body.scrollHeight,
                                            left: 0,
                                            behavior: 'smooth'
                                        })
                                    } else {
                                        gotoHome()
                                    }
                                }}
                            >
                                KONTAK
                            </Text>
                        {/* </NavLink> */}
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to="/bank-sampah" >
                            <Text className="text-navmenu">
                                BANK SAMPAH
                            </Text>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" >
                        {Auth.isLogin() ? 
                            <Button type='primary' className="app-btn primary" onClick={gotoDashboard}>
                                <UserOutlined style={{fontSize:20}}/> DASHBOARD
                            </Button>
                            :
                            <Button type='primary' className="app-btn primary padding" onClick={gotoRegistrasi}>
                                <Text className="text-navmenu green" style={{marginTop:5}}>
                                    MULAI SEKARANG
                                </Text>
                            </Button>
                        }
                    </Menu.Item>
                    
                    </Menu>
                </Col>
                
                <Col className="text-navmenu-mobile">
                    <Button className="text-navmenu-mobile" type="text" onClick={handleDrawerMenu} >
                        <Text>
                            <MenuOutlined className="text-navmenu-mobile" style={{fontSize:30, color: "#FFF"}}/>
                        </Text>
                    </Button>
                </Col>
            </Row>
            <NavbarMenu
                buttonCancel={handleDrawerMenu}
                visible={visibleMenu}
                handleDashboard={() => {handleDrawerMenu(); gotoDashboard()}}
                handleRegistrasi={() => {handleDrawerMenu(); gotoRegistrasi()}}
            />
        </Layout>
    );
}

export default withRouter(HeaderLayout);