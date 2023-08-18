
import style from './login.module.css'
import { useEffect,useRef } from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom"
import  { userParams } from "./login.d";
// 子组件
import ChildCoonent from "../../components/Ceshi"

interface IFnChildInstance{
    add:()=>void
}
export default function Login() {
    const childRef= useRef<IFnChildInstance>(null)
    let navigate = useNavigate()
    const onFinish = (values: userParams) => {
        console.log('Success:', values);
        // let { username, password } = values
        navigate('/home')

    };
    const getdata = (data:string) => {
        console.log(data,"这里是子组件传递过来的data")
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    function textload():void{
        // 使用react对欢迎登录四个字进行逐个加载效果
        let welecom = document.querySelector(`.${style['welecom']}`) as HTMLElement
        welecom.innerHTML=' '
        let str = '大家好啊'
        let arr = str?.split('')
        let i = 0
        let timer = setInterval(() => {
            if (i < arr!.length) {
                welecom!.innerHTML += arr![i]
                i++
            } else {
                clearInterval(timer)
            }
        }, 100)
    }

    const dian = ():void => {
        childRef.current?.add()
    }

    useEffect(() => {
        console.log('login')
        textload()
    }, [])
    return (
        <>
        <ChildCoonent ref={childRef} getdata={getdata} />
        <button onClick={dian}>点击</button>
            <div className={style['container']}>
                <div className={style['loginbox']}>
                    <div className={style['welecom']}> </div>
                    <Form
                        className={style['loginform']}
                        name="basic"
                        onFinish={onFinish}
                        labelCol={{ span: 4 }}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item<userParams>
                            label="用户名"
                            className={style['username']}
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input placeholder='请输入用户名' />
                        </Form.Item>
                        <Form.Item<userParams>
                            label="密 码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password placeholder='请输入密码' />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className={style['loginbtn']}>
                            登录
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}