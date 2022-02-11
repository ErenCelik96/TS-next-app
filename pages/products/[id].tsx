import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const ProductDetail = ({ post }:any) => {
  return (
    <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', width: '100%', padding:'50px'}}>
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="100%"
        image={post.image}
        alt="product image"
      />
      <CardContent style={{maxHeight:400}}>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {post.description.length > 200 ? post.description.substring(0, 200) + '...' : post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Catergory: {post.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {post.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Count: {post.rating.count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Rate: {post.rating.rate}</p>
          <Rating name="read-only" value={post.rating.rate} readOnly />
        </Typography>
      </CardContent>
    </Card>
    </main>
  )
}

export const getServerSideProps = async (context:any) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const post = await res.json();
    return{
        props: {
            post,
        },
    };
};

export default ProductDetail;