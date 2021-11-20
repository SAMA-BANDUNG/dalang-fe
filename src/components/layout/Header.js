/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Layout, Typography, Row, Col, Button, Menu} from "antd";
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import { withRouter, NavLink, useHistory } from "react-router-dom";
import Auth from "../../services/authService"
// import NavbarMenu from '../views/drawer/menu';

const { Text } = Typography;

const HeaderLayout = (props) => {
    const history = useHistory();
    const [visibleMenu, setVisibleMenu] = useState(false);

    const handleDrawerMenu = () => {
        setVisibleMenu(!visibleMenu);
    };

    const gotoDashboard= () => {
        const loc = '/dashboard';
        history.push(loc);
    }

    const gotoLogin= () => {
        const loc = '/registrasi';
        history.push(loc);
    }

    return (
        <Layout align="middle" className={(props.scrollPosition>700) ? "navmenu" : "navmenu top"}>
            <Row justify="center" align='middle' style={{height:'100%'}}>
                {/* <Col xs={12} sm={6} md={6} lg={6} xl={10} xxl={12} style={{paddingLeft:10}}> */}
                <Col span={6} style={{paddingLeft:10}}>
                    <Row align='middle'>
                        <Col style={{paddingLeft:5}}>
                            <Text className="text-logo">
                                dalang
                            </Text>
                        </Col>
                    </Row>
                </Col>
                {/* <Col xs={2} sm={14} md={16} lg={18} xl={14} xxl={12}> */}
                <Col span={14}>
                <Menu mode="horizontal" style={{minWidth: "100%", backgroundColor:"transparent"}}>
                    <Menu.Item key="1">
                        <NavLink to="/#beranda" >
                            <Text className="text-navmenu">
                                BERANDA
                            </Text>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/#aboutus" >
                            <Text className="text-navmenu">
                                TENTANG KAMI
                            </Text>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/bantuan" >
                            <Text className="text-navmenu">
                                KONTAK
                            </Text>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                        {Auth.isLogin() ? 
                            <Button type='primary' className="app-btn primary" onClick={gotoDashboard}>
                                <UserOutlined style={{fontSize:20}}/> DASHBOARD
                            </Button>
                            :
                            <Button type='primary' className="app-btn primary" onClick={gotoLogin}>
                                <Text className="text-navmenu">
                                    MULAI SEKARANG
                                </Text>
                            </Button>
                        }
                    </Menu.Item>
                    
                    </Menu>
                </Col>
                
                <Col span={2} className="title-navmenu-mobile">
                    <Button className="title-navmenu-mobile" type="text" onClick={handleDrawerMenu} >
                        <Text>
                            <MenuOutlined className="title-navmenu-mobile" style={{fontSize:30, color: "#FFF"}}/>
                        </Text>
                    </Button>
                </Col>
            </Row>
            {/* <NavbarMenu
                buttonCancel={handleDrawerMenu}
                visible={visibleMenu}
                handleDashboard={() => {handleDrawerMenu(); gotoDashboard()}}
                handleLogin={() => {handleDrawerMenu(); gotoLogin()}}
            /> */}
        </Layout>
    );
}

export default withRouter(HeaderLayout);