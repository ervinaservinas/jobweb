import './App.css';
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage"
import AllPostsPage from "./pages/AllPostsPage";
import UpdatePage from "./pages/UpdatePage";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import Blogs from "./pages/Blogs";

function App() {


    const [getPosts, setPosts] = useState([])
    const [getUpdating, setUpdating] = useState(null)


    function add(item) {
        setPosts([...getPosts, item])
    }

    function setUpdatePost(id) {
        const currentPost = getPosts.find(x => x.id === id)
        setUpdating(currentPost)
    }

    function updatePost(item) {
        const allPosts = getPosts.filter(x => x.id !== item.id)
        setPosts([...allPosts, item])
    }

    return (
        <div>
            <BrowserRouter>
                <div className="d-flex">
                    <div className="grow1">
                        <Routes>
                            <Route  path="/" element={ <HomePage/> }>
                            </Route>
                            <Route  path="/create" element={<CreatePage addPost={add}/>}>
                            </Route>
                            <Route  path="/all" element={ <AllPostsPage posts={getPosts} setUpdate={setUpdatePost}/> }>
                            </Route>
                            <Route  path="/update" element={ <UpdatePage update={updatePost} post={getUpdating}/> }>
                            </Route>
                            <Route  path="/blogs" element={ <Blogs/> }>
                            </Route>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
