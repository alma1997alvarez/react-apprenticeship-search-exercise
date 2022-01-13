import {useState} from 'react';

const Search = ({resultList}) => {
    const [ searchText, setSearchText ] = useState('');
    const [ list, setList ] = useState([]);
     
    const inputChangeHandler = (evt) =>{
        setSearchText(evt.target.value);
    }

    const buttonClickHandler = () =>{
        setList([...list, searchText]);
    }
    
    return (
        <>
        <input type="text" onChange={inputChangeHandler} value={searchText}></input>
        <button onClick={buttonClickHandler}>Search</button>
        <ul>
            {list.map( (text) => <li key={text}>{text}</li>)}
        </ul>
        </>
    );
}

export default Search;