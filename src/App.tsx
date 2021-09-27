import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined } from "@ant-design/icons";

import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

function App() {
    const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false);

    return (
        <div className="App">
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={siderCollapsed}
                    onCollapse={setSiderCollapsed}
                >
                    <div className="App-logo">
                        <img src={logo} className="App-logo-icon" alt="logo" />
                        {siderCollapsed ? "" : <span>QTask</span>}
                    </div>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item key="1" icon={<DesktopOutlined />}>
                            Queue Task
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    ></Header>
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>Queue Task</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            Queue Task
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        QTask 漏2021 Created by Bin Tsang
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
