import React from "react"
import { useMutation } from "@apollo/client"
import { Link, useHistory } from "react-router-dom"
import { GET_POSTS, CREATE_POST } from '../queries/posts';

const CreatePost = () => {
    const history = useHistory()

    const [createPost, { loading, error }] = useMutation(
        CREATE_POST,
        {
            update(cache, { data: { createPost } }) {
                const { posts } = cache.readQuery({ query: GET_POSTS })
                cache.writeQuery({
                    query: GET_POSTS,
                    data: { posts: posts.concat([createPost]) },
                })
            },
            onCompleted() {
                history.push(`/`)
            },
        }
    )

    if (loading) return <p>Atualizando...</p>
    if (error) return <p>Erro :(</p>

    let tituloInput
    let conteudoInput
    let dataInput

    return (
        <main className="home">
            <section className="bg-white">
                <div className="row">
                    <h1>Criar Post</h1>
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault()
                                createPost({
                                    variables: {
                                        titulo: tituloInput.value,
                                        conteudo: conteudoInput.value,
                                        data: dataInput.value,
                                    },
                                })

                                tituloInput.value = ""
                                conteudoInput.value = ""
                                dataInput.value = ""
                            }}>
                            <p>
                                <label>
                                    Titulo
                                    <br />
                                    <input
                                        type="text"
                                        name="titulo"
                                        ref={node => {
                                            tituloInput = node
                                        }}
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    conteudo
                                    <br />
                                    <input
                                        type="text"
                                        name="conteudo"
                                        ref={node => {
                                            conteudoInput = node
                                        }}
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    Data
                                    <br />
                                    <input
                                        type="text"
                                        name="data"
                                        ref={node => {
                                            dataInput = node
                                        }}
                                    />
                                </label>
                            </p>
                            <p>
                                <Link to="/">
                                    <button>Cancelar</button>
                                </Link>
                                <button type="submit">
                                    Salvar
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CreatePost