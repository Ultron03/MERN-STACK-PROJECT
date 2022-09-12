import { AppBar, Toolbar,Typography,styled } from "@mui/material";
import logo from './logo.png'


const Component = styled(AppBar)`
    background : #89DA5E;
   
`;

const Container =  styled(Toolbar)`
    justify-content : center;
    & > p {
      padding : 20px;
      
    }
`;


const Image = styled('img')({
  width : 100,
  height:100,
  justifyContent : 'left'
})

const Header  = () =>{
    return(
        <Component>
          
            <Container>
            <Image src={logo}  />
              <Typography>Home</Typography>
              <Typography>About Us</Typography>
              <Typography>Contact</Typography>
            </Container>
        </Component>
    );
}

export default Header;

