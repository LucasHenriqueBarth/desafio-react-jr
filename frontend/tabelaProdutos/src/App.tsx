import { useEffect, useState } from "react";
import axios from 'axios';
import {
  Box, Button, Snackbar, Table,
  TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";

import BasicCard from './components/cardProdutos'

interface Produtos {
  
  id: string;
  codigo: string;
  descricao: string;

}

function App() {
 

  const [produtos, setProdutos] = useState<Produtos[]>([])

  useEffect(() => {
    axios('http://localhost:3334/produtos')
    .then(response => {
     setProdutos(response.data)

    })
  }, [])

  return(
    <div className="container">
           
          <BasicCard />
     
    </div>
  ) 
}



export default App