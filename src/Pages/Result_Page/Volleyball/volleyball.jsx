import './volleyball.css';
import SetMatch from '../setMatch/setMatch';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';


const VolleyballResult = () => {

    const [fixture, setFixture] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'fixtures', 'Volleyball', 'boys'), orderBy('order'));
        const unsub = onSnapshot(q, snapshot => {
            const newFix = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(newFix);
            setFixture(newFix);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <>
                    {fixture.map((item, i) => {
                        return item.start ? 
                            <SetMatch matchData={item} type = {0}/>
                         : <> </>
                    }
                    )}
                </>
            }
        </div>
    );
};

export default VolleyballResult;