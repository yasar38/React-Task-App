import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

function TaskCreate() {
    const [baslik, setBaslik] = useState('');
    const [task, setTask] = useState('');
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    return <div>
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputText id="baslik" baslik={baslik} onChange={(e) => setBaslik(e.target.baslik)} />
                    <label htmlFor="baslik">Başlık</label>
                </span>
            </div>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputText id="task" task={task} onChange={(e) => setTask(e.target.task)} />
                    <label htmlFor="task">Task Giriniz</label>
                </span>
            </div>
            <div className="card flex justify-content-center">
                <InputTextarea autoResize placeholder="Lütfen Açıklayınız." value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
            </div>
        </form>
    </div>
}
export default TaskCreate;