import { useState } from "react";

const TaskForm = ({ handleSubmit }) => {
    const [text, setText] = useState('')

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(text);
                e.target.reset();
                setText('')
            }}>

                <label>Task Description: </label>
                <input type="text" placeholder="Description..." onChange={(e) => { setText(e.target.value) }} />
                <input type="submit" value='Create New Form' />
            </form>
        </div>

    )
}


export default TaskForm;