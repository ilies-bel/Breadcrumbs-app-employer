import Head from 'next/head'
import BottomNav from '@/components/Layout/BottomNavigation'
import Header from '@/components/Layout/Header';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000';


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

    return (
        <>
        {/*<div>

            <Head>
                <title>Candidates</title>
            </Head>

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
            </div>*/}


            <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
            <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
            Name
            </th>
            <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
            Title
            </th>
            <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
            Status
            </th>
            <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
            Role
            </th>
            <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
            </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
        {users.map((person, i) => (
            <tr key={i}>
            <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={"person?.image"} alt="" />
            </div>
            <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{person?.last_name}</div>
            <div className="text-sm text-gray-500">{person?.email}</div>
            </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{person?.title}</div>
            <div className="text-sm text-gray-500">{person?.phone_number}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
            </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person?.role}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
            </a>
            </td>
            </tr>
            ))}
            </tbody>
            </table>
            </div>
            </div>
            </div>
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
