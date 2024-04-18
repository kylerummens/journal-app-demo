'use client';

import { useState } from "react";

type Post = {
  date: string;
  miles: string | number;
  comments: string;
}

const newPost = {
  date: '',
  miles: 0,
  comments: ''
}

export default function Page() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>({...newPost});

  const submit = () => {
    setPosts([...posts, post]);
    setPost({...newPost});
  }

  return (
    <div>
      <div style={{ maxWidth: 500, width: '100%', margin: 'auto', display: 'flex', flexDirection: 'column', paddingTop: 80, marginBottom: 80 }}>
        <div style={{ marginBottom: 8 }}>Date</div>
        <input type="date" style={{ marginBottom: 24 }} value={post.date} onChange={(e) => setPost({ ...post, date: e.target.value })} />
        <div style={{ marginBottom: 8 }}>Number of miles</div>
        <input type="text" style={{ marginBottom: 24 }} value={post.miles} onChange={(e) => setPost({ ...post, miles: e.currentTarget.value })} />
        <div style={{ marginBottom: 8 }}>Comments</div>
        <textarea rows={10} style={{ marginBottom: 24 }} value={post.comments} onChange={(e) => setPost({ ...post, comments: e.target.value })}></textarea>
        <div>
          <button onClick={submit}>Submit</button>
        </div>
      </div>
      <div style={{ maxWidth: 1000, width: '100%', margin: 'auto', display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 100 }}>
        {posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid black', padding: 16 }}>
            <div>{post.date}</div>
            <div style={{ marginBottom: 8}}>{post.miles} miles</div>
            <div>{post.comments}</div>
          </div>
        ))}
      </div>
    </div>
  )
}