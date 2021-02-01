import React from "react"
import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import { GET_POSTS } from '../queries/posts';

const PostList = () => {
    const { loading, error, data } = useQuery(GET_POSTS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <>
            <main className="home">
                <section className="bg-white">
                    <div className="row">
                        <h1>Posts</h1>
                        <ul>
                            {data.posts &&
                                data.posts.map(({ titulo, id }) => (
                                    <li key={id}>
                                        <span>{titulo}</span>
                                        <div className="App-item-actions">
                                            <Link to={{
                                                pathname: '/edit-post', state: { params: {id: id}}}}> 
                                                <span role="img" aria-label="editar">Editar ✏️</span> 
                                            </Link>
                                            <Link to={{
                                                pathname: '/delete-post', state: { params: {id: id}}}}> 
                                                <span role="img" aria-label="excluir">Excluir ❌</span> 
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                        </ul>

                        <p>
                            <Link to="/create-post">
                                <button>Criar Post</button>
                            </Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PostList