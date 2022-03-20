import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { CardActions, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, likeButtonClick } from '../../redux/actions';

const ProductDetail = ({ post }: any) => {
  const cartList = useSelector((state: any) => state.cart.cart);
  const favoriteList = useSelector((state: any) => state.likeButton.like);
  const dispatch = useDispatch()

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '92.5vh', width: '100%', padding: '50px' }}>
      <Card style={{ maxWidth: '300px', height:'85vh' }}>
        <CardMedia
          component="img"
          image={post.image}
          alt="product image"
          style={{ maxWidth: '200px', margin: 'auto' }}
        />
        <CardContent style={{minWidth:'60%', overflow: 'auto' }}>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {post.description.length > 150 ? post.description.substring(0, 150) + '...' : post.description}
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
          <CardActions disableSpacing >
            <IconButton onClick={() => dispatch(getCart(post.id))}>
              <ShoppingCartIcon style={{ color: cartList.includes(post.id) ? 'purple' : '' }} />
            </IconButton>
            <IconButton onClick={() => dispatch(likeButtonClick(post.id))}>
              <FavoriteIcon style={{ color: favoriteList.includes(post.id) ? 'red' : '' }} />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </main>
  )
}

export const getServerSideProps = async (context: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default ProductDetail;