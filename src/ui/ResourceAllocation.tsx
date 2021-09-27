import { Table } from "antd";
import Resource from "../task/Resource";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Value",
        dataIndex: "value",
        key: "value",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
];

const data: Resource[] = [
    {
        name: "gpu 0",
        value: 1,
        description: "gpu 0",
    },
];

function ResourceAllocation() {
    return (
        <div className="TaskList">
            <Table columns={columns} dataSource={data} rowKey="id" />
        </div>
    );
}

export default ResourceAllocation;
