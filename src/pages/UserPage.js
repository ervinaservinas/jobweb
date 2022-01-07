import {useEffect, useState} from 'react';
import PostsList from "../components/PostsList";
import {useParams} from "react-router-dom";


const UserPage = () => {
    const {userName} = useParams()

    const [getPosts, setPosts] = useState([])


    useEffect(() => {

        fetch("http://167.99.138.67:1111/getuserposts/"+userName)
            .then(res => res.json())
            .then(data => {
                setPosts(data.data)
            })

    }, [])

    return (
        <div>
            <PostsList posts={getPosts}/>
        </div>
    );
};

export default UserPage;