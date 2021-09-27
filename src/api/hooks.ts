import { useState, useEffect } from "react";
import TaskInfo from "../task/TaskInfo";

const MOCK_TASK_INFO_LIST: TaskInfo[] = [
    {
        id: "1",
        name: "task 1",

        status: "RUNNING",

        createdAt: new Date("2021-09-27"),
        startedAt: undefined,
        pausedAt: undefined,
        terminatedAt: undefined,

        description: "task 1 description",

        workingDir: "task 1 workingDir",
        commandLine: "task 1 commandLine",
        outputLogPath: "task 1 outputLogPath",
    },
    {
        id: "2",
        name: "task 2",

        status: "PENDING",

        createdAt: new Date("2021-09-27"),
        startedAt: undefined,
        pausedAt: undefined,
        terminatedAt: undefined,

        description: "task 2 description",

        workingDir: "task 2 workingDir",
        commandLine: "task 2 commandLine",
        outputLogPath: "task 2 outputLogPath",
    },
    {
        id: "3",
        name: "task 3",

        status: "TERMINATED",

        createdAt: new Date("2021-09-27"),
        startedAt: undefined,
        pausedAt: undefined,
        terminatedAt: undefined,

        description: "task 3 description",

        workingDir: "task 3 workingDir",
        commandLine: "task 3 commandLine",
        outputLogPath: "task 3 outputLogPath",
    },
    {
        id: "4",
        name: "task 4",

        status: "ERROR",

        createdAt: new Date("2021-09-27"),
        startedAt: undefined,
        pausedAt: undefined,
        terminatedAt: undefined,

        description: "task 4 description",

        workingDir: "task 4 workingDir",
        commandLine: "task 4 commandLine",
        outputLogPath: "task 4 outputLogPath",
    },
    {
        id: "5",
        name: "task 5",

        status: "PAUSED",

        createdAt: new Date("2021-09-27"),
        startedAt: undefined,
        pausedAt: undefined,
        terminatedAt: undefined,

        description: "task 5 description",

        workingDir: "task 5 workingDir",
        commandLine: "task 5 commandLine",
        outputLogPath: "task 5 outputLogPath",
    },
];

export function useTaskInfoList() {
    const [taskInfoList, setTaskInfoList] = useState<TaskInfo[]>([]);

    useEffect(() => {
        setTaskInfoList(MOCK_TASK_INFO_LIST);
    }, []);

    return taskInfoList;
}
