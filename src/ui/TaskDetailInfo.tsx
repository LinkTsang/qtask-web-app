import { useParams } from "react-router";

function TaskDetailInfo() {
    const { id: taskId } = useParams<{ id: string }>();
    return (
        <>
            <p>Task ID: {taskId}</p>
            <p></p>
            <p></p>
        </>
    );
}

export default TaskDetailInfo;
