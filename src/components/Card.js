

function Card (props) {

    const handleClick = () => {
        props.onClickCard({...props.data, image: image});
    }

    const image = `${props.path}${props.index}.jpg`;

    return (
        <article className="card" onClick={handleClick}>
            <div className="tc">
            <img src = {image} alt=""/>
            <h1 className="f3 mb2">{ props.data.name }</h1>
        </div>
      </article>
    )
}

export default Card;



