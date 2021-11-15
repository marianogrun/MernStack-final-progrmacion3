Para levantar el proyecto localmente:

Cambiar el nombre del cluster en .env dentro del backend : ATLAS_URI = mongodb+srv://admin:admin@cluster0.hoxkc.mongodb.net/test

Para iniciar el server: cd backend -> nodemon server

Para iniciar el front: en otra terminal, desde el root del proyecto: npm start

La página principal muestra el route "/" con un dropdown que contiene los usuarios alojados en la base de datos. Para crear un nuevo usuario ir a 'Sign Up': completar los campos 'username', 'Tipo de cuenta' y 'Tipo de Cliente'. 
Este evento nos traerá de nuevo a la pantalla de 'Sign In' donde el nuevo usuario aparecerá como opción para loguearse en el dropdown. 

Al ingresar con un user se ve solo los datos del user logueado: Username, Nro de cuenta, Saldo, CBU, Accciones (Ver movimientos, Depositar, Extraer).

Ver Movimientos: si es un usuario nuevo mostrará una lista vacía. Si tiene movimientos previos muestra el tipo de movimiento: Monto, el estado de cuenta luego de realizado el movimiento exitosamente y la fecha del mismo. Para volver atrás presionar botón "Accounts".

Depositar: Formulario que pide a depositar (siempre números positivos). Una vez realizado el movimiento con éxito se vuelve a los datos del cliente que deberá mostrar el saldo actualizado. A su vez este nuevo movimiento se podrá ver en el listado ingresando a 'Ver movimientos'. 

Extraer: Formulario que pide monto a Extraer (siempre números positivos). Una vez realizado el movimiento con éxito se vuelve a los datos del cliente que deberá mostrar el saldo actualizado. A su vez este nuevo movimiento se podrá ver en el listado ingresando a 'Ver movimientos'. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
