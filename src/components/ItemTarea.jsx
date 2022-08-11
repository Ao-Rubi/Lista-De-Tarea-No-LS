import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = (props) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                {props.tareaCargada}

                <Button variant='danger' className='ms-2'>
                    <FontAwesomeIcon icon={faTrashCan} onClick={()=>{props.borrarTarea(props.tareaCargada)}}/>
                </Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;