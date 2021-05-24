export interface ToDo{
    task: string,
    id: string,
    completed: boolean
}

export interface PropsList {
    todos: ToDo[],
    addToDo(todoTitle:string) : void,
    completedToDo(id:string) : void,
    deleteToDo(id:string) :void,
    handleEdit(id:string):void,
    handleShowActivesInParent():void,
    handleShowAll():void,
    active:boolean
}

export interface PropsToDo {
    todo: ToDo,
    completedToDo(id:string) : void,
    deleteToDo(id:string) :void,
    handleEdit(id:string):void,
    active:boolean
}

export interface PropsModal {
    todo:ToDo,
    handleSubmitEdited(todo:ToDo): void,
    handleCloseModalInParent():void
}