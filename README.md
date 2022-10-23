![This is header image](/public/favicon.png)

# Todo app

### Table of Contents
* [Prerequisites](#Prerequisites)
* [Tech Stack](#Tech-Stack)
* [Getting Started](#Getting-Started)
* [Project Structure](#Project-Structure)
* [Deployment](#Deployment)
* [Resources](#Resources)

#
### Prerequisites

* <img src="readme/nodejs.png" width="25" style="top: 8px" /> *Node JS @16.X and up*
* <img src="readme/npm.png" width="25" style="top: 8px" /> *npm @8 and up*
* <img src="readme/typescript.png" width="25" style="top: 8px" /> *typescript @4.8.4 and up*

#
### Tech Stack

* <img src="readme/react.png" width="25" style="top: 8px" /> *React @18.2.0 - front-end framework*
* <img src="readme/styled-components.png" width="25" style="top: 8px" /> *Styled-components @5.3.6 - visual primitives for the component age*

#
### Getting Started
1. First of all you need to clone app repository from github:
```
git clone https://github.com/nikanoza/todo-app-react.git
```
2. Next step requires install all the dependencies.

```
npm install
```
3. To see project in action 

```
npm start
```

#
### Project Structure

```
|--- src
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- svg # svg components folder
- package.json     # dependency manager configurations
```
#
### Deployment
Before every deployment you need to create build file.
```
npm run build
```
after this you can use this file to deploy project on server.

#
### Resources
* [figma](https://www.figma.com/file/4oLHA5cl4VWGxgg4Ev0aP1/todo-app?node-id=0%3A458).
* [challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).