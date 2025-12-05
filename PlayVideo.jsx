import React from 'react'
import { useState,useEffect } from "react";
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {API_KEY} from '../../data'
import {useParams} from 'react-router-dom'

const PlayVideo = () => {
    const {videoId}=useParams();
    const [apiData,setApiData]=useState(null);
    const fetchVideoData=async()=>{
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }

    useEffect(()=>{
       fetchVideoData(); 
    },[videoId])

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId }?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className='play-video-info'>
                <p>1.2M views • 2 days ago</p>
                <div>
                    <span><img src={like} alt=""/> {apiData?apiData.statistics.likeCount:155}</span>
                    <span><img src={dislike} alt=""/>20</span>
                    <span><img src={share} alt=""/>Share</span>
                    <span><img src={save} alt=""/>Save</span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={jack} alt=""/>
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>2M Subscribers</span>
                </div>
            <button>Subscribe</button>
        </div>
        <div className='video-description'>
            <p>{apiData?apiData.snippet.description:"Description Here"}</p>
            <hr />
            <h4>{apiData?apiData.statistics.commentCount:102} Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt=""/>
                <div>
                    <h3>Jack Nicholas<span> 1 day ago</span></h3>
                    <p>This place was so awesome, thanks for the rec!</p>
                    <div className='comment-action'>
                        <img src={like} alt=""/>
                        <span>244</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt=""/>
                <div>
                    <h3>Nina Mashkov<span> 3 day ago</span></h3>
                    <p>Such a cool video</p>
                    <div className='comment-action'>
                        <img src={like} alt=""/>
                        <span>5</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt=""/>
                <div>
                    <h3>Jason<span> 1 month ago</span></h3>
                    <p>Super Nice!!!</p>
                    <div className='comment-action'>
                        <img src={like} alt=""/>
                        <span>2</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt=""/>
                <div>
                    <h3>Sara Jackson<span> 20 day ago</span></h3>
                    <p>Love this place, I wanna go back</p>
                    <div className='comment-action'>
                        <img src={like} alt=""/>
                        <span>24</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt=""/>
                <div>
                    <h3>Fatima Amir<span> 1 minute ago</span></h3>
                    <p>I hated this place so weird</p>
                    <div className='comment-action'>
                        <img src={like} alt=""/>
                        <img src={dislike} alt=''/>
                        <span>200</span>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <img src={user_profile} alt=""/>
                <div>
                    <h3>Micheal Jackson<span> 20 years ago</span></h3>
                    <p>HeeHee!!!</p>
                    <div className='comment-action'>
                        <img src={like} alt=""/>
                        <span>1M</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}
export default PlayVideo