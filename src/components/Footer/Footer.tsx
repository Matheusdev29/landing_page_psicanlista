import { styled, Typography} from "@mui/material"


const StyledFooter = styled("div")(() => ({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap:"10px",
  backgroundColor: "#DE994E"
}))

export default function Footer(){

    return(
    
        <StyledFooter className="relative border-t border-white/5 py-8 px-6">

           <Typography 
                variant="h6"
                color="white"
                fontWeight={700}
                mb={1}> 
                Todos os direitos reservados a  Alessandra Souza 2026
            </Typography>
        </StyledFooter>
    )
}