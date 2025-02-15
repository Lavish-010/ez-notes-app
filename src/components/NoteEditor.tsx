import React, { useState } from 'react';
import { Note, TodoItem } from '../models/Note';

interface NoteEditorProps {
    note: Note;
    onSave: (note: Note) => void;
    // ...existing code...
}

const NoteEditor: React.FC<NoteEditorProps> = ({ note, onSave }) => {
    const [todos, setTodos] = useState<TodoItem[]>(note.todos || []);

    const addTodo = () => {
        const newTodo: TodoItem = { id: Date.now().toString(), text: '', completed: false };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id: string, text: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text } : todo));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const handleSave = () => {
        onSave({ ...note, todos });
    };

    return (
        <div className="note-editor">
            <input type="text" value={note.title} onChange={(e) => {/* ...existing code... */}} />
            <textarea value={note.content} onChange={(e) => {/* ...existing code... */}} />
            <button onClick={addTodo}>Add To-Do</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        <input type="text" value={todo.text} onChange={(e) => updateTodo(todo.id, e.target.value)} />
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default NoteEditor;
