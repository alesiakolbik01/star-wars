import '../css/Home.css'

function Home (props) {

    function handleClickButton(e) {
        props.handleChangeUserSide(e.target.getAttribute('id'));
    }

    return <div className={props.side ? `home-bg ${props.side}` : 'home-bg'}>
       
        {
           !props.side ?
           <>
                <h1 className='main-title animate-text'>Are you</h1>
                <div className='btns-wrapper' onClick={handleClickButton}> 
                    <button className="lightsaber-button blue" id='light' >Join the Light Side</button>
                    <button className="lightsaber-button red" id='dark' >Join the Dark Side</button>
                </div>
            </>
            :
            <>
                <h1 className={`main-title ${props.side? props.side : ''}`}>{`You are in ${props.side} side`}</h1>
                <button className='lightsaber-button white' id='reset' onClick={handleClickButton}>Change side</button>
            </>
        }

    </div>
}

export default Home;