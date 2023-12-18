import React from "react";
import styles from '../Styles/Playlist.module.css';
import { useValue } from "../../ContextApi";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";


export default function Playlist(){
    const {data,handleClick,email}=useValue();
    const navigate=useNavigate();


    const handlePlayVideo=(i)=>{

            if(email){
                handleClick(i)
                navigate(`/${i}`);
            }else{
                navigate('/auth');
            }
    }
    return(
        <>
        <div className={styles.Playlist}>
                <h1 className={styles.pList}>PlayList</h1>
                <div className={styles.wrapper}>
                   
                    {data.map((d,i)=>{
                        return(
                             <div className={styles.sleep} key={i} onClick={()=>handlePlayVideo(i)} >
                                 <div className={styles.htS}></div>
                                      <div className={styles.sHeading}>{d.title}</div>
                                            </div>
                        )
                    })}
                    <br/>
                   
                </div>
        </div>
        <Contact/>
        </>
    )
}