/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { withRouter, useHistory, Route, Redirect, Switch, message } from 'react-router-dom';
import { Layout, Row, Col, Button, Menu } from 'antd';
import { PieChartOutlined,  ContainerOutlined,
    MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined} from '@ant-design/icons';
import { logoutDialog } from '../../../component/alert'
import Auth from '../../../service/auth'
import useWindowDimensions from '../../../component/size-window';
//import Dummy from '../../../dummy/dummy'

const DashboardUser = () => {
    const history = useHistory();

    const gotoDashboard = () => {
        message.info("Laman Dashboard belum tersedia");
        // const loc = '/dashboard';
        // history.push(loc);
    }

    const gotoProfil = () => {
        message.info("Laman Profil belum tersedia");
        // const loc = '/dashboard';
        // history.push(loc);
    }

    const gotoSetor = () => {
        message.info("Laman Setor Sampah belum tersedia");
        // const loc = '/dashboard';
        // history.push(loc);
    }
    
    const { width } = useWindowDimensions();
    const [collapsed, setCollapsed] = useState(false);
    const [padding, setPadding] = useState(260)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        if(collapsed){
            setPadding(260)
        } else {
            setPadding(50)
        }
    };

    // function PrivateRoute({ component: Component, path, ...rest }) {
    //     return (
    //       <Route
    //         path={path}
    //         render={({ location }) =>
    //           Auth.isLogin() ? ( <Component {...rest} /> ) : 
    //           ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
    //         }
    //       />
    //     );
    //   }

    return(
        <Layout style={{backgroundColor: '#072A6F'}}>
            <Row>
                <Col >
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        style={{maxWidth:250, height:"100%", paddingTop: 85, position:"fixed", zIndex:1}}
                    >
                        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 5 }}>
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        </Button>
                        <Menu.Item key="1" onClick={gotoDashboard} icon={<PieChartOutlined />}>
                            Dashboard 
                        </Menu.Item>
                        <Menu.Item key="1" onClick={gotoProfil} icon={<PieChartOutlined />}>
                            Profil 
                        </Menu.Item>
                        <Menu.Item key="2" onClick={gotoSetor} icon={<ContainerOutlined />}>
                            Setor Sampah
                        </Menu.Item>
                        <Menu.Item key="3" 
                            onClick={() =>{
                                logoutDialog({icon: "info", title:"Konfirmasi Logout", text: "Apakah Anda yakin ingin logout?"})
                                .then(()=>{
                                    Auth.logout()
                                })
                            }} 
                            icon={<PoweroffOutlined />}
                            style={{color:"#FF0000"}}
                        >
                            Logout
                        </Menu.Item>
                    </Menu>
                </Col>

                {!(width < 600 && !collapsed) &&
                <Col span={24} style={{paddingLeft:padding, marginTop:20}}>
                    <Row justify="center">
                        <Switch>
                            {/* <PrivateRoute exact path="/dashboard" component={Profil} />
                            <PrivateRoute exact path="/dashboard/edit-profil" component={FormDataUser} /> */}
                        </Switch>
                    </Row>
                </Col>
                }
            </Row>
        </Layout>
    );
}

export default withRouter(DashboardUser)