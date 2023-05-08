import { useEffect } from 'react';
import '../css/DatailedCard.css';

const DatailedCard = (props) => {
    const {image, name, birth_year, eye_color, gender, hair_color, height, mass, skin_color, films} = props.data;

    const handleCloseThis = () => {
        props.handleClose(null);
    }

    useEffect(
        () => {
                document.body.style.overflow = 'hidden';

                return () => { 
                    document.body.style.overflow = 'auto';
                }
        }, []
    )

    return (
        <div className="detailed-card-wrapper modal">
            <div className="detailed-card">
                <button className='lightsaber-button transparent small' onClick={handleCloseThis}>go back</button>
                <img src={image} alt="hero"/>
                <div>
                    <h4 className="f9 f4-ns">{name}</h4>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Birth:</dt>
                        <dd className="dib ml1 gray">{birth_year}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Height:</dt>
                        <dd className="dib ml1 gray">{height}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Mass:</dt>
                        <dd className="dib ml1 gray">{mass}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Gender:</dt>
                        <dd className="dib ml1 gray">{gender}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Skin color:</dt>
                        <dd className="dib ml1 gray">{skin_color}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Eye color:</dt>
                        <dd className="dib ml1 gray">{eye_color}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Hair color:</dt>
                        <dd className="dib ml1 gray">{hair_color}</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Films:</dt>
                        <dd className="dib ml1 gray">
                            {
                                films.join(', ')
                            }
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default DatailedCard;