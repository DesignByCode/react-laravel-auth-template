import { useRef, useEffect } from 'react'
import Headroom from 'headroom.js'

const HeadRoom = ({ children, options }) => {
  const header = useRef()

  useEffect(() => {
    const headroom = new Headroom(header.current, options)
    headroom.init()

    return () => headroom.destroy()
  }, [options])

  return <div ref={header}>{children}</div>
}

export default HeadRoom
