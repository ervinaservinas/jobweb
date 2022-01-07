import {Link} from "react-router-dom";
import Blogs from "./Blogs";
import React from "react";
import Carouselbs from "../componets/Carouselbs";

const HomePage = () => {

    return (
        <div>
            <div className="navbar">
                <div className="space-btw">
                    <div>
                        Find your job here!
                        <i className="fab fa-react"></i>
                    </div>

                    <div>
                        <button>Find a job</button>
                        <button>Post a job</button>
                        <button>Pages</button>
                        <button>Shop</button>
                        <button> Sign Up</button>
                        <button>Login</button>
                    </div>
                </div>
            </div>


            <div className="mainPageBg d-flex1">
                <div>

                </div>

                <div className="center ">
                    <input type="text" placeholder="Keywords"/>
                    <input type="text" placeholder="All Regions"/>
                    <input type="text" placeholder="Choose a category"/>

                </div>

                <div className="center">
                    The Easiest Way to Get Your New Job
                    Find jobs, create trackable resumes and enrich your applications.
                </div>

            </div>
            <div className="center">
                Companies we've Helped
                Some of the companies we've helped recruit excellent applicants over the years.
            </div>
            <div className="center">
                facebook
                snapchat
                instagram
            </div>
            <div className="d-flex">
                <Link to="/create">
                    <div className="btn">Create JOB POSTS</div>
                </Link>

                <Link to="/all">
                    <div className="btn">All JOB POSTS</div>
                </Link>

            </div>
            <div>
                <h4 className="textCenter">
                    Jobify Site Stats
                    Here we list our site stats and how many people we’ve helped find a job and companies have found
                    recruits. It's a pretty awesome stats area!

                </h4>
                <div className="d-flex space-btw">
                    <div className="numberBox">
                        20
                        Jobs Posted
                    </div>
                    <div className="numberBox">
                        0
                        Jobs Filled
                    </div>
                    <div className="numberBox">
                        20
                        Companies
                    </div>
                    <div className="numberBox">
                        5,301
                        Members
                    </div>
                </div>


            </div>

            <div>
                <h4 className="textCenter">
                    Job reviews carousel
                </h4>

                <div className="carouselBox">
                    <Carouselbs/>
                </div>


            </div>
            <div>
                <h4 className="textCenter"> Blog posts</h4>
                <div className="space-btw ">
                    <div className="d-flex1 space-btw">
                        <p>blog 1</p>
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HhvYunZpg9aO6PJfZMTHHwHaFH%26pid%3DApi%26h%3D160&f=1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, pariatur.</p>
                        <button onClick={Blogs}>read more</button>
                    </div>
                    <div className="d-flex1 space-btw">
                        <p>blog2</p>
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HhvYunZpg9aO6PJfZMTHHwHaFH%26pid%3DApi%26h%3D160&f=1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, pariatur.</p>
                        <button onClick={Blogs}>read more</button>

                    </div>
                    <div className="d-flex1 space-btw">
                        <p> blog3</p>
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HhvYunZpg9aO6PJfZMTHHwHaFH%26pid%3DApi%26h%3D160&f=1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, pariatur.</p>
                        <button onClick={Blogs}>read more</button>

                    </div>
                </div>


            </div>


            <div className="footer">
                Footer
                Contacts
                About
                Emails
                services
                about us


            </div>


        </div>

    );
};

export default HomePage;