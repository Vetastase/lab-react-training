const NumbersTable = ({limit}) => {

    const numbersArray = Array.from({ length: limit }, (value, i) => i + 1);


    return (<div className="number-container">

        {numbersArray.map(number => {
            return <div key={number} className="number">
                {number}
            </div>
        })}

    </div>)

}

export default NumbersTable