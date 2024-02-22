//https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
//每隔10秒生成静态资源
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()
 
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}