import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { Button, Carousel, Col, Divider, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { DownloadOutlined } from '@ant-design/icons';
import ScrollImages from '@/components/scrollImages';
import StackedImages from '@/components/stackedImages';
import Image from 'next/image';
import iconNetMount from '../public/img/text.svg'

const boxStyle: CSSProperties = {
  boxShadow: 'rgba(140, 152, 164, 0.176) 0px 10px 40px 10px',
  border: '-1px solid #ccc',
  borderRadius: '8px'
}

export default function page() {

  return (
    <div style={{ paddingTop: '8rem' }}>
      <div style={{height:0,width:0}}>
        <Image src="//sc.sysri.cn/i/p/1/6888d795c8c86.png" alt="Placeholder" width={1} height={1} />{/* //i.vhbs.top/i/p/1/6680b237358d6.png */}
      </div>
      <Row>
        <Col flex={24}>
          <div style={{ height: '6rem' }}></div>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333333', margin: '0 0 10px 0' }}>
            <Image src={iconNetMount} style={{ width: '7rem' }} alt='NetMount' />
          </p>
          <span style={{/* color:'rgb(55, 125, 255)',  */fontSize: '2.9991rem', fontWeight: 'bold' }}>统一管理和挂载云存储设施</span>
          <p>

          </p>
          <Button href='/download' type="primary" icon={<DownloadOutlined />} size="large" style={{ marginTop: '20px' }}>
            下载
          </Button>
        </Col>
        <Col flex={24}>
          <StackedImages style={{ width: '35rem', height: '35rem' }} images={['//sc.sysri.cn/i/p/1/66321983c6d5b.png', '//sc.sysri.cn/i/p/1/6632199c4e55c.png']} />
        </Col>
      </Row>

      <Divider />

      <div>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'rgb(55, 125, 255)' /* 'rgba(0, 0, 0, 0.4)' */ }}>一个软件</p>
        <p style={{ textAlign: 'center', fontSize: '35px' }}><strong>管理你的所有云存储</strong></p>
        <br />
        {/* 网盘 */}
        <ScrollImages scrollSpeed={50} images={[
          { title: '百度网盘', img: '//sc.sysri.cn/i/netmount/storage/netdisk/BaiduNetDisk.png' },
          { title: 'Alist', img: '//sc.sysri.cn/i/netmount/storage/others/alist.svg' },
          { title: '阿里云盘', img: '//sc.sysri.cn/i/netmount/storage/netdisk/aliyundrive.png' },
          { title: '123云盘', img: '//sc.sysri.cn/i/netmount/storage/netdisk/123pan.png' },
          { title: '天翼云盘', img: '//sc.sysri.cn/i/netmount/storage/netdisk/189Cloud.png' },
          { title: 'Box', img: '//sc.sysri.cn/i/netmount/storage/netdisk/Box.svg' },
          { title: '腾讯微云', img: '//sc.sysri.cn/i/netmount/storage/netdisk/weiyun.png' },
          { title: 'Dropbox', img: '//sc.sysri.cn/i/netmount/storage/netdisk/Dropbox.png' },
          { title: 'GoogleDrive', img: '//sc.sysri.cn/i/netmount/storage/netdisk/GoogleDrive.svg' },
          { title: 'Mega', img: '//sc.sysri.cn/i/netmount/storage/netdisk/Mega.svg' },
          { title: 'OneDrive', img: '//sc.sysri.cn/i/netmount/storage/netdisk/OneDrive.svg' },
          /* { title: '115网盘', img: '//sc.sysri.cn/i/netmount/storage/netdisk/115.png' }, */
        ]} />
        <br />
        <ScrollImages scrollSpeed={70} images={[
          { title: 'SharePoint', img: '//sc.sysri.cn/i/netmount/storage/netdisk/SharePoint.svg' },
          { title: 'YandexDisk', img: '//sc.sysri.cn/i/netmount/storage/netdisk/YandexDisk2.png' },
          { title: 'Azure', img: '//sc.sysri.cn/i/netmount/storage/vendors/Azure.svg' },
          { title: 'TencentCloud', img: '//sc.sysri.cn/i/netmount/storage/vendors/TencentCloud.svg' },
          { title: 'Backblaze', img: '//sc.sysri.cn/i/netmount/storage/vendors/Backblaze.svg' },
          { title: 'CloudflareR2', img: '//sc.sysri.cn/i/netmount/storage/vendors/CloudflareR2.svg' },
          { title: 'Cloudian', img: '//sc.sysri.cn/i/netmount/storage/vendors/Cloudian.svg' },
          { title: 'DigitalOcean', img: '//sc.sysri.cn/i/netmount/storage/vendors/DigitalOcean.svg' },
          { title: 'DirectCloud', img: '//sc.sysri.cn/i/netmount/storage/vendors/DirectCloud.svg' },
          { title: 'GoogleCloud', img: '//sc.sysri.cn/i/netmount/storage/vendors/GoogleCloudPlatform.svg' },
        ]} />
        <br />
        <ScrollImages scrollSpeed={60} images={[
          { title: 'OSS', img: '//sc.sysri.cn/i/netmount/storage/vendors/AlibabaObjectStorage.svg' },
          { title: 'IBMCloud', img: '//sc.sysri.cn/i/netmount/storage/vendors/IBMObjectStorage.svg' },
          { title: 'pCloud', img: '//sc.sysri.cn/i/netmount/storage/netdisk/pCloud2.png' },
          { title: 'IDrivee', img: '//sc.sysri.cn/i/netmount/storage/vendors/IDrivee2.svg' },
          { title: 'OracleCloud', img: '//sc.sysri.cn/i/netmount/storage/vendors/OracleCloud.svg' },
          { title: 'AWS S3', img: '//sc.sysri.cn/i/netmount/storage/protocol/aws-s3.svg' },
          { title: 'FTP', img: '//sc.sysri.cn/i/netmount/storage/protocol/ftp.png' },
          { title: 'WebDAV', img: '//sc.sysri.cn/i/netmount/storage/protocol/webdav.jpg' },
          { title: 'MinIO', img: '//sc.sysri.cn/i/netmount/storage/protocol/MinIO.svg' },
          { title: 'Nextcloud', img: '//sc.sysri.cn/i/netmount/storage/others/Nextcloud.svg' },
          /* { title: 'OwnCloud', img: '//sc.sysri.cn/i/netmount/storage/others/OwnCloud.svg' }, */
        ]} />
      </div>

      <div style={{ marginTop: '5rem', textAlign: 'center' }}>
        {/* <p style={{ fontSize: '1.5rem', color: 'rgb(55, 125, 255)' }}>存储管理</p> */}
        <p style={{ fontSize: '35px', /* color: 'rgb(55, 125, 255)' */ }}><strong>集中直观的存储管理</strong></p>
        <p style={{ fontSize: '1.2rem', color: 'rgb(103, 119, 136)' }}>功能丰富的文件浏览器，支持文件上传、复制、移动、删除、重命名。</p>
        <br />
        <div style={{ width: '100%' }}>
          <Space size={'large'} style={{ margin: 'auto' }}>
            <div style={{ ...boxStyle, width: '35rem', height: '17rem', overflow: 'hidden' }}>
              <Image src="//sc.sysri.cn/i/p/1/665ede1987231.png" alt="Storage Management 1" style={{ width: '100%' }} width={850} height={170} />
            </div>
            <div style={{ ...boxStyle, width: '35rem', height: '17rem', overflow: 'hidden' }}>
              <Image src="//sc.sysri.cn/i/p/1/665ede1a0e706.png" alt="Storage Management 2" style={{ width: '100%' }} width={850} height={170} />
            </div>
          </Space>
        </div>
      </div>


      <div style={{ marginTop: '8rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%' }}>
          <p style={{ fontSize: '1.5rem', color: 'rgb(55, 125, 255)' }}>挂载云存储</p>
          <p style={{ fontSize: '35px', /* color: 'rgb(55, 125, 255)' */ }}><strong>像本地磁盘一样管理你的文件</strong></p>
          <p style={{ fontSize: '1.2rem', color: 'rgb(103, 119, 136)', paddingRight: '5%' }}>云存储整合为本地文件系统，使用户能无缝访问云端资源，通过虚拟文件系统技术实现高效操作，简化数据管理，提供流畅的云-本地交互体验。</p>
        </div>

        <div style={{ ...boxStyle, width: '50%', height: '13rem', overflow: 'hidden', textAlign: 'right' }}>
          <Image src="//sc.sysri.cn/i/p/1/665edd92c1d17.png" alt="Mounting Cloud Storage" style={{ width: '100%', padding: '2rem' }} width={800} height={130} />
        </div>

      </div>



      <div style={{ marginTop: '8rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ ...boxStyle, width: '50%', height: '21rem', overflow: 'hidden', textAlign: 'right', marginRight: '3%' }}>
          <Image src="//sc.sysri.cn/i/p/1/665eded1ae9e0.png" alt="Scheduled Tasks" style={{ padding: '1.5rem' }} width={800} height={210} />
        </div>

        <div style={{ width: '50%' }}>
          <p style={{ fontSize: '1.5rem', color: 'rgb(55, 125, 255)' }}>计划任务</p>
          <p style={{ fontSize: '35px', /* color: 'rgb(55, 125, 255)' */ }}><strong>定时同步或迁移你的文件</strong></p>
          <p style={{ fontSize: '1.2rem', color: 'rgb(103, 119, 136)' }}>以间隔、定时、启动时等任务形式，在不同云存储服务之间执行文件的同步、双向同步、复制、删除和移动等操作。</p>
        </div>
      </div>

      <div style={{ marginTop: '5rem', marginBottom: '5rem', width: '100%', textAlign: 'center' }}>
        <p /* style={{ fontSize: '1.1rem', }} */>NetMount由
          <a target="_blank" className="class-link" rel="noopener" href='https://github.com/rclone/rclone'>Rclone</a>
          和
          <a target="_blank" className="class-link" rel="noopener" href='https://github.com/alist-org/alist'>Alist</a>
          强力驱动</p>
      </div>


    </div>
  )
}

