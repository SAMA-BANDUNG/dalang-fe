import React from 'react'
import { NavLink } from 'react-router-dom'
import { Drawer, Button, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import Auth from '../../services/authService';

const Menu = props => {

    return(
        <Drawer
            destroyOnClose={true}
            visible={props.visible}
            title="Menu"
            placement="right"
            closable={true}
            footer={null}
            width="300px"
            onClose={props.buttonCancel}
            bodyStyle={{backgroundColor:"#008753"}}
        >
            <Row justify="center" style={{marginTop:10}}>
                {Auth.isLogin()? 
                    <Button type='primary' className="app-btn primary" onClick={props.handleDashboard}>
                        <UserOutlined style={{fontSize:20}}/> DASHBOARD
                    </Button>
                    :
                    <Button type='primary' className="app-btn primary" onClick={props.handleRegistrasi}>
                        MULAI SEKARANG
                    </Button>
                }
            </Row>
            <Row justify="center" style={{marginTop:10}}>
                <NavLink to="/" className="title-home-mobile" onClick={props.buttonCancel}>
                    BERANDA
                </NavLink>
            </Row>
            <Row justify="center" style={{marginTop:10}}>
                <NavLink to="/" className="title-navmenu-mobile" onClick={props.buttonCancel}>
                    TENTANG KAMI
                </NavLink>
            </Row>
            <Row justify="center" style={{marginTop:10}}>
                <NavLink to="/" className="title-navmenu-mobile" onClick={props.buttonCancel}>
                    KONTAK
                </NavLink>
            </Row>
            <Row justify="center" style={{marginTop:10}}>
                <NavLink to="/bank-sampah" className="title-navmenu-mobile" onClick={props.buttonCancel}>
                    BANK SAMPAH
                </NavLink>
            </Row>
        </Drawer>
    )
}

export default Menu
