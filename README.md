
# NxtTrends A Morden Ecommerce Web_App

In This Project I have builed an ecommerce web_app.



## Tech Stack

**Frontend:** React, Bootstrap, js-cookies,React-icons,React-tostify,React-router v-6,react-lazy-laod.

**Backend:** Nodejs, npm.

**Enviroment:** React+Vite.







## Features
##some login and logout features using Jwt_token.

- Used json_web_token(jwt_token) for authentication and authorization.
- Strored the jwt_token in cookies.
- When user logged in , jwt_token created and user can navigate to different pages.
- When User clicks on log out , The jwt_token deleted and user redirected to login page.
- Used secured path , with the help of react-router v-6, created a protected path. As if Unauthorized user try to access any page in URL , they will redirect to login page.
- If a user logged in , He can't access the login page without logout.

##Product and Product-detail_view features
- Used protected API. when a authorized user tries to get the API.
- only then API response as API authorization mechanism based on jwt_token.
- Card will be display when a user click on proudct page.
- If a user click on particular card. they got redirected to product details page.
- In product_details page prodcts details are available and on bottom some similar products are also available.
- Here user can add that particular product into cart.
- Counter is also available for increasing and decreasing the qunatity.

##Add to Cart page features 
- In this page user can see all the items he added in cart.
- if user clicked multiple times on the same product for add to cart. that product only appears once with increased qunatity.
- user can remove the item by remove button.
- Sub total dynamically increase and decrease based on the qunatity and price.




## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Run Locally

Clone the project

```bash
  https://github.com/saurabh29r/NxtTrends-A-Morden-Ecommerce-Web_App.git
```

Go to the project directory

```bash
  cd NXTTRENDSAPP
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Screenshots

![App Screenshot]

