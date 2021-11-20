import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Layout, Row, Col, Typography, Card, Form, Input, DatePicker, Image, Button, message } from 'antd';
import { LockOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
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
    const [visibleModal, setVisibleModal] = useState(false);
    const [regisStep, setRegisStep] = useState(1);
    const dateFormat = 'DD/MM/YYYY';

    const handleModal = () => {
        setVisibleModal(!visibleModal);
    };

    //
    const [fieldPhoneActive, setFieldPhoneActive] = useState(false);
    const [fieldPasswordActive, setFieldPasswordActive] = useState(false);
    //

    const gotoForgotPassword = () => {
        message.info("Laman Lupa Password belum tersedia");
        // const loc = '/lupa-password';
        // history.push(loc);
    }

    const gotoRegistrasi = () => {
        const loc = '/registrasi';
        history.push(loc);
    }

    const onFinish = (values) => {
        setLoading(true)
        let loginData = {
            var_login: values.var_login,
            password: values.password
        }
        // // Login Test
        //     if(values.no_telepon === "1" && values.password === "1"){
        //         localStorage.setItem('role', JSON.stringify("123"));
        //         const loc = 'profil-staf';
        //         history.push(loc);
        //     } else if (values.no_telepon === "2" && values.password === "2"){
        //         localStorage.setItem('role', JSON.stringify("234"));
        //         const loc = 'profil-dokter';
        //         history.push(loc);
        //     } else if(values.no_telepon === "3" && values.password === "3"){
        //         localStorage.setItem('role', JSON.stringify("pasien"));
        //         const loc = 'profil-pasien';
        //         history.push(loc);
        //     }
        // //

        Auth.login(loginData).then((response) => {
            setLoading(false);
            let res = response.data;
            let status = JSON.parse(res.data.status);
            let login_time = moment().unix();
            console.log("login time: ", login_time);

            if(res && status === 1){
                localStorage.setItem('no_identitas', JSON.stringify(res.data.no_identitas));
                localStorage.setItem('no_telepon', JSON.stringify(res.data.no_telepon));
                localStorage.setItem('role', JSON.stringify(res.meta.role * login_time));
                localStorage.setItem('token', JSON.stringify(res.meta.api_token));
                localStorage.setItem('login', JSON.stringify(login_time));
            } else if(status === 0){
                message.info("Akun Belum Terverifikasi");
                
                handleModal();
            } 
        
            if(Auth.isLogin()){
                let role = JSON.parse(localStorage.getItem('role'));
                let login_time = JSON.parse(localStorage.getItem('login'));
                if (role/login_time === 1){
                    history.push('/dashboard-admin');
                } else if (role/login_time === 2){
                    history.push('/dashboard-dokter');
                } else if (role/login_time === 3){
                    history.push('/dashboard-pasien');
                } else if (role/login_time === 4){
                    history.push('/dashboard-staf-umum');
                } else if (role/login_time === 5){
                    history.push('/dashboard-perawat');
                }
            }
        }).catch(err => {
            console.log(err)
            setLoading(false);
            if(err.response){
                message.error("Nomor Identitas atau Password yang Anda masukkan salah!");
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
                        <Text className="text-logo green" style={{marginTop:50, marginLeft:-300, zIndex:100}}>
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
                                                        message: 'Harap masukkan password Anda!'
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