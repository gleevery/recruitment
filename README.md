# Gleevery Recruitment

Gleevery recruitment app is used to to check the qualifications of candidates for the position of Full Stack Developer. The application is a template that will be used to implement certain functionalities as part of the recruitment process.

## Project architecture

Project is splitted into two parts backend and frontend. Backend part is responsible for providing API for frontend part and external services. It is written in NodeJS and use Strapi open source Node.js Headless CMS and MySQL database. Frontend part is responsible for providing web application. It is written in Next.js framework.

## Requirments
To start app you will need have installed following software on your computer:
- GIT
- Docker
- NodeJS

## Recruitment tasks
Your job is to implement following tasks: 

1. Create docker-compose.yml file to provide MySQL database service in 8.0.32 version for the backend application part
2. Create Modal from scratch using [React](https://reactjs.org/) and [React Portals](https://reactjs.org/docs/portals.html) [[Demo Video](https://github.com/gleevery/recruitment/blob/master/assets/modal.mp4)]
3. Create floating label form field using [HOC](https://reactjs.org/docs/higher-order-components.html) and [Stiches](https://stitches.dev/) [[Demo Video](https://github.com/gleevery/recruitment/blob/master/assets/floating-label.mp4)]
4. Create order form splitted into 3 parts using [React Hook Form](https://react-hook-form.com/) and [Apollo](https://www.apollographql.com/) [[Demo Video](https://github.com/gleevery/recruitment/blob/master/assets/order-form.mp4)]

You can find details of each task after starting frontend part of the application at http://localhost:3100.


## Getting started

Project use Node.js 16 version. Make sure you have installed correct version. If you want you can install multiple Node.js versions using tools like [NVM](https://github.com/nvm-sh/nvm).

Clone recruitment project

```
git clone git@github.com:gleevery/recruitment.git
```

Go into project directory

```
cd recruitment
```

Start database server (**!!! WARNING !!! this command won't work before finishing first task**)

```
docker-compose up --detach
```

### Backend

Go into backend directory

```
cd backend
```

Copy and fill dotenv file with required credentials

```
cp .env.example .env
```

Install dependencies

```
yarn install
```

Start server

```
yarn develop
```

Now you can start working with backend part of the application. Strapi CMS should be availabe at http://localhost:8100/admin

### Frontend

Go into frontend directory

```
cd frontend
```

Copy and fill dotenv file with required credentials

```
cp .env.example .env.local
```

Install dependencies

```
yarn install
```

Start server

```
yarn develop
```

Now you can start working with frontend part of the application. App should be availabe at http://localhost:3100

## Project structure

```
├── backend                 // Backend part of the application
├── frontend                // Frontend part of the application
├── docker-compose.yml      // Docker compose file for local development
└── README.md               // Project description
```

## Copyright

Copyright (c) 2022-present, Gleevery Sp. z o. o.
