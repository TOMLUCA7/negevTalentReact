import React, {useEffect, useState} from 'react'

const POSTS_API = "https://jsonplaceholder.typicode.com/posts"

const FetchesPosts = () => {

    const [posts , setPosts] = useState([])

    useEffect(() => {
        const sendPostRequest = async () => {
            try {
                const response = await fetch(POSTS_API);
                
                if (!response.ok) {
                    throw new Error("error from the server - ");
                }

                const PostsData = await response.json(); 

                setPosts(PostsData);
            } catch (err) {
                console.log("error from useEffect", err.message);
            }
        };

        sendPostRequest()
    }, [])



  return (
    <>
        <h1 style={{textAlign:'center'}}>Top posts</h1>
        <div style={{display: 'flex', flexWrap: "wrap", gap: '20px'}}>
            {posts.filter((post) => post.id <= 10).map((post) => (
                <div 
                    style={{width: '400px', padding: '20px', border: '1px solid', textAlign: 'center'}} 
                    key={post.id}
                >
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                </div>
            )) }
        </div>
    </>
  )
}

export default FetchesPosts