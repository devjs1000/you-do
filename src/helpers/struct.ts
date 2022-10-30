import { TaskType } from "../components/Task"
import shortid from 'shortid'
export const taskStruct = (title: string, description: string, start: string, end: string, tags: string[]): TaskType => {

    return {
        id: shortid.generate(),
        title,
        description,
        end,
        start,
        tags,
        completed: false
    }
}