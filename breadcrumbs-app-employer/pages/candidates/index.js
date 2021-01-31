import Head from 'next/head'
import BottomNav from '../../components/Layout/DrawerLeft'
import Header from '../../components/Layout/Header';
import axios from 'axios';
import {makeStyles} from "@material-ui/core/styles";


axios.defaults.baseURL = 'http://localhost:3000';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

const fetchData = async () => await
    axios.get('/api/users')
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
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Header>Candidate page header</Header>

                <Head>
                    <title>Candidates</title>
                </Head>
                <BottomNav/>
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
            </div>
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
