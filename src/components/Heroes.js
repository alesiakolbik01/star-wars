import Card from './Card'
import Loader from './Loader';
import DatailedCard from './DatailedCard'
import '../css/Heroes.css';
import { useEffect, useState } from 'react';

function Heroes(props) {

    const [data, setDataState] = useState([]);
    const apiUrl = 'https://swapi.py4e.com/api/people';
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [term, setStateTerm] = useState('');
    const [detailedData, setDataTodetailedCard] = useState(null);
    const [isLoading, setIaLoading] = useState(false);

    const getHeroes  = (url) => {
        setIaLoading(!isLoading);
        fetch(url)
        .then (resp => resp.json())
        .then (data => {
            const people = data.results.map( (item) => {
                const films = getFilms(item.films);
                return {...item, films: films};
            })

            setDataState(people);
            setPrevPage(data.previous);
            setNextPage(data.next);
            setIaLoading(!isLoading);
         })
         .catch(error => {
            console.log(error)
            setIaLoading(!isLoading);
         })
    }

    const getFilms = (urls) => {
        const array = [];
        urls.map( 
            url => {
                fetch(url)
                .then(res => res.json())
                .then(data => array.push(data.title) );
            }
        )

        return array;
    }

    useEffect(function() { 
        getHeroes(apiUrl);
    }
    , [])

    const handleClickGetPageData = (e) => {
       switch( e.target.getAttribute('id'))
       {
        case 'next':
            getHeroes(nextPage);
            break;
        case 'previous':
            getHeroes(prevPage);
            break;
       }
    }

    const findItemIndexInUrlStr = (text) => {
        const regex = /\/\d+/g;
        const matches = text.match(regex); 
  
        return matches.length ? matches[0] : 0;
    }

    const handleInput = (e) => {
        setStateTerm(e.target.value);
    }

    useEffect( () => {
        const dataUrl = `${apiUrl}?search=${term}`;
        getHeroes(dataUrl);
    }, [term])

    const onClickCard = (data)=> {
        setDataTodetailedCard(data);
    }

    return (
        <div className='heroes-page'>
            <div>
                {
                    data.length ? <div className='btns-wrapper heroes-btns' onClick={handleClickGetPageData}>
                    <button className='lightsaber-button transparent small' disabled={!prevPage} id ='previous'>Prev</button>
                    <button className='lightsaber-button transparent small' disabled={!nextPage} id ='next'>Next</button>
                    </div> : ''
                }
            </div>
            <div className='search-bar-wrapper'> 
                <input className='search-bar' type='text' defaultValue={term} onInput={handleInput}/> 
            </div>
            {
            !data.length ? (isLoading ? <Loader/> : <div className='no-results-mes'>no results</div>) : 
                <div className='container'>
                    {
                        data.map(
                            (item, i) => {
                                return <Card 
                                key = {i + item.name}
                                data = {item}
                                index = {findItemIndexInUrlStr(item.url)}
                                path = {props.path}
                                onClickCard = {onClickCard}
                                />
                            }
                        )
                        
                    }
                    { detailedData ? <DatailedCard data = {detailedData} handleClose={onClickCard} /> : '' }
                </div>
            }
        </div>
    );
  }

  export default Heroes;