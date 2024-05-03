'use client'
import { Button, Card } from 'antd'
import Modal from 'antd/es/modal/Modal';
import React, { useState } from 'react'

export default function Download() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const startDownload = (os: 'windows' | 'linux' |'macos') => {
        location.href='//api.hotpe.top/API/NetMount/Download/?os='+os;
        setTimeout(() => {
        setIsModalOpen(true);
    },2000)
    }

    return (
        <div style={{ marginTop: '8rem' }}>

            <Modal title="感谢你的下载" centered open={isModalOpen} okText="好的" cancelText="没有开始下载" 
            onOk={() => { setIsModalOpen(false),open('//docs.netmount.cn/docs/started', '_blank') }} 
            onCancel={() => { setIsModalOpen(false) ; open('//docs.netmount.cn/qq-group/', '_blank');}}>
            强烈建议您阅读文档后再使用，在这里有NetMount的使用介绍和解决方案。
            </Modal>

            <h1 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 'bold' }}>下载</h1>
            <div style={{ width: '50rem', margin: '0 auto', display: 'flex', marginTop: '3rem' }}>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/windows.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Windows</p>
                    <Button onClick={() => { startDownload('windows'); }} style={{ marginTop: '1rem' }} type='primary'>下载</Button>
                </Card>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/linux.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Linux</p>
                    <Button onClick={() => { startDownload('linux'); }} style={{ marginTop: '1rem' }} type='primary' disabled>正在开发</Button>
                </Card>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/macos.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MacOS</p>
                    <Button onClick={() => { startDownload('macos'); }} style={{ marginTop: '1rem' }} type='primary' disabled>正在开发</Button>
                </Card>
            </div>

            <div style={{ height: '10rem', textAlign: 'center', marginTop: '3rem', color: 'rgb(103, 119, 136)' }}>
                使用NetMount及其相关功能表示您已经阅读并同意NetMount用户协议
            </div>

        </div>
    )
}
