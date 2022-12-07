import React, {useState} from 'react';

const SimpleHooks = () => {
  const [val, setVal] = useState('');
  const [updateText, setUpdateText] = useState('');

  const handleClick = () => {
    setUpdateText(`Anda menginput ${val}`)
  }

  const handleChange = (e: any) => {
    setVal(e.target.value)
  }

    return (
        <>
            <div style={{margin: '50px'}}>
                <input type="text" value={val} onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}>Tes Hooks</button>
            </div>

            <p style={{margin: '50px'}}>{updateText}</p>
        </>
    )

}

export default SimpleHooks;