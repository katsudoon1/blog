import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  // ここには、APIから取得した投稿のデータを配置します。
  // 仮の投稿データを以下に示します。
  const posts = [
    { id: 1, title: '最初の投稿', content: 'これは最初の投稿の内容です。' },
    { id: 2, title: '二番目の投稿', content: 'これは二番目の投稿の内容です。' },
    // 他の投稿データ...
  ];

  return (
    <div>
      <Head>
        <title>掲示板ホームページ</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto'>
          <Link href='/'>
            <a className='text-white'>ホーム</a>
          </Link>
          {/* 他のナビゲーションリンク */}
        </div>
      </nav>

      <main className='container mx-auto my-8'>
        <h1 className='text-4xl font-bold mb-6'>最新の投稿</h1>
        <div>
          {posts.map((post) => (
            <div key={post.id} className='mb-4 p-4 shadow'>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p>{post.content}</p>
              <Link href={`/posts/${post.id}`}>
                <a className='text-blue-500'>続きを読む</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
