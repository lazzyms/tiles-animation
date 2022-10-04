function Box({index, state, handleClick}) {
    return ( <>
    <button className={state ? 'box clicked' : 'box'} onClick={() => handleClick(index)}></button>
    </> );
}

export default Box;