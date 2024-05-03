import Script from 'next/script'
import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        {/* 在这里插入51.la的统计代码 */}
{/*         <Script
            src="//sdk.51.la/js-sdk-pro.min.js"
        />
        <script>{`LA.init({id:"KQdBh9bWzAxDECPa",ck:"KQdBh9bWzAxDECPa"})`}</script> */}
        {children}
    </div>
}