import styles from '@/styles/Home.module.css'
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'

export async function getServerSideProps()
{
  const { data } = await axios.get('https://api.rwnjs.com/04/users')

  return {
    props: {
      users: data
    }
  }
}

export default function Home({ users })
{
  return (
    <ul>
      {
        users.map((user) =>
          <li key={user.id}>
            <Link
              href={`/users/${user.username}`}
              passHref
            >
              <a>
                {user.username}
              </a>
            </Link>
          </li>
        )
      }
    </ul>
  )
}
