import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import CricketScore from './CricketScore';

const Cricket=()=>{

    const [fixture, setFixture] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'fixtures', 'Cricket', 'boys'));
        const unsub = onSnapshot(q, snapshot => {
            const newFix = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFixture(newFix);
        });
        return () => unsub();
    }, []);
    useEffect(()=>{
        if(fixture.length>0){
            setLoading(false)
        }
        else{
            setLoading(true)
        }
    },[fixture])

    return (
        <>
        {loading ? <h1>Loading...</h1> :
                <>
                    {fixture.map((item, i) => {
                        return item.start ? 
                            <CricketScore matchData={item}/>
                         : <> </>
                    }
                    )}
                </>
            }
        </>
    )
}
export default Cricket;