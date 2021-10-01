import { ReactElement } from "react";
import { Space, Button } from "antd";
import TaskInfo, { TaskStatus } from "../../task/TaskInfo";

export function TaskActionGroup(text: string, record: TaskInfo) {
    const renderButtonGroup = (status: TaskStatus): ReactElement => {
        switch (status) {
            case "RUNNING": {
                return (
                    <>
                        <Button type="primary">PAUSE</Button>
                        <Button danger ghost>
                            STOP
                        </Button>
                        <Button danger ghost>
                            KILL
                        </Button>
                    </>
                );
            }
            case "PENDING": {
                return (
                    <>
                        <Button>RUN</Button>
                        <Button danger ghost>
                            REMOVE
                        </Button>
                    </>
                );
            }
            case "PAUSED": {
                return (
                    <>
                        <Button>RESUME</Button>
                        <Button danger ghost>
                            STOP
                        </Button>
                        <Button danger ghost>
                            KILL
                        </Button>
                    </>
                );
            }
            case "ERROR":
            case "TERMINATED": {
                return (
                    <>
                        <Button danger ghost>
                            REMOVE
                        </Button>
                    </>
                );
            }
            default:
                return <></>;
        }
    };
    return <Space size="middle">{renderButtonGroup(record.status)}</Space>;
}
