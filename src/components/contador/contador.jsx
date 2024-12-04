import { Button, Stack, Typography } from "@mui/material"
import { useState } from "react"

export const Contador = ({color}) => { /* Faz receber uma string cor. Podemos coloocar para receber outras coisas, por exemplo o título
                                        Declarar a cor não é obrigatório*/
    const [valor, setValor] = useState(0) /*0 dentro de useState faz começar com 0 */

    return (
        <Stack direction={'row'} mb={2}>
         <Button variant="contained"
         sx={{bgcolor: color, mr: 3}}
         onClick={() => setValor(valor + 1)}>
            MUI - BOTÃO 
         </Button>
         <Typography variant="h5" >
            {valor}
         </Typography>
         </Stack>
    )
}
/*- {titulo} */