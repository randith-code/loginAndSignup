import { Space, Card, Typography, Input, Button } from "antd"
import { Link } from "react-router-dom";

const Login = () => {

    const { Title } = Typography;
    const { Paragraph } = Typography;


    return(
        <Space
            style={{
                display:'grid',
                placeItems: 'center',
                width:'100vw',
                height:' 100vh'
            }}  
        >
            <Card style={{
                width:'25vw',
                display:'grid',
                placeItems: 'center',
                padding:'0px'
            }}>
               <Space size={"middle"} direction="vertical">
                    <Space direction="vertical">
                        <Title level={3}>Login</Title>
                        <Paragraph strong>To get started</Paragraph>
                    </Space>
                    <Input size="large" style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }} bordered={false} placeholder="itsnaeemanjum@gmail.com"/>
                    <Input.Password size="large" style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }} bordered={false} placeholder="Password"></Input.Password>
                    <Paragraph >Forgot Password?</Paragraph>            
                    <Button style={{width:'100%'}} type="primary">Continue</Button>
                    <Space.Compact block style={{
                        justifyContent:'center',
                        alignItems:'center'
                        }}
                    >

                        <Paragraph>New User?</Paragraph>
                        <Link to={'/signup'}>
                            <Paragraph strong>Register</Paragraph>                        
                        </Link>
                    </Space.Compact>
               </Space>
            </Card>
        </Space>
    )
}

export default Login