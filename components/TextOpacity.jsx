
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import "@/scss/TextOpacity.scss";

function TextOpacity() {
    const element = useRef(null); 
    const { scrollYProgress } = useScroll({
      target: element,
      offset: ["start end", " start start"]
    });
  
    const color = useTransform(scrollYProgress, [0, 0.7, 1], [
        'rgba(128, 128, 128, 0.1)', 
        'rgba(128, 128, 128, 0.7)', 
        'rgba(255, 255, 255, 1)'   
    ]);

    return ( 
      <motion.p 
      ref={element} 
      className="paragraph"
      style={{
        opacity:scrollYProgress,
        color: color
    }}>

Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual
    </motion.p>
  );
}

export default TextOpacity