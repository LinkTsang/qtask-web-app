import { useState } from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import { Layout, Menu } from "antd";
import { DesktopOutlined } from "@ant-design/icons";

import TaskScheduler from "./ui/TaskScheduler";
import ResourceAllocation from "./ui/ResourceAllocation";

import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

const routes = [
    {
        path: "/",
        exact: true,
        key: "home",
        header: () => <h2>Home</h2>,
        content: () => <h2>Home</h2>,
    },
    {
        path: "/task-scheduler",
        key: "task-scheduler",
        header: () => <h2>Task Scheduler</h2>,
        content: () => <TaskScheduler />,
    },
    {
        path: "/resource-allocation",
        key: "resource-allocation",
        header: () => <h2>Resource Allocation</h2>,
        content: () => <ResourceAllocation />,
    },
];

function App() {
    const routerMatch = useRouteMatch<{ currentPage: string }>("/:currentPage");
    const [siderCollapsed, setSiderCollapsed] = useState<boolean>(false);

    return (
        <div className="App">
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={siderCollapsed}
                    onCollapse={setSiderCollapsed}
                >
                    <Link to="/">
                        <div className="App-logo">
                            <img
                                src={logo}
                                className="App-logo-icon"
                                alt="logo"
                            />
                            {siderCollapsed ? "" : <span>QTask</span>}
                        </div>
                    </Link>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={[routerMatch!.params.currentPage]}
                        mode="inline"
                    >
                        <Menu.Item
                            key="task-scheduler"
                            icon={<DesktopOutlined />}
                        >
                            <Link to="/task-scheduler">Task Scheduler</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="resource-allocation"
                            icon={<DesktopOutlined />}
                        >
                            <Link to="/resource-allocation">
                                Resource Allocation
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.header />}
                                />
                            ))}
                        </Switch>
                    </Header>
                    <Content style={{ margin: "16px 16px" }}>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.content />}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        QTask ©2021 Created by Bin Tsang
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
