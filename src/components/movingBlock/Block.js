import React, { useEffect, useRef, useState } from "react";
import '../css/Block.css';

const Block = () => {
    const [draggingsMouse, setDraggingMouse] = useState({ x: 0, y: 0 })
    const [coordinatesBlock, setCoordinatesBlock] = useState(false)
    const ref = useRef(null)

    const hendleMouse = (e) => {
        if(coordinatesBlock) {
            setDraggingMouse({ x : draggingsMouse.x + e.movementX, y : draggingsMouse.y + e.movementY})
        }
    }
        useEffect(() => {
            if (ref.current) {
              ref.current.style.left = `${draggingsMouse.x}px`
              ref.current.style.top = `${draggingsMouse.y}px`
            }
          }, [draggingsMouse])

          
    return (
        <div
            className='block_warper'
            onMouseMove={(e) => hendleMouse(e)}
            onMouseUp={() => setCoordinatesBlock(false)}
            >    
            <div
                className='block'
                ref={ref}
                onMouseDown={() => setCoordinatesBlock(true)}
                onMouseUp={() => setCoordinatesBlock(false)}
            >
            </div>
        </div>
    );
}

export default Block;