interface TodoReadonly {
    title: string
    description: string
}

type TodoReadonlyPreview = MyReadonly<TodoReadonly>

(() => {
    const todo: TodoReadonlyPreview = {
        title: "Hey",
        description: "foobar"
    }

    todo.title = "Hello"
    todo.description = "barFoo"
})()