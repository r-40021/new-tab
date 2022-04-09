import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <div className={styles.background}>
    <div className={styles.bodyContent}>
      <Container maxWidth="sm">
        <Typography variant="h1" component="span" className={styles.clock}>
          12:00
        </Typography>
        03
      </Container>
    </div>
    </div>
  )
}

export default Home
