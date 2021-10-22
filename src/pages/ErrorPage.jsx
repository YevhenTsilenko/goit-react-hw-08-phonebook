import { Redirect } from 'react-router-dom';

function ErrorPage () {
    return (
        <>
            <p>404 Page doesn't exist</p>
            <Redirect to={"/"} />
        </>
    )
};

export { ErrorPage };