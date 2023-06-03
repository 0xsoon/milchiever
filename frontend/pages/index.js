import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
// import { getSortedPostsData } from '../lib/posts'

// export async function getStaticProps() {
//   // const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
 
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
    </Layout>
  )
}