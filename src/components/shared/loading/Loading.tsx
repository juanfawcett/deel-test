import { useContext } from 'react';
import { LoadingContext } from '../../../contexts/loading.context';
import './Loading.css';

const Loading = () => {

    const [isLoading] = useContext(LoadingContext)

    return (
        <>
        {isLoading && (<div className='loading'></div>)}
        </>
    )
}

export default Loading;