import React from 'react'
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

const Home: NextPage<{ posts: any }> = ({ posts }: any) => {
  // const [favorite, setFavorite] = React.useState([]);

  // React.useEffect(() => {
  //   const favorites = sessionStorage.getItem('favorites');
  //   if (favorites) {
  //     setFavorite(JSON.parse(favorites));
  //   }
  // }, []);

  // const handleFavorite = (id: any) => {
  //   const newFavorites = [...favorite];
  //   if(!newFavorites.includes(id)){
  //   newFavorites.push(id);
  //   setFavorite(newFavorites);
  //   localStorage.setItem('favorites', JSON.stringify(favorite));
  //   }
  //   console.log("Add favorite", favorite);
  // };
  return (
    <div className={styles.container}>
      <Head>
        <title>TS Next App</title>
        <meta name="description" content="typescript next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts.map((post: any) => (

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
                <ShoppingCartIcon />
              </IconButton>
              <IconButton aria-label="share">
                <FavoriteIcon />
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

export default Home