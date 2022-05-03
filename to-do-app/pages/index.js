
import Link from 'next/link'
import Examples from '../components/examples'
const Index = () => {

  return (
    <>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  )
}

export default Index
