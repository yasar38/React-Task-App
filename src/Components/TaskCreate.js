import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function TaskCreate({ onCreate }) {
    const [baslik, setBaslik] = useState('');
    const [taskDec, setTaskDec] = useState('');
    const [loading, setLoading] = useState(false);
    const load = (event) => {
        event.preventDefault();
        onCreate(baslik, taskDec);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setBaslik('');
            setTaskDec('');
        }, 500);
    };
    return <div className="task-create">
        <Card title="Lütfen Task Ekleyiniz!">
            <form className="task-form">
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <InputText id="baslik" value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                        <label htmlFor="baslik">Başlık:</label>
                    </span>
                </div>
                <div className="card flex justify-content-center">
                    <InputTextarea autoResize placeholder="Lütfen Açıklayınız." value={taskDec} onChange={(e) => setTaskDec(e.target.value)} rows={5} cols={30} />
                </div>
                <div className="card flex flex-wrap justify-content-center gap-3">
                    <Button label="Oluştur" icon="pi pi-check" loading={loading} onClick={load} />
                </div>
            </form>
        </Card>
    </div>
}
export default TaskCreate;