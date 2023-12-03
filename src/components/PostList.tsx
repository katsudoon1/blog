import Link from 'next/link';

// 投稿データの型を定義
interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
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
  );
};

export default PostList;
