import React from 'react';
import { PostMasonry, MasonryPost, PostGrid} from '../components/common'
import { useQuery } from "@apollo/client"
import {GET_POSTS} from '../queries/posts';

import trending from '../assets/mocks/trending'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3',
    }
}

const mergeStyles = function (posts, config){
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)

export default function Home() {
    const { loading, error, data } = useQuery(GET_POSTS)
    if (loading) return <p>Atualizando...</p>
    if (error) return <p>Erro :(</p>

    return (
        <main className="home">
            { <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <h1>Últimas notícias</h1>
                        <PostGrid posts={data.posts} />
                    </div>
                </section>
            </section>}

            { <section className="container">
                <div className="row">
                    <PostMasonry posts={trending} columns={3} />
                </div>
            </section> }
        </main>
    )
}