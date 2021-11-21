import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Layout, Row, Col, Typography, Form, Input, Image, Button, message } from 'antd';
import { LoadingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import useWindowDimensions from '../../components/util/WindowSize'
import Auth from "../../services/authService";
import plantImage from "../../assets/images/plant.png"
import moment from 'moment';

const { Content } = Layout;
const { Text } = Typography;

const Login = () => {
    const { width } = useWindowDimensions();
    const history = useHistory();
    const [formRegisInput] = Form.useForm();
    const [isLoading, setLoading] = useState(false);

    //
    const [fieldPhoneActive, setFieldPhoneActive] = useState(false);
    const [fieldPasswordActive, setFieldPasswordActive] = useState(false);
    //

    // const gotoForgotPassword = () => {
    //     message.info("Laman Lupa Password belum tersedia");
    //     // const loc = '/lupa-password';
    //     // history.push(loc);
    // }

    const gotoHome = () => {
        const loc = '/';
        history.push(loc);
    }

    const gotoRegistrasi = () => {
        const loc = '/registrasi';
        history.push(loc);
    }

    const onFinish = (values) => {
        setLoading(true)
        let body = {
            email: values.email,
            password: values.password
        }

        Auth.login(body).then((response) => {
            setLoading(false);
            let res = response.data;
            let login_time = moment().unix();
            console.log("login time: ", login_time);

            localStorage.setItem('id', JSON.stringify(res.data.id));
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('user_type', JSON.stringify(res.data.user_type));
        
            // if(Auth.isLogin()){
            //     let role = JSON.parse(localStorage.getItem('role'));
            //     let login_time = JSON.parse(localStorage.getItem('login'));
            //     if (role/login_time === 1){
            //         history.push('/');
            //     } 
            // }
            
            message.success("Login berhasil!");
            history.push('/');
        }).catch(err => {
            console.log(err)
            setLoading(false);
            if(err.response){
                message.error("Email atau Password yang Anda masukkan salah!");
            } else {
                message.error("Terjadi kesalahan, periksa koneksi Anda!");
            }
        });
    }

    return(
        <Layout style={{backgroundColor: "#FFF"}}>
            <Content className="layout-auth">
                <Row justify="center" align="middle" style={{minHeight: 540}}>
                    <Col md={10} lg={10}>
                        <Row>
                        <Image 
                            src={plantImage} 
                            style={{height:"100vh", marginTop:(width>600 ? 0 : 40)}} 
                            preview={false}
                        > 
                        </Image>
                        <Text className="text-logo green" style={{marginTop:20, marginLeft:-300, zIndex:100}}>
                            <Fade left>
                                dalang
                            </Fade>             
                        </Text>
                        <Text className="text-logo black inter" style={{marginTop:100, marginLeft:-130, zIndex:100}}>
                            <Fade left>
                                <p>
                                #DAURULANG <br/>
                                SAMPAHKITA <br/> 
                                UNTUKMASADEPAN <br/>
                                LEBIHBAIK</p>
                            </Fade>             
                        </Text>
                        <Text className="text-logo green" style={{marginTop:20, marginLeft:100, zIndex:100}}>
                            <ArrowLeftOutlined style={{fontSize:30}} onClick={gotoHome}/>      
                        </Text>
                        </Row>
                    </Col>
                    <Col md={14} lg={14}>
                        <Row>
                            <Col span={24} style={{marginBottom:30}}>
                                <Row justify="end" style={{paddingRight: 80}}>
                                    <Text className="text-auth">
                                        Belum memiliki akun?
                                    </Text>
                                    <Button type="text" onClick={gotoRegistrasi} style={{marginTop:-5}}>
                                        <Text className="text-auth-button">
                                            Daftar
                                        </Text>
                                    </Button>
                                </Row>
                            </Col>
                            <Col span={24} style={{marginBottom:10}}>
                                <Text className="text-aboutus">
                                    Selamat datang kembali!
                                </Text>
                            </Col>
                            <Col span={24} style={{marginBottom:30}}>
                                <Text className="text-auth">
                                    Isi dengan data yang Anda masukkan <br/>
                                    saat proses pendaftaran
                                </Text>
                            </Col>
                            <Col offset={4} span={20}>
                                    <Form form={formRegisInput} onFinish={onFinish}>
                                            <>
                                            <Col span={24}>
                                                <Text>
                                                    Email
                                                </Text>
                                                <Form.Item
                                                    name="email"
                                                    required
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Harap masukkan email anda!'
                                                        },
                                                    ]}
                                                    style={{marginBottom:10}}
                                                    >
                                                    
                                                    <Input className="input-form" 
                                                        placeholder={fieldPhoneActive ? "" : "Masukkan Email"}
                                                        // prefix={<UserOutlined />}
                                                        onFocus={() => setFieldPhoneActive(true)}
                                                        onBlur={(e) => {if(e.target.value === ""){setFieldPhoneActive(false)} }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Text className={fieldPasswordActive ? "form-label active" : "form-label"}>
                                                    Password
                                                </Text>
                                                <Form.Item
                                                    name="password"
                                                    required
                                                    rules={[{
                                                        required: true,
                                                        message: 'Harap masukkan password anda!'
                                                    }]}
                                                    style={{marginBottom:30}}
                                                    >
                                                    <Input.Password className="input-form" 
                                                        // prefix={<LockOutlined />}
                                                        placeholder={fieldPasswordActive ? "" : "Masukkan Password"}
                                                        onFocus={() => setFieldPasswordActive(true)}
                                                        onBlur={(e) => {if(e.target.value === ""){setFieldPasswordActive(false)} }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Button
                                                    block
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="app-btn tertiary"
                                                    style={{width:425}}
                                                    disabled={isLoading}
                                                >
                                                    {isLoading && <LoadingOutlined />}
                                                    Masuk
                                                </Button>
                                            </Col>
                                            </>  
                                    </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default withRouter(Login)