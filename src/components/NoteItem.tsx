import React from 'react';
import { Note, TodoItem } from '../models/Note';

interface NoteItemProps {
    note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
    return (
        <div className="note-item">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            {note.todos && (
                <ul>
                    {note.todos.map((todo: TodoItem) => (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.completed} />
                            {todo.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteItem;
