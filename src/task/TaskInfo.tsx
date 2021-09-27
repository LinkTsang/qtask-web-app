export type TaskStatus =
    | "RUNNING"
    | "PENDING"
    | "PAUSED"
    | "TERMINATED"
    | "ERROR";

export type ProcessInfo = {
    current: number;
    total: number;
    message?: Record<string, unknown>;
};

type TaskInfo = {
    id: string;

    status: TaskStatus;
    process?: ProcessInfo;

    createdAt: Date;
    startedAt?: Date;
    pausedAt?: Date;
    terminatedAt?: Date;

    name: string;
    description: string;

    workingDir: string;
    commandLine: string;
    outputLogPath: string;
};

export default TaskInfo;
