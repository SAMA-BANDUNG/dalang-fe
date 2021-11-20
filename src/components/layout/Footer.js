import React from "react";
import { Layout, Typography, Row, Col } from "antd";
//import { InstagramFilled, FacebookFilled, YoutubeFilled } from '@ant-design/icons';
import { withRouter} from "react-router-dom";
import call from "../../assets/images/call.png"
import mail from "../../assets/images/mail.png"
import instagram from "../../assets/images/instagram.png"

const { Text } = Typography;

const FooterLayout = (props) => {
    // const openURL = (URL) =>{
    //     window.open(URL, "_blank");
    // }

    return(
        <Layout className="footer">
            <Row align="top" justify="space-between" style={{minWidth:'100%', padding:15}}>
                <Col span={8} style={{paddingLeft:100}}>
                    <Row justify="center">
                        <Text className="text-footer title">
                            Sekretariat
                        </Text>
                    </Row>
                    <Row justify="center" style={{paddingLeft:90}}>
                        <Text className="text-footer">
                            SAMA Bandung Headquarter <br/>
                            Jl. Griya Bandung Indah No. 39 <br/>
                            Buahbatu, Kec. Bojongsoang, Bandung <br/>
                            Jawa Barat 40287
                        </Text>
                    </Row>
                </Col>
                <Col span={8} >
                    <Row justify="center">
                        <Text className="text-footer title">
                           Menu
                        </Text>
                    </Row>
                    <Row justify="center" style={{paddingLeft:30}}>
                        <Text className="text-footer">
                            Beranda <br/>
                            Tentang Kami <br/>
                            Kontak <br/>
                            Daftar <br/>
                            Login <br/>
                        </Text>
                    </Row>
                </Col>
                <Col span={8} style={{paddingRight: 100}}>
                    <Row justify="center">
                        <Text className="text-footer title">
                            Kontak
                        </Text>
                    </Row>
                    <Row justify="center" style={{paddingLeft:50}}>
                        <Text className="text-footer">
                            <img src={mail} alt="mail" style={{marginRight:10}}></img> contact@samabdg.id<br/>
                            <img src={instagram} alt="ig" style={{marginRight:10}}></img>@samabandung<br/>
                            <img src={call} alt="call" style={{marginRight:10}}></img> +62-81234567891 
                        </Text>
                    </Row>
                </Col>
            </Row>
            <Row align='middle' justify="center" style={{minHeight:'100%'}}>
                <Col>
                    <Row justify="center">
                        <Text className="text-footer">
                            © 2021 | Sama Bandung.
                        </Text>
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default withRouter(FooterLayout)