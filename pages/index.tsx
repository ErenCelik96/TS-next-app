import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux';
import { likeButtonClick, getList, getCart } from './redux/actions'

export const Home: NextPage<{ props: any }> = (props: any) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList(props.posts))
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>TS Next App</title>
        <meta name="description" content="typescript next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {props.posts.map((post: any) => (

          <Card className="root" key={post.id}>
            <Link href={`/products/${post.id}`}><a><CardHeader title={post.title} subheader="September 14, 2020" />
              <CardMedia
                className="media"
                image={post.image}
                title="Paella dish"
                style={{ backgroundSize: 'contain', paddingTop: '50%' }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.description}
                </Typography>
              </CardContent></a></Link>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <ShoppingCartIcon onClick={() => dispatch(getCart(post.id))} />
              </IconButton>
              <IconButton aria-label="share">
                <FavoriteIcon onClick={() => dispatch(likeButtonClick(post.id))} />
              </IconButton>
            </CardActions>
          </Card>
        )
        )}
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Home;