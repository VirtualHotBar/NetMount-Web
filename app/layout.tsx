
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
//import './i18';

import './globals.css';
import FooterMod from './layout/footer';
import { Menu } from 'antd';
import { Routers } from './type/routers';
import HeaderMod from './layout/header';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import type { Metadata } from "next";


const contentWrapperStyle = {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  justifyContent: 'center',
  /* overflow: 'hidden'  */
};


const routers: Array<Routers> = [
  {
    word: '首页',
    title: 'NetMount - 统一管理和挂载云存储设施',
    path: '/',
  },
  {
    word: '捐赠',
    title: '捐赠 - NetMount',
    path: '/donation',
  }, 
  {
    word: '文档',
    title: '',
    path: '//docs.netmount.cn'
  },
  {
    word: '下载',
    title: '下载 - NetMount',
    path: '/download',
  }, 
  {
    word: 'GitHub',
    title: '',
    path: '//github.com/VirtualHotBar/NetMount/'
  }
]
//const router = useRouter();

export const metadata: Metadata = {
  /*   title: "NetMount", */
  description: " NetMount是一个云存储管理工具，一个软件轻松管理所有云存储，像操作本地磁盘一样组织文件。支持国内外近100种云存储，如OneDrive、百度网盘、S3对象存储、天翼云盘等。  ",
};


const RootLayout = ({ children, params }: { children?: React.ReactNode, params: { lang: string } }) => {
  //const router =usePathname(); // 使用 useRouter 钩子


  return (<html lang={params.lang}>
    <body style={{ margin: 0, padding: 0 }}>
      <AntdRegistry>
        <Layout style={{ backgroundColor: '#fff', overflow: 'hidden',minHeight: '100vh' }}>
          <HeaderMod contentWrapperStyle={contentWrapperStyle} routers={routers} />
          <Content >
            <div style={{ ...contentWrapperStyle, marginTop: '64px' }}>
              {children}
              {params.lang}
            </div>
          </Content>
          <FooterMod />
        </Layout>
      </AntdRegistry>
    </body>
  </html>)
}



export default RootLayout;
