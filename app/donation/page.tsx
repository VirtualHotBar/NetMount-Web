'use client'
import { Button, Card, Space } from 'antd'
import Modal from 'antd/es/modal/Modal';
import React, { useEffect, useState } from 'react'

import './style.css'
import Image from 'next/image';

export default function Download() {
    return (<div className='donation-container' style={{
        marginTop: '8rem',
        textAlign: 'center'
    }}>
        <br />
        <h1 style={{ textAlign: 'center', fontSize: '1.75rem', fontWeight: 'bold' }}>捐赠</h1>
        <br />

        <p style={{ fontSize: '1rem' }}>NetMount为<strong>开源免费的非盈利项目</strong>。如果你觉得项目不错请考虑捐赠，以维持项目的持续维护。</p>
        <br />
        <br />
        <table className='donation-table'>
            <thead>
                <tr>
                    <th>微信支付</th>
                    <th>支付宝</th>
                    <th>QQ支付</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>
                        <Image
                            src="//sc.sysri.cn/i/PicGo/202302031716843.jpg"
                            alt='微信支付'
                            width={200} // 修改为具体数值，或使用CSS控制
                            height={200}
                            style={{ width: '100%', height: 'auto' }} // 使用style控制响应式
                        />
                    </td>
                    <td>
                        <Image
                            src="//sc.sysri.cn/i/PicGo/202302031715348.jpg"
                            alt='支付宝'
                            width={200}
                            height={200}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </td>
                    <td>
                        <Image
                            src="//sc.sysri.cn/i/PicGo/202302031715361.jpg"
                            alt='QQ支付'
                            width={200}
                            height={200}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <h3>感谢您的捐赠！</h3>


    </div>)
}
