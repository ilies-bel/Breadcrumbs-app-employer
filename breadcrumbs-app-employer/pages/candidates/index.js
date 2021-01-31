import Head from 'next/head'
import BottomNav from '../../components/Layout/BottomNavigation'
import Header from '../../components/Layout/Header';

const candidates = [
    {
        name: "Vanessa Cody",
        Email: "email",
        phone: "514-514-5144",
        position: "HR Coordinator"
    },
    {
        name: "Itachi Uchiha",
        Email: "itachi@akatsuki.com",
        phone: "Non renseigné",
        position: "Lieutenant"
    },
    {
        name: "Zorro",
        Email: "Non renseigné",
        phone: "22-333-5522",
        position: "Bras droit"
    }
]

export default function Candidates() {
    return (
        <>
        <Head>
            <title>Candidates</title>
        </Head>

        <h1>Candidates</h1>
        {
        candidates.map((candidate, index) => 
            <RowCandidate key={index} candidate={candidate} />
        )}
        
        </>
        )
}

const RowCandidate = (props) => {
    //const candidate = props.candidate
    return(
        <>
        <div>
            <input type='checkbox'></input> <span>{props.candidate.name}</span> --- <span>{props.candidate.phone}</span>
        </div>
        </>
    )
}