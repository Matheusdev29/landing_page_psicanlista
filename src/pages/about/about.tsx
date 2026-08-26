import { styled, Grid, Typography } from "@mui/material"
       const StyledClient = styled("div")(() =>({
        backgroundColor: "#E6CFA3",
        backgroundSize: "400% 400%",
        justifyContent:"center",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        position: "relative",
        textAlign:"center",
       }))
export default function About() {

    return(
       <StyledClient>
                <Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"}>
                   <Grid size={12} >     
                        <Typography 
                        variant="h6"
                            color="#DE994E"
                            fontWeight={700}
                            mb={1}>  
                            Sobre mim
                        </Typography>   
                    </Grid>
                </Grid>
                </StyledClient>
    )
}