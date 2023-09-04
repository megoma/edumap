import React from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import { MapContainer, TileLayer } from 'react-leaflet';
const { Header, Content, Footer } = Layout;
import "./map.css"



const Map = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        /> */}
      </Header>
      <Content
        className="site-layout"
        style={{
        //   padding: '0 50px',
        }}
      >
        <div
          style={{
            // padding: 24,
            // minHeight: 380,
            background: "#dedede",
          }}
        >
            <Row>
    <Col span={18} push={6}>
    <MapContainer center={[6.131944, 1.222778]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
    </Col>
    <Col span={6} pull={18}>
      Ici sera les informations du menu de gauche
    </Col>
  </Row>

        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Edumap ©2023 Created by Alab Corporation
      </Footer>
    </Layout>
  );
};
export default Map;
