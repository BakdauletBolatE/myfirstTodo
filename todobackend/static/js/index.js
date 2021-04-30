const csrfToken = document.getElementById('csrf_token');
class TodoItemService {

    constructor(){
        this._apiBase = 'http://127.0.0.1:8000';
    }

    async getItems (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){throw new Error(`Ошибка при оброботке ${url}, статус ${res.status}`)}
        return await res.json();
    }

    async createItem(url,data){
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken.value
            },
            body: JSON.stringify(data)
        });
        if (!res.ok){throw new Error(`Ошибка при оброботке ${url}, статус ${res.status}`)}
        return await res.json();
    }

    async deleteItem(url){
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'DELETE',
        });
        if (!res.ok){throw new Error(`Ошибка при оброботке ${url}, статус ${res.status}`)}
        return await res.json();
    }

    async updateItem(url,data){
        const res = await fetch(`${this._apiBase}${url}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken.value
            },
            body: JSON.stringify(data)
        });
        if (!res.ok){throw new Error(`Ошибка при оброботке ${url}, статус ${res.status}`)}
        return await res.json();
    }

    getAllTodos(){
        return this.getItems(`/api/v1/todo/`);
    }
    
    getTodoById(id){
        return this.getItems(`/api/v1/todo/${id}/`);
    }

    createTodo(data){
        return this.createItem(`/api/v1/todo/`,data);
    }
    deleteTodo(id){
        return this.deleteItem(`/api/v1/todo/${id}/`);
    }
    updateTodo(id,data){
        return this.updateItem(`/api/v1/todo/${id}/`,data);
    }
}

const todo = new TodoItemService();

todo.updateTodo(3,{
    task:'Изменено',
    isDone: true
})
    .then(res => console.log(res));




