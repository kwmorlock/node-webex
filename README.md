# node-webex

### Developer
---
|                                           [K.W.Morlock](https://github.com/kwmorlock)                    |
| :-------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/60933227?s=400&u=f59ad5c61c259364c66bac0a68407b138024c357&v=4" width = "190" />](https://github.com/kwmorlock) |
|                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kwmorlock)                   |
|                                                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kwmorlock/)    |
---

## Commits
| Prefix | Meaning |
| ------- | --- |
| Cle | Clean up code or sorting files|
| Com | Comments added to code |
| Cre | Create a new file, database etc |
| Dep | Dependency installed|
| Fix | Fix errors or bugs |
| Rea | Read me update |
| Set | Setup a new function etc |
| Sty | Styling and design |
| Upd | Update code for improved or more relevant use |

# Register / Login Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | /api/users/auth/register| register as a new user |
| POST | /api/users/auth/login | login as an existing user |

# Register / Login
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| username | string | yes | yes | users username |
| password | string | yes | no | users password |
| email | string | no | yes | users email |

# Info Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | api/info | get all info for all users (needs to be logged in) |
| GET | api/info/:id | get info with specific id |
| GET | api/info/users/:id | get all info from specific user id |
| POST | api/info/:id | add info from user |
| PUT | api/info/:id | edit specific info for user |
| DELETE | api/info/:id | delete specific info for user |

# Info
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | info id |
| title | string | yes | no | info title|
| description | string | yes | no | info |
| usersId | integer | yes | no | users id |