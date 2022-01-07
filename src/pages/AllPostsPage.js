import React from 'react';
import {useNavigate} from "react-router-dom";

const AllPostsPage = ({posts, setUpdate}) => {
    const nav = useNavigate()


    function updatePost(id) {
        setUpdate(id)
        nav('/update')
    }

    return (

        <div>
            <div>
                <div>
                    <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F35%2F2f%2F85%2F352f855cf530b5893faf2471f4969fd3--eastern-europe-travel-guide.jpg&f=1&nofb=1"/>
                </div>
                <div>
                    All job posts
                </div>
            </div>


            {posts.map((x, index) => {
                const style = {
                    height: x.height + "px",
                    width: x.width + "px",
                    color: x.color,
                    borderRadius: x.borderRadius + "px"
                }


                return <div className="post" style={style} key={index}>
                    <img src={x.image} alt=""/>
                    <h1>{x.title}</h1>
                    <div>{x.description}</div>
                    <button onClick={() => updatePost(x.id)}>Update</button>
                </div>
            })}
        </div>
    );
};

export default AllPostsPage;