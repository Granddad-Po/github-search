import React from 'react';
import {useSearchUsersQuery} from "../store/github/github.api";

const HomePage = () => {
    const {isLoading, isError, data} = useSearchUsersQuery('granddad')

    console.log(data)
    return (
        <div>
            Home
        </div>
    );
};

export default HomePage;