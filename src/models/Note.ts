export interface Note {
    id: string;
    title: string;
    content: string;
    // Add a new property for to-do items
    todos?: TodoItem[];
}

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}
