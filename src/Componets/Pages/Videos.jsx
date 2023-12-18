import React
// , { useEffect, useState } 
from "react";
import styles from "../Styles/Videos.module.css";
import { useValue } from "../../ContextApi";
import { useParams } from "react-router-dom";

export default function Video() {
    const { data, pageCount } = useValue();
    // const [newCount, setNewCount] = useState(pageCount + 1);
    const {ids}=useParams()

    // useEffect(() => {
    //     setNewCount(pageCount + 1);
    //     console.log(newCount);
    // }, [pageCount]);

    return (
        <div className={styles.Video}>
           
               <>
               {data[ids?ids:pageCount].video.map((video, index) => (
                    <div key={index}>{video}</div>
                ))}
               </>
           <hr/>
        </div>
    );
}
