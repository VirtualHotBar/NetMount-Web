import React from 'react'

import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';

function FooterMod() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '90%', margin: '0 auto' }}>
                <p><a href="//docs.netmount.cn/qq-group" target="_blank" className="class-link" rel="noopener">加入官方Q群</a><br /><br /></p>
                <p style={{ textAlign: 'center' }}><strong>友 情 链 接</strong></p>
                <p><a href="https://blog.hotpe.top/" target="_blank" className="class-link" rel="noopener" >VirtualHotBar</a> |
                    <a href="https://www.hotpe.top/" target="_blank" className="class-link" rel="noopener" >HotPE工具箱</a> |
                    <a href="https://sysri.cn/" target="_blank" className="class-link" rel="noopener" > SysRi</a> |
                    <a href="https://pic.hotpe.top/" target="_blank" className="class-link" rel="noopener" > HotPic</a> |
                    <a href="https://pan.hotpe.top/" target="_blank" className="class-link" rel="noopener" > HotPan</a></p>
                    <br />
            </div>
            
            <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', padding: '10px 10px 10px', textAlign: 'center' }}>
                <a href="https://beian.miit.gov.cn/" target="_blank" className="class-link" rel="noopener">蜀ICP备2023001640号-3</a>
                <br />
                © {
                    new Date().getFullYear() === 2024 ? '2024' : `2024-${new Date().getFullYear()}`
                } <a href="https://blog.hotpe.top/" className="class-link" >VirtualHotBar</a>
            </div>
        </Footer>
    )
}

export default FooterMod