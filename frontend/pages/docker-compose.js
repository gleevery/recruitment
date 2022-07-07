export default function DockerCompose() {
  return (
    <>
      <div className="container">
        <div className="col-6 ms-auto me-auto mt-10">
          <h1 className="mb-8">Docker Compose</h1>
          <p>
            One of the recruitment task need to save data from the form to the database. We will be using Strapi CMS as
            our database and API provider. Strapi CMS to work properly needs database. Create docker-compose.yml in the
            root of the project directory with MySQL 8 service and configure Strapi CMS to work with this service.
          </p>
          <h2>Project structure</h2>
          <pre>
            ├── backend <br />
            ├── frontend <br />
            ├── README.md <br />
            └── docker-compose.yml // Create this file
          </pre>
        </div>
      </div>
    </>
  );
}
