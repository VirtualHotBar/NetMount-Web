import { Button, Card } from 'antd'
import React from 'react'

export default function Download() {
    return (
        <div style={{ marginTop: '8rem' }}>
            <h1 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 'bold' }}>下载</h1>
            <div style={{ width: '50rem', margin: '0 auto', display: 'flex', marginTop: '3rem' }}>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/windows.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Windows</p>
                    <Button href='//api.hotpe.top/NetMount/Download/?os=windows' style={{ marginTop: '1rem' }} type='primary'>下载</Button>
                </Card>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/linux.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Linux</p>
                    <Button style={{ marginTop: '1rem' }} type='primary' disabled>正在开发</Button>
                </Card>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/macos.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MacOS</p>
                    <Button style={{ marginTop: '1rem' }} type='primary' disabled>正在开发</Button>
                </Card>
            </div>

            <div style={{ height: '10rem', textAlign: 'center', marginTop: '3rem', color: 'rgb(103, 119, 136)' }}>
                使用NetMount及其相关功能表示您已经阅读并同意NetMount用户协议
            </div>

        </div>
    )
}
