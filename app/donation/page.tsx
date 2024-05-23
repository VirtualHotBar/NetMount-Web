'use client'
import { Button, Card, Space } from 'antd'
import Modal from 'antd/es/modal/Modal';
import React, { useEffect, useState } from 'react'

import './style.css'

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
                    <td ><img src="//p1.hotpe.top/i/PicGo/202302031716843.jpg" /></td>
                    <td ><img src="//p1.hotpe.top/i/PicGo/202302031715348.jpg" /></td>
                    <td ><img src="//p1.hotpe.top/i/PicGo/202302031715361.jpg" /></td>
                </tr>
            </tbody>
        </table>
        <br />
        <h3>感谢您的捐赠！</h3>


    </div>)
}
