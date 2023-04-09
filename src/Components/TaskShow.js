import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useState } from 'react';
import TaskCreate from './TaskCreate';


function TaskShow({ task, onDelete, onUpdate }) {
    const [showEdit, setShowEdit] = useState(false);
    const handleDeleteClick = () => {
        onDelete(task.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id, updatedTitle, updatedTaskDec) => {
        setShowEdit(false)
        onUpdate(id, updatedTitle, updatedTaskDec)
    }
    return <div className='task-show'>
        <Card>
            {showEdit ? (<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />) : (<div><h3>Göreviniz</h3>
                <p className='task-title'>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p className='task-title'>{task.taskDec}</p>
                <div>
                    <div className="card flex flex-wrap justify-content-center gap-3 task-button">
                        <Button label="Sil" severity="danger" icon="pi pi-times" onClick={handleDeleteClick} />
                        <Button label="Güncelle" severity="success" icon="pi pi-bell" onClick={handleEditClick} />
                    </div>
                </div></div>)}
        </Card>
    </div>
}
export default TaskShow;