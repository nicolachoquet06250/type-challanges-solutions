interface TodoPick {
    title: string
    description: string
    completed: boolean
}

type TodoPickPreview = MyPick<TodoPick, 'title' | 'completed'>

(() => {
    const todo: TodoPickPreview = {
        title: 'Clean room',
        completed: false,
    }
})()