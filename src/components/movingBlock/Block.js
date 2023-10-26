import React, { useEffect, useRef, useState } from "react";
import '../css/Block.css';

const Block = () => {
    const [draggingsMouse, setDraggingMouse] = useState(false)
    const [coordinatesBlock, setCoordinatesBlock] = useState({ x: 0, y: 0 })
    const ref = useRef(null)

    const hendleMouse = (e) => {
        if(draggingsMouse) {
            setCoordinatesBlock({ x : coordinatesBlock.x + e.movementX, y : coordinatesBlock.y + e.movementY})
        }
    }
        useEffect(() => {
            if (ref.current) {
              ref.current.style.left = `${coordinatesBlock.x}px`
              ref.current.style.top = `${coordinatesBlock.y}px`
            }
          }, [coordinatesBlock])


    return (
        <div
            className='block_warper'
            onMouseMove={(e) => hendleMouse(e)}
            onMouseUp={() => setDraggingMouse(false)}
            >    
            <div
                className='block'
                ref={ref}
                onMouseDown={() => setDraggingMouse(true)}
                onMouseUp={() => setDraggingMouse(false)}
            >
            </div>
        </div>
    );
}

export default Block;