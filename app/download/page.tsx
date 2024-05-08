'use client'
import { Button, Card, Space } from 'antd'
import Modal from 'antd/es/modal/Modal';
import React, { useEffect, useState } from 'react'

/* import iconWindows from '../../public/img/system/windows.svg'
import iconLinux from '../../public/img/system/linux.svg'
import iconMacos from '../../public/img/system/macos.svg' */
import Image from 'next/image';


interface ReleaseData {
    id: string;
    name: string;
    pushTime: string; // 注意：这里的时间字符串格式可能需要根据实际使用场景调整为特定的时间类型定义
    body: string;
    assets: {
        windows: Asset[];
        mac: Asset[];
        linux: Asset[];
    };
    website: string;
}

interface Asset {
    name: string;
    size: number;
    download_url: string;
    source_download_url: string;
    architecture: 'x64' | 'arm64';
}


let dlUrl = ''


export default function Download() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [releaseData, setReleaseData] = useState<ReleaseData>()
    //const [dlUrl, setDlUrl] = useState<string>('');

    const startDownload = (os: 'windows' | 'linux' | 'mac', arch: 'x64' | 'arm64', type: 'exe' | 'deb' | 'AppImage' | 'dmg' | 'msi' | 'app', lang?: 'zh' | 'en') => {
        if (!lang) {
            lang = 'zh';
        }
        dlUrl=`//api.hotpe.top/API/NetMount/Download/?os=${os}&arch=${arch}&type=${type}&lang=${lang}`
        location.href = dlUrl
        setTimeout(() => {
            setIsModalOpen(true);
        }, 2000)
    }

    const noStartDownload = () => {
        console.log(dlUrl);
        open(dlUrl, '_blank')
    }

    useEffect(() => {
        fetch('//api.hotpe.top/API/NetMount/GetUpdate/').then(res => res.json()).then((data: any) => {
            if (data.state === "success") {
                setReleaseData(data.data);
            } else {
                console.error('get update failed');
            }
        })
    }, [])


    return (
        <div style={{ marginTop: '8rem' }}>

            <Modal title="感谢你的下载" centered
                open={isModalOpen}
                onCancel={() => { setIsModalOpen(false) }}
                footer={<Space>
                    <Button onClick={() => { noStartDownload()}}>没有开始下载</Button>
                    <Button type='primary' onClick={() => { open('//api.hotpe.top/API/NetMount/GoLink?id=docs-start', '_blank') }}>好的</Button>
                </Space>}
            >

                强烈建议您阅读文档后再使用，在这里有NetMount的使用介绍和解决方案。
            </Modal>

            <h1 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 'bold' }}>下载</h1>
            <div style={{ width: '50rem', margin: '0 auto', display: 'flex', marginTop: '3rem' }}>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/windows.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Windows</p>
                    <Button onClick={() => { startDownload('windows', 'x64', 'exe'); }} style={{ marginTop: '1rem' }} type='primary'>下载</Button>
                </Card>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/linux.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Linux</p>
                    <Space>
                        <Button onClick={() => { startDownload('linux', 'x64', 'deb'); }} style={{ marginTop: '1rem' }} type='primary' >Debian</Button>
                        <Button onClick={() => { startDownload('linux', 'x64', 'AppImage'); }} style={{ marginTop: '1rem' }} type='primary' >AppImage</Button>
                    </Space>

                </Card>
                <Card style={{ width: '15rem', height: '10rem', textAlign: 'center', alignItems: 'center', margin: 'auto' }}>
                    <img style={{ margin: 'auto' }} src="/img/system/macos.svg" />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MacOS</p>
                    <Space>
                        <Button onClick={() => { startDownload('mac', 'arm64', 'dmg'); }} style={{ marginTop: '1rem' }} type='primary' >Arm</Button>
                        <Button onClick={() => { startDownload('mac', 'x64', 'dmg'); }} style={{ marginTop: '1rem' }} type='primary' >Inter</Button>
                    </Space>
                </Card>
            </div>

            <div style={{ height: '10rem', textAlign: 'center', marginTop: '3rem', color: 'rgb(103, 119, 136)' }}>
                {releaseData ?
                    <Space size={'large'}>
                        <span>版本 : {releaseData.id} </span>
                        <span>更新时间 : {releaseData.pushTime.substring(0, 10)}</span>
                        <a href="//api.hotpe.top/API/NetMount/GoLink?id=update-log" style={{ color: 'rgb(103, 119, 136)' }} target="_blank" className="class-link" rel="noopener nofollow">更新日志</a>
                    </Space> : '正在加载...'
                }

                <br />
                使用NetMount及其相关功能表示您已经阅读并同意
                <a href="//api.hotpe.top/API/NetMount/GoLink?id=contract" style={{ color: 'rgb(103, 119, 136)' }} target="_blank" className="class-link" rel="noopener nofollow">用户协议</a>
            </div>

        </div>
    )
}
