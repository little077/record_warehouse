//next里动态路由实现ISR

export async function getStaticProps({ params }:{params:any}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).then(res=>res.json())
    return { props: { post:res } }
  }
export async function getStaticPaths() {
    // 调用外部 API 获取博文列表
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res=>res.json())
    const paths = res?.map((post:any) => ({
      params: { id: String(post.id) },
    }))
    return { paths, fallback: false }
}