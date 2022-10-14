
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useEffect, useState } from "react";
import axios from 'axios';
import { ButtonDeletar } from './buttonDeletar';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface Produtos {
  
  id: string;
  codigo: string;
  descricao: string;

}




export function CardProdutos() {
  
  const [produtos, setProdutos] = useState<Produtos[]>([])
  

  useEffect(() => {
    axios('http://localhost:3334/produtos')
    .then(response => {
     setProdutos(response.data)

    })
  }, [])


  
  return(
    <>
    <div style={{display: 'flex'}}>
    {produtos.map(produto =>{
      return(
        <div style={{width: 400, marginTop: 80, display: 'flex'}}>
        <Card sx={{ minWidth: 275, backgroundColor: "#e4e4e4", marginLeft: 2 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14, display: 'flex', fontWeight: 'bold', color: '#808080'}} color="text.secondary" gutterBottom>
                Codigo:
                <Typography sx={{marginLeft: 1, alignItems: 'center',fontSize: 14}}>
                {produto.codigo}
                </Typography>
            </Typography>
            <Typography sx={{ fontSize: 14, display: 'flex', fontWeight: 'bold', color: '#000'}} color="text.secondary" gutterBottom>
              Descrição:
                <Typography sx={{marginLeft: 1, alignItems: 'center',fontSize: 14}}>
                {produto.descricao}
                </Typography>
            </Typography>
          </CardContent>
         <ButtonDeletar />
        </Card>
      </div>
      )
    })}
    </div>
      
     

  
    </> 
    
)}
