import Head from "next/head";
import Link from "next/link";

export default function FormPage() {
  return (
    <>
      <Head>
        <title>Gleevery Recruitment</title>
        <meta name="description" content="Gleevery recruitment app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="col-6 ms-auto me-auto mt-10 mb-8">
          <h1 className="mb-8">Order form</h1>
          <p>
            Create order form splitted into 3 steps using{" "}
            <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">
              React Hook Form
            </a>{" "}
            library. The data from the form save into Strapi CMS using GraphQL and{" "}
            <a href="https://www.apollographql.com/" target="_blank" rel="noreferrer">
              Apollo
            </a>{" "}
            library.
          </p>
          <p>Form must be splitted into 3 steps</p>
          <ul>
            <li>Personal data step</li>
            <li>Adress step</li>
            <li>Summary step</li>
          </ul>
          <p>The data from the form nedd to be saved into the Strapi CMS after each step.</p>
          <ol>
            <li className="mb-4">
              In the personal data step, after sending the form, an order need to be created and the following fields
              needs to be saved.
              <ul className="mt-2">
                <li>First name</li>
                <li>Last name</li>
                <li>Phone</li>
                <li>E-mail address</li>
              </ul>
              <p className="mt-2">
                Additionally, after creating the order, generate 8-digit unique order code and save it into code field.
              </p>
            </li>
            <li className="mb-4">
              In the address step, after sending the form, the following fields needs to be saved.
              <ul className="mt-2">
                <li>Street</li>
                <li>House number</li>
                <li>Apartment number</li>
                <li>Zip Code</li>
                <li>City</li>
              </ul>
            </li>
            <li>
              In the summary step, after sending the form, the acceptance fields of the terms and services needs to be
              saved.
            </li>
          </ol>
          <p>
            You should be able to navigate between the steps of the order with "Back" and "Next" buttons or via the
            links:
          </p>
          <ul>
            <li>
              <tt>/form/[code]/personal-data</tt>
            </li>
            <li>
              <tt>/form/[code]/address</tt>
            </li>
            <li>
              <tt>/form/[code]/summary</tt>
            </li>
          </ul>
          <p>
            Where <tt>[code]</tt> is the unique order code. When the order does not exist, the first step will have a
            link <tt>/form/personal-data</tt>
          </p>
          <p>After placing the order and going to the success page, the above links should lead to a 404 page.</p>
          <p>All fields in the form are to be mandatory.</p>

          <Link href="#">
            <a className="btn btn-primary py-3 px-6">Go to form</a>
          </Link>
        </div>
      </div>
    </>
  );
}
