import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


function TaskShow({ task, onDelete }) {
    const handleDeleteClick = () => {
        onDelete(task.id);
    }
    return <div className='task-show'>
        <Card>
            <h3>Göreviniz</h3>
            <p className='task-title'>{task.title}</p>
            <h3>Yapılacaklar</h3>
            <p className='task-title'>{task.taskDec}</p>
            <div>
                <div className="card flex flex-wrap justify-content-center gap-3 task-button">
                    <Button label="Sil" severity="danger" icon="pi pi-times" onClick={handleDeleteClick} />
                    <Button label="Güncelle" severity="success" icon="pi pi-bell" />
                </div>
            </div>
        </Card>
    </div>
}
export default TaskShow;