import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Layout, Row, Col, Typography, Form, Input, DatePicker, Image, Button } from 'antd';
import { LoadingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import useWindowDimensions from '../../components/util/WindowSize'
import APIServices from "../../services";
import plantImage from "../../assets/images/plant.png"
import { dialog } from "../../components/util/Alert";
const { Content } = Layout;
const { Text } = Typography;

const Registrasi = () => {
    const { width } = useWindowDimensions();
    const history = useHistory();
    const [formRegisInput] = Form.useForm();
    const [isLoading, setLoading] = useState(false);
    const [regisStep, setRegisStep] = useState(1);
    const dateFormat = 'DD/MM/YYYY';

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

    const gotoLogin = () => {
        const loc = '/login';
        history.push(loc);
    }

    const onFinish = (values) => {
        setLoading(true)
        let body = {
            full_name: values.full_name,
            date_of_birth: values.date_of_birth,
            address: values.address,
            phone_number: values.phone_number,
            phone_type: null,
            email: values.email,
            password: values.password,
            langitude: "-6.909781",
            longitude: "107.6172202"
        }

        APIServices.register(body)
        .then(res => {
            console.log(res);
            setLoading(false);
            if(res.data){
                gotoLogin()
                dialog({
                    icon: "success", 
                    title:"Pendaftaran Berhasil", 
                    text:"Anda dapat login menggunakan akun yang telah terdaftar"
                })
                .then(()=>{
                    console.log("Berhasil");
                })
            }
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
            if(err){
                dialog({icon: "error", title:"Pendaftaran Gagal", text:"Terjadi Kesalahan!"}).then(()=>{
                    console.log("Gagal");
                })
            }
        })
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
                                        Sudah memiliki akun?
                                    </Text>
                                    <Button type="text" onClick={gotoLogin} style={{marginTop:-5}}>
                                        <Text className="text-auth-button">
                                            Masuk
                                        </Text>
                                    </Button>
                                </Row>
                            </Col>
                            <Col span={24} style={{marginBottom:10}}>
                                <Text className="text-aboutus">
                                    Bergabung bersama kami!
                                </Text>
                            </Col>
                            <Col span={24} style={{marginBottom:30}}>
                                <Text className="text-auth">
                                    Daftarkan dirimu sekarang untuk memulai <br/>
                                    masa depan lebih baik!
                                </Text>
                            </Col>
                            <Col offset={4} span={20}>
                                    <Form form={formRegisInput} onFinish={onFinish}>
                                        <div style={{display: (regisStep===2) && "none"}}>
                                            <Col span={24}>
                                                <Text>
                                                    Nama Lengkap
                                                </Text>
                                                <Form.Item
                                                    name="full_name"
                                                    required
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Harap masukkan nama lengkap anda!'
                                                        },
                                                    ]}
                                                    style={{marginBottom:10}}
                                                    >
                                                    
                                                    <Input className="input-form" 
                                                        placeholder={fieldPhoneActive ? "" : "Masukkan nama lengkap anda!"}
                                                        // prefix={<UserOutlined />}
                                                        // onFocus={() => setFieldPhoneActive(true)}
                                                        onBlur={(e) => {if(e.target.value === ""){setFieldPhoneActive(false)} }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Text>
                                                    Tanggal Lahir
                                                </Text>
                                                <Form.Item
                                                    name="date_of_birth"
                                                    required
                                                    rules={[
                                                    {
                                                        required: true,
                                                        message: 'Harap masukkan tanggal lahir anda!'
                                                    },]}
                                                    style={{marginBottom:10}}
                                                    >
                                                    <DatePicker className="input-form" format={dateFormat} placeholder="01/01/2021"/>
                            
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Text>
                                                    Alamat
                                                </Text>
                                                <Form.Item
                                                    name="address"
                                                    required
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Harap masukkan alamat anda!'
                                                        },
                                                    ]}
                                                    style={{marginBottom:30}}
                                                    >
                                                    
                                                    <Input className="input-form" 
                                                        placeholder={fieldPhoneActive ? "" : "Masukkan nama alamat anda!"}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Button
                                                    block
                                                    type="primary"
                                                    className="app-btn tertiary"
                                                    style={{width:425}}
                                                    onClick={() => {
                                                        setRegisStep(2)
                                                    }}
                                                >
                                                    Lanjut
                                                </Button>
                                            </Col>
                                        </div>
                                        <div style={{display: (regisStep===1) && "none"}}>
                                            <Col span={24}>
                                                <Text>
                                                    Nomor Telepon
                                                </Text>
                                                <Form.Item
                                                    name="phone_number"
                                                    required
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Harap masukkan nomor telepon anda!'
                                                        },
                                                        {
                                                            pattern: new RegExp('^[0-9]+$'),  
                                                            message: 'Harap hanya masukkan angka!',
                                                        }
                                                    ]}
                                                    style={{marginBottom:10}}
                                                    >
                                                    
                                                    <Input className="input-form" 
                                                        placeholder="Masukkan nomor telepon anda!"
                                                        // prefix={<UserOutlined />}
                                                        onFocus={() => setFieldPhoneActive(true)}
                                                        onBlur={(e) => {if(e.target.value === ""){setFieldPhoneActive(false)} }}
                                                    />
                                                </Form.Item>
                                            </Col>
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
                                                        placeholder={fieldPhoneActive ? "" : "Masukkan email anda!"}
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
                                                        placeholder={fieldPasswordActive ? "" : "Password"}
                                                        onFocus={() => setFieldPasswordActive(true)}
                                                        onBlur={(e) => {if(e.target.value === ""){setFieldPasswordActive(false)} }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Row>
                                                <Button
                                                    block
                                                    type="primary"
                                                    className="app-btn fourth"
                                                    style={{width:200, marginRight:25}}
                                                    onClick={()=> {setRegisStep(1)}}
                                                >
                                                    Kembali
                                                </Button>
                                                <Button
                                                    block
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="app-btn tertiary"
                                                    style={{width:200}}
                                                    disabled={isLoading}
                                                >
                                                    {isLoading && <LoadingOutlined />}
                                                    Daftar
                                                </Button>
                                                </Row>
                                            </Col>
                                        </div> 
                                    </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default withRouter(Registrasi)