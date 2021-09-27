import React, { useState } from "react";
import { Table, Tag, Button } from "antd";
import { TaskStatus } from "../../task/TaskInfo";
import { useTaskInfoList } from "../../api/hooks";
import { TaskActionGroup } from "./TaskActionGroup";

const STATUS_COLOR: Record<
    TaskStatus,
    | "green"
    | "geekblue"
    | "volcano"
    | "pink"
    | "red"
    | "yellow"
    | "orange"
    | "cyan"
    | "blue"
    | "purple"
    | "magenta"
    | "gold"
    | "lime"
    | "success"
    | "processing"
    | "error"
    | "default"
    | "warning"
> = {
    RUNNING: "green",
    PENDING: "geekblue",
    TERMINATED: "volcano",
    PAUSED: "yellow",
    ERROR: "error",
};

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        render: (text: string) => <Button type="link">{text}</Button>,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <span>{text}</span>,
    },
    {
        title: "Command Line",
        dataIndex: "commandLine",
        key: "commandLine",
    },
    {
        title: "Status",
        key: "status",
        dataIndex: "status",
        render: (status: TaskStatus) => (
            <Tag color={STATUS_COLOR[status]}>{status.toUpperCase()}</Tag>
        ),
    },
    {
        title: "Action",
        key: "action",
        render: TaskActionGroup,
    },
    {
        title: "Description",
        key: "description",
        dataIndex: "description",
    },
];

function TaskList() {
    const taskInfoList = useTaskInfoList();

    return (
        <div className="TaskList">
            <Table columns={columns} dataSource={taskInfoList} rowKey="id" />
        </div>
    );
}

export default TaskList;
