import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import { Button, Carousel, Col, Divider, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { DownloadOutlined } from '@ant-design/icons';
import ScrollImages from '@/components/scrollImages';
import StackedImages from '@/components/stackedImages';

const boxStyle: CSSProperties = {
  boxShadow: 'rgba(140, 152, 164, 0.176) 0px 10px 40px 10px',
  border: '-1px solid #ccc',
  borderRadius: '8px'
}

export default function page() {

  return (
    <div style={{ paddingTop: '8rem' }}>
      <Row>
        <Col flex={24}>
          <div style={{ height: '6rem' }}></div>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333333', margin: '0 0 10px 0' }}>
            <img src="/img/text.svg" style={{ width: '7rem' }} alt='NetMount' />
          </p>
          <span style={{/* color:'rgb(55, 125, 255)',  */fontSize: '2.9991rem', fontWeight: 'bold' }}>统一管理和挂载云存储设施</span>
          <p>

          </p>
          <Button href='/download' type="primary" icon={<DownloadOutlined />} size="large" style={{ marginTop: '20px' }}>
            下载
          </Button>
        </Col>
        <Col flex={24}>
          <StackedImages style={{ width: '35rem', height: '35rem' }} images={['https://p1.hotpe.top/i/p/1/66321983c6d5b.png', 'https://p1.hotpe.top/i/p/1/6632199c4e55c.png']} />
        </Col>
      </Row>

      <Divider />

      <div>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', color: 'rgb(55, 125, 255)' /* 'rgba(0, 0, 0, 0.4)' */ }}>一个软件</p>
        <p style={{ textAlign: 'center', fontSize: '35px' }}><strong>管理你的所有云存储</strong></p>
        <br />
        {/* 网盘 */}
        <ScrollImages scrollSpeed={50} images={[
          { title: 'Alist', img: '/img/storage/others/alist.svg' },

          { title: 'Box', img: '/img/storage/netdisk/Box.svg' },
          { title: 'Dropbox', img: '/img/storage/netdisk/Dropbox.png' },
          { title: 'GoogleDrive', img: '/img/storage/netdisk/GoogleDrive.svg' },
          { title: 'Mega', img: '/img/storage/netdisk/Mega.svg' },
          { title: 'OneDrive', img: '/img/storage/netdisk/OneDrive.svg' },
          { title: 'pCloud', img: '/img/storage/netdisk/pCloud2.png' },
          { title: 'SharePoint', img: '/img/storage/netdisk/SharePoint.svg' },
          { title: 'YandexDisk', img: '/img/storage/netdisk/YandexDisk2.png' },
        ]} />
        <br />
        <ScrollImages scrollSpeed={70} images={[
          { title: 'OSS', img: '/img/storage/vendors/AlibabaObjectStorage.svg' },
          { title: 'Azure', img: '/img/storage/vendors/Azure.svg' },
          { title: 'TencentCloud', img: '/img/storage/vendors/TencentCloud.svg' },
          { title: 'Backblaze', img: '/img/storage/vendors/Backblaze.svg' },
          { title: 'CloudflareR2', img: '/img/storage/vendors/CloudflareR2.svg' },
          { title: 'Cloudian', img: '/img/storage/vendors/Cloudian.svg' },
          { title: 'DigitalOcean', img: '/img/storage/vendors/DigitalOcean.svg' },
          { title: 'DirectCloud', img: '/img/storage/vendors/DirectCloud.svg' },
          { title: 'GoogleCloud', img: '/img/storage/vendors/GoogleCloudPlatform.svg' },
          { title: 'IBMCloud', img: '/img/storage/vendors/IBMObjectStorage.svg' },
        ]} />
        <br />
        <ScrollImages scrollSpeed={60} images={[
          { title: 'IDrivee', img: '/img/storage/vendors/IDrivee2.svg' },
          { title: 'OracleCloud', img: '/img/storage/vendors/OracleCloud.svg' },

          { title: 'AWS S3', img: '/img/storage/protocol/aws-s3.svg' },
          { title: 'FTP', img: '/img/storage/protocol/ftp.png' },
          { title: 'WebDAV', img: '/img/storage/protocol/webdav.jpg' },
          { title: 'MinIO', img: '/img/storage/protocol/MinIO.svg' },
          { title: 'Nextcloud', img: '/img/storage/others/Nextcloud.svg' },
          { title: 'OwnCloud', img: '/img/storage/others/OwnCloud.svg' },
        ]} />
      </div>

      <div style={{ marginTop: '5rem', textAlign: 'center' }}>
        {/* <p style={{ fontSize: '1.5rem', color: 'rgb(55, 125, 255)' }}>存储管理</p> */}
        <p style={{ fontSize: '35px', /* color: 'rgb(55, 125, 255)' */ }}><strong>集中直观的存储管理</strong></p>
        <p style={{ fontSize: '1.2rem', color: 'rgb(103, 119, 136);' }}>功能丰富的文件浏览器，支持文件上传、复制、移动、删除、重命名。</p>
        <br />
        <div style={{ display: 'flex', width: '100%' }}>
          <Space size={'large'} style={{ margin: 'auto' }}>
            <div style={{ ...boxStyle, width: '35rem', height: '17rem', overflow: 'hidden' }}>
              <img src="https://p1.hotpe.top/i/p/1/663324b5e0c69.png" style={{
                width: '100%',
              }} />
            </div>
            <div style={{ ...boxStyle, width: '35rem', height: '17rem', overflow: 'hidden' }}>
              <img src="https://p1.hotpe.top/i/p/1/66321a05cddfc.png" style={{
                width: '100%',
              }} />
            </div>
          </Space>
        </div>
      </div>


      <div style={{ marginTop: '8rem', width: '100%',display: 'flex', justifyContent: 'center' }}>
        <div style={{width: '50%'}}>            
          <p style={{ fontSize: '1.5rem', color: 'rgb(55, 125, 255)' }}>挂载云存储</p>
          <p style={{ fontSize: '35px', /* color: 'rgb(55, 125, 255)' */ }}><strong>像本地磁盘一样管理你的文件</strong></p>
          <p style={{ fontSize: '1.2rem', color: 'rgb(103, 119, 136);' ,paddingRight: '5%'}}>云存储整合为本地文件系统，使用户能无缝访问云端资源，通过虚拟文件系统技术实现高效操作，简化数据管理，提供流畅的云-本地交互体验。</p>
        </div>

        <div style={{ ...boxStyle, width: '50%', height: '20rem', overflow: 'hidden',textAlign: 'right' }}>
          <img src="https://p1.hotpe.top/i/p/1/66321b052e370.png" style={{
            width: '100%',
          }} />
        </div>

      </div>

      <div style={{ marginTop: '5rem', marginBottom: '5rem', width: '100%', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', }}><strong>NetMount由<a target="_blank" className="class-link" rel="noopener" href='https://github.com/rclone/rclone'>Rclone</a>强力驱动</strong></p>
      </div>


    </div>
  )
}

