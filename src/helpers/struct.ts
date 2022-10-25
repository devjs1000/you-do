import { TaskType } from "../components/Task"

export const taskStruct = (id: any, title: string, description: string, start: string, end: string, tags: string[]): TaskType => {
    return {
        id,
        title,
        description,
        end,
        start,
        tags,
    }
}