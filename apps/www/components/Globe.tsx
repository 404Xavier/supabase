import career from '../data/career.json'
import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

const Globe = () => {
  const canvasRef = useRef<any>()

  useEffect(() => {
    let rotation: number = 0
    let width: number = 0
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
    window.addEventListener('resize', onResize)
    onResize()
    const cobe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      scale: 1,
      mapSamples: 20000,
      mapBrightness: 4,
      baseColor: [1, 1, 1],
      markerColor: [62 / 255, 207 / 255, 142 / 255],
      glowColor: [62 / 255, 207 / 255, 142 / 255],
      markers: [
        { location: [53.4084, 2.9916], size: 0.1 },
        { location: [1.3521, 103.8198], size: 0.1 },
        { location: [-40.9006, 174.886], size: 0.1 },
        { location: [14.0583, 108.2772], size: 0.1 },
        { location: [37.7749, -122.4194], size: 0.1 },
        { location: [41.3874, 2.1686], size: 0.1 },
        { location: [49.2827, -123.1207], size: 0.1 },
        { location: [-36.9848, 143.3906], size: 0.1 },
        { location: [42.3601, -71.0589], size: 0.1 },
        { location: [52.52, 13.405], size: 0.1 },
        { location: [33.749, -84.388], size: 0.1 },
        { location: [35.6762, 139.6503], size: 0.1 },
        { location: [9.19, -75.0152], size: 0.1 },
        { location: [-25.2521, -52.0215], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = rotation
        rotation += 0.005
        state.width = width * 2
        state.height = width * 2
      },
    })
    setTimeout(() => (canvasRef.current.style.opacity = '1'))
    return () => cobe.destroy()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
        borderRadius: '100%',
      }}
    />
  )
}

export default Globe
