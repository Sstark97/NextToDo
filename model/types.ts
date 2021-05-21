export interface ToDo{
    task: string,
    id: string,
    completed: boolean
}

export interface PropsList {
    todos: ToDo[],
    completedToDo(id:string) : void,
    deleteToDo(id:string) :void,
    handleEdit(id:string):void
}

export interface PropsToDo {
    todo: ToDo,
    completedToDo(id:string) : void,
    deleteToDo(id:string) :void,
    handleEdit(id:string):void
}

export interface PropsModal {
    todo:ToDo,
    handleSubmitEdited(todo:ToDo): void,
    handleCloseModalInParent():void
}