# Fireflies Cine

Fireflires Cine, é um sistema web para venda de ingressos e informações sobre o horário dos filmes.


## Arqutetura do sistema:

    ├───Backend
    │   └───src
    │       ├───config
    │       ├───controllers
    │       ├───middlewares
    │       ├───models
    │       └───routes
    ├───Frontend

## Tecnologias e frameworks utilizados

**Backend:**

- Node.js
- Bcryptjs
- bcrypt
- jsonwebtoken
- mongoose

**Frontend:**

- Em breve...


## Usuários do sistema

- Administrador
- Usuário Autenticado
- Usuários não Autenticado

## Entidades, Tabelas ou Coleções utilizadas

- Banco de dado utilizado: MongoDB

OperaÃ§Ãµes implementadas para cada entidade

| Entidade| Create | Read | Update | Delete |
| --- | --- | --- | --- | --- |
| Session    | X |   | x | X |
| Movies     | X |   | X | X |
| User       | X | x |   | x |

## Rotas da API REST utilizadas

>| User | URL |
>| ---  | --- |
>| GET | /api/v1/userProfile|
>| POST | 8081/api/v1/register |
>| POST | 8081/api/v1/Login |
>| POST | 8081/api/v1/PostbuyTicket |

>| Movie | URL |
>| ---  | --- |
>| GET | /api/v1/GetAllMovies|
>| GET | 8081/api/v1/GetMovieByName |
>| POST | 8081/api/v1/LCreateNewMovie |
>| DELETE | 8081/api/v1/DeleteMovie |

>| Session | URL |
>| ---  | --- |
>| GET | /api/v1/CreateNewSession|
