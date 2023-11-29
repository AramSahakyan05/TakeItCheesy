import { useContext, useEffect, useState } from "react";
import {primeCompositeArray} from "./work";

const a = 10
const b = 60;

const Work = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const timeoutId = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        }
    },[]);

  return <div className="work" style={{display: loading ? "none" : "block"}}>
    <p>{`Given two natural numbers: a and b (a < b). Make an array which contains prime and composite numbers between a and b;`}</p>
        {
            primeCompositeArray(a, b).map(item => {
                return <span key={Math.random()}>{item}</span>
            })
        }
    </div>
}

export default Work