import Head from 'next/head'
import BottomNav from '../../components/Layout/BottomNavigation'
import Header from '../../components/Layout/Header';
import axios from 'axios';
import {useEffect, useState} from "react";

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

const fetchData = async () => await
    axios.get('http://localhost:3000/api/users')
        .then(res => ({
            error: false,
            users: res.data,
        }))
        .catch(() => ({
                error: true,
                users: null,
            }),
        );


const Candidates = ({users, error}) => {

    return (
        <>
            <Head>
                <title>Candidates</title>
            </Head>
            <BottomNav/>

            <main>

                <header>
                    <h1>List of candidates</h1>
                </header>
                <table>
                    <thead>
                    <tr>
                        <td></td>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Mail</td>
                        <td>Phone number</td>
                        <td>Role</td>
                    </tr>
                    </thead>
                    {error && <div>There was an error.</div>}
                    {!error && users && (


                        <tbody>
                        {users.map((person, index) =>
                            <tr key={index}>
                                <td></td>
                                <td>{person.first_name}</td>
                                <td>{person.last_name}</td>
                                <td>{person.mail}</td>
                                <td>{person.phone_number}</td>
                                <td>{person.role}</td>
                            </tr>
                        )}
                        </tbody>)}
                </table>
            </main>

        </>
    );
};

export const getServerSideProps = async () => {
    const data = await fetchData();

    return {
        props: data,
    };
}


export default Candidates;

/*
const Candidates = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setError(false);
                setUsers(prevState => [...prevState, ...res.data]);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Head>
                <title>Candidates</title>
            </Head>
            <Header><h1>Candidates</h1></Header>


            <main>

                <table>
                    <thead>
                    <tr>
                        <td></td>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Mail</td>
                        <td>Phone number</td>
                        <td>Role</td>
                    </tr>

                    </thead>
                    <tbody>
                    {users.map((person, index) =>
                        <tr key={index}>
                            <td></td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.mail}</td>
                            <td>{person.phone_number}</td>
                            <td>{person.role}</td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </main>


            <BottomNav/>
        </>


    )

}


export default Candidates

*/


/*
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    //const res = await fetch(`https://.../data`)
    //const data = await res.json()
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const users = res.data.json();
            //return this.setState({users});
            return {props: {users}}
        })
}
*/