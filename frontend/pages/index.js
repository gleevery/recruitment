import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gleevery Recruitment</title>
        <meta name="description" content="Gleevery recruitment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="col-6 ms-auto me-auto mt-10">
          <h1 className="mb-8">Recruitment tasks</h1>
          <ol>
            <li>
              <Link href="/docker-compose">
                <a>Docker compose file</a>
              </Link>
            </li>
            <li>
              <Link href="/modal">
                <a>Modal Component</a>
              </Link>
            </li>
            <li>
              <Link href="/floating">
                <a>TextFieldFloating Component</a>
              </Link>
            </li>
            <li>
              <Link href="/form">
                <a>Order form</a>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
