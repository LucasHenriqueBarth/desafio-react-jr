import * as React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export default function BasicCard() {

  const [produtos, setProdutos] = useState<Produtos[]>([])

  useEffect(() => {
    axios('http://localhost:3334/produtos')
    .then(response => {
     setProdutos(response.data)

    })
  }, [])

  return (
    <div>
         {produtos.map(produto =>{
    return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
         Codigo: 
        </Typography>
        <Typography variant="h5" component="div">
            {produto.codigo}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Descrição
        </Typography>
        <Typography variant="body2">
          {produto.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
        <Button size="small">Deletar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
    )
        })}
    </div>
  );
}
