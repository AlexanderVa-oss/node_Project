# My First NodeJs project.

> [Link to Documentatiuon](https://documenter.getpostman.com/view/32178826/2sA2xe3ZNx)

* The project was made according to the requirements of the educational institution HackerU.
  [Project Module](./public/pdf/ProjectModule.pdf)

#### Bonuses

* bizNumber Update for admin only

## Project Description

This project serves as a robust backend solution engineered to manage and control user profiles and card details within a database framework. It's designed with a focus on security, data integrity, and seamless interaction between the server and client-side applications.

### Core Technologies and Libraries

* **Logger & Chalk:** Utilized for advanced logging capabilities, enhancing the debugging process with color-coded outputs for better clarity and monitoring efficiency.
* **Cors:** Ensures secure cross-origin requests, facilitating the backend's ability to interact with various web clients without compromising security.
* **JSON & Joi:** The combination of JSON for data formatting and Joi for validation enforces strict data integrity checks, ensuring that all data transactions are precise and secure.
* **Bcryptjs:** Employs cutting-edge hashing techniques to encrypt user passwords, bolstering the security framework against unauthorized access.
* **Json Web Token (JWT):** Implements token-based authentication, securing sessions and providing a reliable verification mechanism for user interactions.
* **Mongoose:** Offers a streamlined, schema-based solution to model your application data. It integrates seamlessly with MongoDB, supporting both local and Atlas cloud database environments for versatile data management.

### Deployment and Environment

The project is configured to operate within two distinct environments: a local setup for development and testing, and an Atlas environment for cloud-based deployment. This dual-environment setup allows for flexible development and testing processes, ensuring the application is robust and reliable across different deployment scenarios.

### Integration with Frontend

In addition to its backend capabilities, this project is designed to work seamlessly with a React-based frontend, establishing a full-stack application ecosystem. The integration facilitates a dynamic and responsive user interface, interacting effortlessly with the backend services to provide a comprehensive user experience.

### Conclusion

By leveraging a carefully selected stack of technologies and libraries, this project stands as a testament to modern backend development practices. It not only addresses the fundamental requirements of user and data management but also emphasizes security, performance, and cross-platform compatibility. The symbiotic relationship with its React frontend counterpart underscores a commitment to delivering a cohesive and intuitive full-stack application.

## Instructions for addresses

### Url

> `http://localhost:3030/api`

### Users end points


|     URl     | Method |         Authorization         |            Action            | Notice       | Return         |
| :----------: | ------ | :---------------------------: | :---------------------------: | ------------ | -------------- |
|    /users    | post   |              all              |         Register user         | Unique email |                |
| /users/login | post   |              all              |             Login             |              | Token          |
|    /users    | get    |             admin             |        Get  all users        |              | Array of users |
|  /users/:id  | get    | Registered user<br />or admin |           Get user           |              | user           |
|  /users/:id  | put    |        Registered user        |          Edit  user          |              | user           |
|  /users/:id  | patch  |         Register user         | Change<br />isBusiness status |              | user           |
|  /users/:id  | delete | Registered user<br />or admin |          Delete user          |              | Delete user    |

### Cards end points


| URL             | Method |     Authorization     | Action            | return         |
| --------------- | :----: | :-------------------: | ----------------- | -------------- |
| /cards          |  get  |          all          | Get all cards     |                |
| /cards/myCards  |  get  |    Registered user    | Get user cards    | Array of cards |
| /cards/:id      |  get  |          all          | Get card          | Card           |
| /cards          |  post  |     Bussines user     | Create new card   | card           |
| /cards/:id      |  put  |     Created user     | Edit Card         | card           |
| /cards/:id      | patch |    Registered user    | Like card         | card           |
| `/bisuness/:id` | patch |         Admin         | Change BizzNumber | card           |
| /cards/:id      | delete | Created user or admin | Delete card       | Delete card    |

## For correct work

1. Write in console " npm i ".
2. Change name " env.txt " to " .env ".
3. Create you private key in .env -> TOKEN_PRIVATE_KEY.
4. At MONGODB_CONNECTION_STR in .env insert you Atlas URL.
5. If you want conect to localhost, uncoment  `# MONGODB_CONNECTION_STR="mongodb://localhost:27017/"`
