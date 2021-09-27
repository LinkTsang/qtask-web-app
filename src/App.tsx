import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined } from "@ant-design/icons";

import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import TaskScheduler from "./ui/TaskScheduler";
import ResourceAllocation from "./ui/ResourceAllocation";

const { Header, Content, Footer, Sider } = Layout;

type PageKey = "task-scheduler" | "resource-allocation";

const PAGE_KEY_TO_NAME = {
    "task-scheduler": "Task Scheduler",
    "resource-allocation": "Resource Allocation",
};

function App() {
    const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false);
    const [currentPageKey, setCurrentPageKey] =
        useState<PageKey>("task-scheduler");

    const renderContent = () => {
        switch (currentPageKey) {
            case "task-scheduler":
                return <TaskScheduler />;
            case "resource-allocation":
                return <ResourceAllocation />;
            default:
                return <></>;
        }
    };

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
                        defaultSelectedKeys={[currentPageKey]}
                        mode="inline"
                        onSelect={({ key }) => {
                            setCurrentPageKey(key as PageKey);
                        }}
                    >
                        <Menu.Item
                            key="task-scheduler"
                            icon={<DesktopOutlined />}
                        >
                            Task Scheduler
                        </Menu.Item>
                        <Menu.Item
                            key="resource-allocation"
                            icon={<DesktopOutlined />}
                        >
                            Resource Allocation
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background">
                        {PAGE_KEY_TO_NAME[currentPageKey]}
                    </Header>
                    <Content style={{ margin: "16px 16px" }}>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            {renderContent()}
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
