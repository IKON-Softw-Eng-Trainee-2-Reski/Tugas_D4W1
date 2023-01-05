import React, {useState} from "react"


function NewTodoForm(props) {
    const [description, setDescription] = useState('');
    const submitTodo = ()=>{
        if (description !== "" ){
            props.addTodo(description);
            setDescription("");
        } else{
            alert("MASUKKAN TODO")
        }     
    }
    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm