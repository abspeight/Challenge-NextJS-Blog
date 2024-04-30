import Link from 'next/link';
import Date from '../Components/date';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Layout, { siteTitle } from '../Components/layout';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Abdullah Speight. I'm a student at Chapman University studying mathematics and computer science. I'm on track to graduate in May 2024. Upon graduating, my goal is to find a job that allows me to supplement my lifestyle and continue studying mathematics either in my free time or by pursuing a Ph.D. I'm particularly interested in group theory, ring theory, category theory, and boolean algebra and how we can build on them using computer science. While at Chapman University, I become proficient in Python and Java. I also picked up other software languages like C++, HTML, CSS, JavaScript, and C#.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </Layout>
  );
}
