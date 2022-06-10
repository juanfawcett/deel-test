import { Context, FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import './AutoComplete.css';

const AutoComplete: FC<propTypes> = ({context}) => {

    const [text, setText] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(true);
    const [data, setData] = useContext(context);
    let debounce: any = useRef(null);

    useEffect(() => {
        debounce.current = setTimeout(() => setData(showResults ? text : ''), 500)
        return () => clearTimeout(debounce.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, setData]);

    useEffect(() => {
        if(!showResults) setShowResults(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, setShowResults]);

    const selectOption = useCallback((selection: string) => {
        setText(selection);
        setShowResults(false);
    }, [setShowResults, setText]);

    return (
        <div className='autocomplete'>
            <h4>Autocomplete Component</h4>
            <input className='autocomplete__input' value={text} onChange={e => setText(e.target.value)} placeholder={'Write something to search'}/>
            {showResults && !!data.length &&
            (<div className='autocomplete__results'>
                <div className='autocomplete__outside' onClick={() => setData('')}></div>
                <ul className='autocomplete__list'>
                    {
                        data.map(({name}: any, index: number) => {
                            let regex = new RegExp(text, 'i');
                            let highlightedStr = name.replace(regex, '<b>'+ text +'</b>');
                            return (<li className='autocomplete__list-item' key={index} onClick={() => selectOption(name)} dangerouslySetInnerHTML={{__html: highlightedStr}}></li>)
                        })
                    }
                </ul>
            </div>)}
        </ div>
    )
}

interface propTypes {
    context: Context<any[]>;
}

export default AutoComplete;