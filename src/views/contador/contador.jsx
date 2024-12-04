import { Button, Stack, Typography } from "@mui/material"
import { Contador } from "../../components/contador/contador"
import { UICard } from "../../components/ui/card"


export const ContadorView = () => {

   return (
      <UICard>
         <Typography variant="h5" md={5}>
            Meu Contador
         </Typography>
         
         
         <Contador color={'red'}/>
         <Contador color={'black'}/>
      </UICard>
   )
}