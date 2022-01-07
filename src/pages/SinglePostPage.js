import {useEffect, useState} from 'react';
import PostsList from "../components/PostsList";
import {useParams} from "react-router-dom";

const SinglePostPage = () => {
    const {userName, id} = useParams()

    const [getPosts, setPosts] = useState([])


    useEffect(() => {

        fetch(`http://167.99.138.67:1111/getsinglepost/${userName}/${id}`)
            .then(res => res.json())
            .then(data => {
                setPosts([data.data])
            })

    }, [])


    return (
        <div>
            <PostsList posts={getPosts}/>
        </div>
    );
};

export default SinglePostPage;