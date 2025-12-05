import { useState, useEffect } from "react";
import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import thumbnail9 from '../../assets/thumbnail9.jpg'
import thumbnail10 from '../../assets/thumbnail10.jpg'
import thumbnail11 from '../../assets/thumbnail11.jpg'
import thumbnail12 from '../../assets/thumbnail12.jpg'
import thumbnail13 from '../../assets/thumbnail13.jpg'
import thumbnail14 from '../../assets/thumbnail14.jpg'
import thumbnail15 from '../../assets/thumbnail15.jpg'
import thumbnail16 from '../../assets/thumbnail16.jpg'

import { Link } from 'react-router-dom'
import {API_KEY} from '../../data'

const Feed = ({category}) => {
    //     const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    //     const response = await fetch(videoList_url);
    //     const result = await response.json();
        
    //     // Ensure items exists
    //     setData(result.items || []);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [category]);

    // return (
    //     <div className="feed">
    //         {data.map((item, index) => (
    //             <Link key={index} to={`/video/${item.id}`} className="card">
    //                 <img
    //                     src={item.snippet?.thumbnails?.medium?.url}
    //                     alt=""
    //                 />
    //                 <h2>{item.snippet?.title}</h2>
    //                 <h3>{item.snippet?.channelTitle}</h3>
    //                 <p>{item.statistics?.viewCount} views</p>
    //             </Link>
    //         ))}
    //     </div>
    // );
// };
    const [data,setData]=useState([]);

    const fetchData = async ()=>{
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }
    useEffect(()=>{
        fetchData();
    },[category])

    return ( 
        <div className='feed'>
            {data.map((item,index)=>{
                return (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.medium.url} alt=''/>
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>1.2M views • 2 days ago</p>
        </Link>
                )
                })}
         {/* <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail2} alt=''/>
            <h2>10 Tips to Improve Your Photography Skills</h2>
            <h3>Photo Master</h3>
            <p>800K views • 1 week ago</p>
        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail3} alt=''/>
            <h2>The Ultimate Guide to Cooking Delicious Meals</h2>
            <h3>Chef's Table</h3>
            <p>500K views • 3 days ago</p>
        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail4} alt=''/>
            <h2>Top 10 Programming Languages to Learn in 2023</h2>
            <h3>Code Academy</h3>
            <p>1M views • 5 days ago</p>
        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail5} alt=''/>
            <h2>Exploring the Beauty of Nature: A Hiking Adventure</h2>
            <h3>Nature Walks</h3>
            <p>600K views • 4 days ago</p>
        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail6} alt=''/>
            <h2>Mastering the Art of Yoga: A Beginner's Guide</h2>
            <h3>Yoga with Amy</h3>
            <p>300K views • 2 weeks ago</p>
        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail7} alt=''/>
            <h2>The Science Behind Climate Change: What You Need to Know</h2>
            <h3>Science Daily</h3>
            <p>900K views • 1 month ago</p>
            </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail8} alt=''/>
            <h2>DIY Home Decor Ideas on a Budget</h2>
            <h3>Creative Living</h3>
            <p>400K views • 3 weeks ago</p>
            </Link>
       <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail9} alt=''/>
            <h2>Best Vacation Spot for Your Summer Break</h2>
            <h3>Travel Vlogs</h3>
            <p>1.2M views • 2 days ago</p>

        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail10} alt=''/>
            <h2>10 Tips to Improve Your Photography Skills</h2>
            <h3>Photo Master</h3>
            <p>800K views • 1 week ago</p>

        </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail12} alt=''/>
            <h2>The Ultimate Guide to Cooking Delicious Meals</h2>
            <h3>Chef's Table</h3>
            <p>500K views • 3 days ago</p>
            </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail13} alt=''/>
            <h2>Top 10 Programming Languages to Learn in 2023</h2>
            <h3>Code Academy</h3>
            <p>1M views • 5 days ago</p>
            </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail14} alt=''/>
            <h2>Exploring the Beauty of Nature: A Hiking Adventure</h2>
            <h3>Nature Walks</h3>
            <p>600K views • 4 days ago</p>
            </Link>
        <Link to={`/video/20/4521`} className='card'>
            <img src={thumbnail15} alt=''/>
            <h2>Mastering the Art of Yoga: A Beginner's Guide</h2>
            <h3>Yoga with Amy</h3>
            <p>300K views • 2 weeks ago</p>
            </Link>
        <div className='card'>
            <img src={thumbnail16} alt=''/>
            <h2>The Science Behind Climate Change: What You Need to Know</h2>
            <h3>Science Daily</h3>
            <p>900K views • 1 month ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail8} alt=''/>
            <h2>DIY Home Decor Ideas on a Budget</h2>
            <h3>Creative Living</h3>
            <p>400K views • 3 weeks ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail1} alt=''/>
            <h2>Best Vacation Spot for Your Summer Break</h2>
            <h3>Travel Vlogs</h3>
            <p>1.2M views • 2 days ago</p>

        </div>
        <div className='card'>
            <img src={thumbnail2} alt=''/>
            <h2>10 Tips to Improve Your Photography Skills</h2>
            <h3>Photo Master</h3>
            <p>800K views • 1 week ago</p>

        </div>
        <div className='card'>
            <img src={thumbnail3} alt=''/>
            <h2>The Ultimate Guide to Cooking Delicious Meals</h2>
            <h3>Chef's Table</h3>
            <p>500K views • 3 days ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail4} alt=''/>
            <h2>Top 10 Programming Languages to Learn in 2023</h2>
            <h3>Code Academy</h3>
            <p>1M views • 5 days ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail5} alt=''/>
            <h2>Exploring the Beauty of Nature: A Hiking Adventure</h2>
            <h3>Nature Walks</h3>
            <p>600K views • 4 days ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail6} alt=''/>
            <h2>Mastering the Art of Yoga: A Beginner's Guide</h2>
            <h3>Yoga with Amy</h3>
            <p>300K views • 2 weeks ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail7} alt=''/>
            <h2>The Science Behind Climate Change: What You Need to Know</h2>
            <h3>Science Daily</h3>
            <p>900K views • 1 month ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail8} alt=''/>
            <h2>DIY Home Decor Ideas on a Budget</h2>
            <h3>Creative Living</h3>
            <p>400K views • 3 weeks ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail1} alt=''/>
            <h2>Best Vacation Spot for Your Summer Break</h2>
            <h3>Travel Vlogs</h3>
            <p>1.2M views • 2 days ago</p>

        </div>
        <div className='card'>
            <img src={thumbnail2} alt=''/>
            <h2>10 Tips to Improve Your Photography Skills</h2>
            <h3>Photo Master</h3>
            <p>800K views • 1 week ago</p>

        </div>
        <div className='card'>
            <img src={thumbnail3} alt=''/>
            <h2>The Ultimate Guide to Cooking Delicious Meals</h2>
            <h3>Chef's Table</h3>
            <p>500K views • 3 days ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail4} alt=''/>
            <h2>Top 10 Programming Languages to Learn in 2023</h2>
            <h3>Code Academy</h3>
            <p>1M views • 5 days ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail5} alt=''/>
            <h2>Exploring the Beauty of Nature: A Hiking Adventure</h2>
            <h3>Nature Walks</h3>
            <p>600K views • 4 days ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail6} alt=''/>
            <h2>Mastering the Art of Yoga: A Beginner's Guide</h2>
            <h3>Yoga with Amy</h3>
            <p>300K views • 2 weeks ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail7} alt=''/>
            <h2>The Science Behind Climate Change: What You Need to Know</h2>
            <h3>Science Daily</h3>
            <p>900K views • 1 month ago</p>
            </div>
        <div className='card'>
            <img src={thumbnail8} alt=''/>
            <h2>DIY Home Decor Ideas on a Budget</h2>
            <h3>Creative Living</h3>
            <p>400K views • 3 weeks ago</p>
            </div> */}
       </div>
   )
}
export default Feed