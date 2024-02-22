//next里动态路由实现SSR
//1、两种，纯静态或外部数据，但是最终都生成静态html文件，每次重新build的时候更新，有利于seo、cdn可以缓存，也就是有利于性能
export async function getStaticProps({ params }:{params:any}) {
   //根据id生成每个html静态页面
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).then(res=>res.json())
    return { props: { post:res } }
  }
export async function getStaticPaths() {
    // 调用外部 API 获取博文列表
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res=>res.json())
    const paths = res?.map((post:any) => ({
      //id必须是一个字符串，id的命名和动态路由有关？生成ssr页面，fallback表示匹配不到是否返回404
      params: { id: String(post.id) },
    }))
    return { paths, fallback: false }
}