import { Box, styled, textFieldClasses, Grid } from '@mui/material';
import { textAlign } from '@mui/system';
import image from './IMG/8754-ai.png';
import image1 from './IMG/New Project (1).jpg';
import image2 from './IMG/New Project (2).jpg';

const Component = styled(Box)`;
    width : 100%;
    
    
`;

const Image = styled('img')({
    height: 700,
    width: 900

})
const Image1 = styled('img')({
    height: 600,
    width: 700

})
const Image2 = styled('img')({
    height: 600,
    width: 800

})
// const text =styled('p')({
//     textAlign:'center',
//     marginTop : '250px'
// })



const home = () => {
    return (
        <Component >
            <Grid container spacing={2} columns={16} margin={2}>
                <Grid item xs={7} marginTop= {30} textAlign={'center'}  >
                    <p> hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt distinctio debitis ratione tempora qui, consequuntur in enim cupiditate eligendi nulla natus fugit suscipit sapiente ducimus ullam officiis voluptates quaerat!</p>
                </Grid>
                <Grid item xs={8}>
                    <Image src={image} />
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Image1 src={image1} />
                </Grid>
                <Grid item xs={7} marginTop= {30} padding={15} marginLeft={10} textAlign={'center'}  >
                    <p> hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt distinctio debitis ratione tempora qui, consequuntur in enim cupiditate eligendi nulla natus fugit suscipit sapiente ducimus ullam officiis voluptates quaerat!</p>
                </Grid>
            </Grid>
            
            <Grid container spacing={2} columns={16} margin={2}>
                <Grid item xs={7} marginTop= {30} textAlign={'center'}  >
                    <p> hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt distinctio debitis ratione tempora qui, consequuntur in enim cupiditate eligendi nulla natus fugit suscipit sapiente ducimus ullam officiis voluptates quaerat!</p>
                </Grid>
                <Grid item xs={8} marginLeft = {10}>
                    <Image2 src={image2} />
                </Grid>
            </Grid>


        </Component>
    )
}

export default home;
//SUCCESSFULL TILL FIRST IMAGE UPLOAD