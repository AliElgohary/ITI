import Link from 'next/link'

export default function Navbar() {
    return (
        <>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/movies">
                movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link"></p>
            </li>
          </ul>
        </>
    )
}
