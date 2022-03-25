import { Link } from "react-router-dom";
import { Form } from "./components/Form";
import { Layout } from "./components/Layout";
import './App.css';

export function LogIn() {
  return (
    <div className='page'>
      <Layout title='Innskráning'>
        <Form></Form>
        <Link to='/' className='home'>Til Baka</Link>
      </Layout>
    </div>
  )
}