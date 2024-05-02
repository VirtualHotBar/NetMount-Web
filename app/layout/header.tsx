'use client'

import React, { CSSProperties, useCallback, useEffect, useState } from 'react'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { Routers } from '../type/routers';
import { usePathname } from 'next/navigation';
import Head from 'next/head';



export default function HeaderMod(props: { contentWrapperStyle: CSSProperties, routers: Routers[] }) {
    const pathname = usePathname();
    const title = props.routers.find(item => item.path === pathname)?.title;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setIsScrolled(currentScrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerStyle: CSSProperties = {
        ...{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            boxShadow: '0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)',
            zIndex: 999,
            transition: 'all 0.3s ease',
        },
        ...(isScrolled ? { height: '50px', /* padding: '5px'  */ } : {}), // 这里根据需要调整缩小后的样式
    };



    return (
        <Header style={{
            ...headerStyle,
            backdropFilter: 'blur(15px)',
            background: 'rgba(230, 234, 245, 0.5)'
        }}>
            <div style={{
                ...props.contentWrapperStyle,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                maxHeight: '100%',
                overflow: 'hidden',
            }}>

                <title>{title}</title>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }} onClick={() => { location.href = '/' }}>
                    <img style={{ width: '30px', marginRight: '10px' }} src="/img/color.svg" />
                    <strong style={{ fontSize: '20px' }} >NetMount</strong>
                </div>
                <div style={{ width: '100%' }}></div>
                <div >
                    <Menu mode="horizontal"
                        style={{ maxHeight: '100%', background: 'rgba(0, 0, 0, 0)' }}
                        selectedKeys={[]}
                        onClick={(v) => {
                            if (v.key.substring(0, 2) === '//') {
                                open(v.key)
                            } else {
                                location.href = v.key
                            }

                        }}
                        items={
                            props.routers.map((item) => ({
                                key: item.path,
                                label: item.word
                            }))
                        } />
                </div>
            </div>

        </Header>
    )
}
