'use client'

import React, { CSSProperties, useCallback, useEffect, useState } from 'react'
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { Routers } from '../type/routers';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import iconNetMount from '../../public/img/color.svg';

export default function HeaderMod(props: { contentWrapperStyle: CSSProperties, routers: Routers[] }) {
    const pathname = usePathname();
    const title = props.routers.find(item => item.path === pathname)?.title;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        //document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"KQdBh9bWzAxDECPa\",ck:\"KQdBh9bWzAxDECPa\"});</script>")

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setIsScrolled(currentScrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);


    }, []);

    useEffect(() => {
        eval(`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?993ce862f60eb462df5e92616c5eaabe";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`)
        
    eval(`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ne67928v24");`);
        
        

    }, []
    )
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
                    <Image width={30}  style={{  marginRight: '10px' }} alt='' src={iconNetMount} />
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
