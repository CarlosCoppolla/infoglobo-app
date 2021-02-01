import React, {useState, useMemo, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px',
    }
}

export default function PostGrid ({posts}) {
    const [pageSize, setPageSize] = useState(9)
    const [current, setCurrent] = useState(1)

    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts])

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [current, pageSize])

    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                {paginatedPosts.map((post, index) => (
                    <div className="post-container">
                        <figure>
                            <Link to={`/post/${post?.id}`}>
                                { <img src={require(`../../assets/images/apollo_graphql.png`)} alt={post.image}/> }
                            </Link>
                        </figure>
                        <h2>{post.titulo}</h2>
                        <p className="description-text">
                            {post.conteudo}
                        </p>
                        <p className="author-text">
                            <span>
                                De: Carlos Eduardo Coppolla Coutinho 
                            </span>
                            <p>
                                Data de Publicação: {post.data}
                            </p>
                        </p>
                        {/* <Link to={post.link}>Saiba mais...</Link> */}
                    </div>
                ))}
            </section>
            <Pagination
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize}
                total={posts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>
    )
}