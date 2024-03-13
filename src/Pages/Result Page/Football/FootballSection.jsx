import './FootballSection.css';
import FootballScore from './FootballScore';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';


const Football = () => {
    const [fixture, setFixture] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'fixtures', 'Footbatt', 'boys'), orderBy('order'));
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
        <div>
            {loading ? <h1>Loading...</h1> :
                <>
                    {fixture.map((item, i) => {
                        return item.start ? 
                            <FootballScore key={item.id} item={item}/>
                         : <> </>
                    }
                    )}
                </>
            }
        </div>
    );
};

export default Football;