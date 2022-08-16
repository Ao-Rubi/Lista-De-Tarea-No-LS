import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import ListaTareas from './ListaTareas';

const Formulario = () => {

    // Crear un state
    const [arregloTareas, setArregloTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Actualizar la lista de tarea
        setArregloTareas([...arregloTareas, tarea]);
        setTarea("");
    }

    const borrarTarea = (nombre)=> {
        let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre});
        // actualizar el state
        setArregloTareas(arregloModificado)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e) => { setTarea(e.target.value.trimStart()); }} value={tarea}/>

                    <Button className='ms-1' variant="success" type="submit">
                        <FontAwesomeIcon icon={faClipboardList} />
                    </Button>
                </Form.Group>
            </Form>
                <hr/>
            <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTareas>
        </div>
    );
};

export default Formulario;