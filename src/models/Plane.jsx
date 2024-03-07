import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import planeScene from "../assets/3d/plane.glb";
const Plane = ({isRotating,...props}) => {
    const ref = useRef();
    const {scene,animations}=useGLTF(planeScene);
    const {actions} = useAnimations(animations,ref);
    useEffect(()=>{
        actions["Take 001"].play();
    })
  return (
    <mesh {...props} ref= {ref}>
        <primitive object={scene}/>
    </mesh>
    
    )
}

export default Plane
