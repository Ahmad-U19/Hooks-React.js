import React, {useState} from 'react'
import MouseHooks from './MouseHooks'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <MouseHooks />}
    </div>
  )
}

export default MouseContainer