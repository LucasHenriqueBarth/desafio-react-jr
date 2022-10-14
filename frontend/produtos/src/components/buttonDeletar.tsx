import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';


import { useState } from "react";
import axios from 'axios';

interface Deletar {
  
    id: string;
  
  }

export function ButtonDeletar() {

    const [deletar, setDeletar] = useState<Deletar[]>([])

    const onDelete = (id: string) => {
        axios.delete(`http://localhost:3334/produtos/${id}`)
        .then(() => {
          getDeletar();
        })
      }
    
      const getDeletar = () => {
        axios.get(`http://localhost:3334/produtos/`)
            .then((getDeletar) => {
                 setDeletar(getDeletar.data);
             })}

    return(
        <>
            <div>
                {deletar.map(deleta =>{
                    return(
                        <div>
                             <CardActions>          
                            <Button size="small" onClick={() => onDelete(deleta.id)} >Deletar</Button>
                        </CardActions>
                        </div>
                       
                    )
                })}
                
            </div>
        </>
    )
}