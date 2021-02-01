import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { Link, useHistory } from "react-router-dom"
import { GET_POST_BY_ID, UPDATE_POST } from '../queries/posts';

const EditarPost = () => {
  const history = useHistory()
  const { id } = history.location.state.params

  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  })
  const [updatePost, { error: mutationError }] = useMutation(
    UPDATE_POST,
    {
      onCompleted() {
        history.push(`/`)
      },
    }
  )

  if (loading) return <p>Atualizando...</p>
  if (error || mutationError) return <p>Erro :(</p>

  let tituloInput
  let conteudoInput
  let nomeInput

  return (
    <main className="home">
      <section className="bg-white">
        <div className="row">
          <h1>Editar Post</h1>
          <form
            className="App-viewbox"
            onSubmit={e => {
              e.preventDefault()

              updatePost({
                variables: {
                  id: data.post.id,
                  titulo: tituloInput.value,
                  conteudo: conteudoInput.value,
                  nome: nomeInput.value,
                },
              })
            }}
          >
            <p>
              <label>
                Post
            <br />
                <input
                  type="text"
                  titulo="titulo"
                  defaultValue={data.post.titulo}
                  ref={node => {
                    tituloInput = node
                  }}
                />
              </label>
            </p>
            <p>
              <label>
                Conteudo
            <br />
                <input
                  type="text"
                  titulo="conteudo"
                  defaultValue={data.post.conteudo}
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
                  titulo="data"
                  defaultValue={data.post.data}
                  ref={node => {
                    nomeInput = node
                  }}
                />
              </label>
            </p>
            <p>
              <Link to="/">
                <button type="button">Cancelar</button>
              </Link>
              <button type="submit">
                Salvar
          </button>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default EditarPost