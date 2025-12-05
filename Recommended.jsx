import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import {useState,useEffect} from 'react'
import {API_KEY} from '../../data'
import {Link} from 'react-router-dom'

const Recommended = ({categoryId}) => {
 const [apiData,setApiData]=useState([]);
 const fetchData = async ()=>{
    const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(relatedVideo_url).then(response=>response.json()).then(data=>setApiData(data.items))
}
useEffect(()=>{
    fetchData();
},[])
    return (
        <div className='recommended'>
            {apiData.map((item,index)=>{
                return (
        <Link to ={`/video/${item.snippet.categoryId}/${item.id}`}key={index} className='side-video-list'>
            <img src={item.snippet.thumbnails.medium.url} alt=''/>
            <div className='video-info'>
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <span>1.2M views • 2 days ago</span>
        </div>
        </Link>
            )
             })}
               </div>
    )
}
export default Recommended
        {/* <div className='side-video-list'>
            <img src={thumbnail2} alt=''/>
            <div className='video-info'>
                <h4>Best Vacation Spot for Your Summer Break</h4>
                <p>Travel Vlogs</p>
                <span>1.2M views • 2 days ago</span>
        </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail3} alt=''/>
            <div className='video-info'>
                <h4>Best Vacation Spot for Your Summer Break</h4>
                <p>Travel Vlogs</p>
                <span>1.2M views • 2 days ago</span>
        </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail4} alt=''/>
            <div className='video-info'>
                <h4>Best Vacation Spot for Your Summer Break</h4>
                <p>Travel Vlogs</p>
                <span>1.2M views • 2 days ago</span>
        </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail5} alt=''/>
            <div className='video-info'>
                <h4>The next one</h4>
                <p> Vlogs</p>
                <span>1.5k views • 7 days ago</span>
        </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail6} alt=''/>
            <div className='video-info'>
                <h4>Best Vacation Spot for Your Summer Break</h4>
                <p>Travel Vlogs</p>
                <span>1.2M views • 2 days ago</span>
        </div>
        </div>
        <div className='side-video-list'>
            <img src={thumbnail7} alt=''/>
            <div className='video-info'>
                <h4>Another Video</h4>
                <p>Content</p>
                <span>1.2M views • 2 days ago</span>
        </div>
        </div> */}
      