import Layout from '../layout/Layout'
import Adds from '../components/Adds/Adds'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/signup')
    }, 15000)
  }, [])

  return <Layout>
    <Adds />
  </Layout>
}

export default AddsPage
