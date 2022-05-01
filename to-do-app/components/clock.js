import { useSelector } from 'react-redux'
import styled from 'styled-components';

const formatTime = (time) => {
  return new Date(time).toJSON().slice(11, 19)
}


const Clock = () => {
  const lastUpdate = useSelector((state) => state.timer.lastUpdate)
  const light = useSelector((state) => state.timer.light)
  return (
    <div >
      {formatTime(lastUpdate)}
    
    </div>
  )
}

export default Clock
