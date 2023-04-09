import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
    const [baslik, setBaslik] = useState(task ? task.title : '');
    const [taskDec, setTaskDec] = useState(task ? task.taskDec : '')
    const [loading, setLoading] = useState(false);
    const load = (event) => {
        event.preventDefault();
        setLoading(true);
        if (taskFormUpdate) {
            onUpdate(task.id, baslik, taskDec)
        } else {
            onCreate(baslik, taskDec);
        }
        setTimeout(() => {
            setLoading(false);
            setBaslik('');
            setTaskDec('');
        }, 500);
    };
    return <div>{taskFormUpdate ? (<div className="task-update">
        <label><b>Güncelle</b></label>
        <form className="task-form">
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputText id="baslik" value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                </span>
            </div>
            <div className="card flex justify-content-center">
                <InputTextarea autoResize placeholder="Lütfen Açıklayınız." value={taskDec} onChange={(e) => setTaskDec(e.target.value)} rows={5} cols={30} />
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Güncelle" icon="pi pi-check" severity="success" onClick={load} />
            </div>
        </form>
    </div>) : (<div><Card title="Lütfen Task Ekleyiniz!">
        <form className="task-form">
            <label><b>Başlık</b></label>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputText id="baslik" value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                </span>
            </div>
            <div className="card flex justify-content-center">
                <InputTextarea autoResize placeholder="Lütfen Açıklayınız." value={taskDec} onChange={(e) => setTaskDec(e.target.value)} rows={5} cols={30} />
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Oluştur" icon="pi pi-check" loading={loading} onClick={load} />
            </div>
        </form>
    </Card></div>)}</div>

}
export default TaskCreate;