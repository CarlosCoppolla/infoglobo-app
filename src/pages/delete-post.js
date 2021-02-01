import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { Link, useHistory } from "react-router-dom"
import { GET_POSTS, DELETE_POST, GET_POST_BY_ID } from '../queries/posts';

const DeletarPost = () => {
    const history = useHistory()
    const { id } = history.location.state.params

    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { id },
    })

    const [deletePost, { error: mutationError }] = useMutation(
        DELETE_POST,
        {
            update(cache) {
                const { posts } = cache.readQuery({ query: GET_POSTS })

                const deletedIndex = posts.findIndex(
                    post => post.id === id
                )
                const updatedCache = [
                    ...posts.slice(0, deletedIndex),
                    ...posts.slice(deletedIndex + 1, posts.length),
                ]
                cache.writeQuery({
                    query: GET_POSTS,
                    data: {
                        posts: updatedCache,
                    },
                })
            },
            onCompleted() {
                history.push(`/`)
            },
        }
    )

    if (loading) return <p>Atualizando...</p>
    if (error || mutationError) return <p>Erro :(</p>

    return (
        <main className="home">
            <section className="bg-white">
                <div className="row">
                    <h1>Excluir Post</h1>
                    <form
                        onSubmit={e => {
                            e.preventDefault()

                            deletePost({
                                variables: { id },
                            })
                        }}>
                        <p>
                            Deseja realmente excluir o post <strong>{data.post.titulo}</strong>?
                        </p>
                        <p className="App-close-btn">
                            <Link to="/">
                                <button>Cancelar</button>
                            </Link>
                            <button type="submit">
                                Excluir
                            </button>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default DeletarPost