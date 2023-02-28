import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'

export async function getServerSideProps()
{
  // The server side code
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
