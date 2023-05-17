import React from 'react';
export function letteranimation() {

    

    return (
        {Letters.map((letter, index) =>
            <MovingComponent
              type="fadeInFromBottom"
              duration="1300ms"
              delay="index * 400ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              {letter}
            </MovingComponent>)}
    )
}