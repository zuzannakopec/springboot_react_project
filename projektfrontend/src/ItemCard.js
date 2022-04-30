import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Contact from './Contact';
import { Rating } from '@mui/material';
import { useLocation } from 'react-router';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function ItemCard(item) {
  let {state} = useLocation()
  const [expanded, setExpanded] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false)
  const [value, setValue] = React.useState(2);
  const [rating, setRating] = React.useState([])

  
  React.useEffect(() => {
    fetch("http://localhost:8080/rating/getAll").then(res=>res.json()
    )
    .then((result)=>{
      setRating(result);
      console.log(rating)
      rating.sort()
      rating.forEach((rate)=>{
  
        if(rate.email == state.email && item.item.id == rate.id){
          setValue(rate.value)
          console.log(rate.value)
        }
      })
    })
  }, [])
  
const changeRating = (val) =>{
  let data = {
    item_id:item.item.id,
    user_id:1,
    value:val,
    email:state.email
  }
 
  
  fetch("http://localhost:8080/rating/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)

}).then((res)=>{
 
})
}
console.log(state)
  if(item.id == 1){
    item.item.img = "1.jpg"
  }

 
  return (
  
    <Card sx={{ maxWidth: 1000 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            DR
          </Avatar>
        }

        title={item.item.name}
        subheader={item.item.spec}
      />
  {showContact?<Contact msg={item.item.tel}/>:<></>}

 
  
      <CardContent>
     
        <Typography variant="body2" color="text.secondary">
        {item.item.opis}
        </Typography>
      </CardContent>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          changeRating(newValue)
        }}
/>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' ,alignContent: 'space-between' }}>
      <CardActions disableSpacing>
     
   
      <Button size="small" variant="contained" onClick={()=>{setShowContact(true)}}>Kontakt</Button>
     
    
    </CardActions>
   
      </Box>
  
    </Card>
  
  );
}