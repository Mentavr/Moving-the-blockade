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
        // console.log('start coordinatesMouse', coordinatesMouse)
    }
        useEffect(() => {
            if (ref.current) {
              ref.current.style.left = `${draggingsMouse.x}px`
              ref.current.style.top = `${draggingsMouse.y}px`
            }
          }, [draggingsMouse])

    // const hendleDown = (e) => {
    //     console.log('start', e)
    //     setCoordinatesBlock({x: draggingsMouse.x, y: draggingsMouse.y})
    //     console.log('start coordinatesBlock', coordinatesBlock)
    // }

    // const hendleUp = (e) => {
    //     console.log('stop', e)
    //     setCoordinatesBlock({x: draggingsMouse.x, y: draggingsMouse.y})
    //     console.log('stop coordinatesBlock', coordinatesBlock)
    // }

    // const styleBlock = () => {
    //     if (coordinatesBlock) return { left: draggingsMouse.x, top: draggingsMouse.y }
    // }

    // console.log('ref', ref.current)

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