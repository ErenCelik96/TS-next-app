import type { NextPage } from 'next'
import Head from 'next/head'
import RecipeReviewCard from '../components/card';
import styles from '../styles/Home.module.css'

const Home: NextPage<{posts:any}> = ({posts}: any) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>TS Next App</title>
        <meta name="description" content="typescript next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts.map((post:any) => (
          <RecipeReviewCard post={post}/>
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
