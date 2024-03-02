
# NxtTrends A Modern Ecommerce Web_App

In This Project I have builed an ecommerce web_app.

## Video Explaination 
https://www.loom.com/share/de43e58f981644679bcb123e9e1d4748?sid=f74ea3fa-3daf-4f32-b9e5-10e5ba284652



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

#Login_Page_View

![App Screenshot]![login](https://github.com/saurabh29r/NxtTrends-A-Morden-Ecommerce-Web_App/assets/48233777/4c28c221-b7da-420f-9685-309d3d396a1d)

#Home_Page_view

![homepage](https://github.com/saurabh29r/NxtTrends-A-Morden-Ecommerce-Web_App/assets/48233777/8bae3925-1b92-40d9-980c-b197834ab2e9)

#Product_page_view

![Prouctspage](https://github.com/saurabh29r/NxtTrends-A-Morden-Ecommerce-Web_App/assets/48233777/c31609cf-4c82-42cb-bb31-756c450acedc)

#product_detailed_view
![Product_details_page](https://github.com/saurabh29r/NxtTrends-A-Morden-Ecommerce-Web_App/assets/48233777/b1a414c0-dbf8-4d11-bcc2-d67399bd62b6)

#Add_to_cart_page_view

![addtocartpage](https://github.com/saurabh29r/NxtTrends-A-Morden-Ecommerce-Web_App/assets/48233777/a9517fe1-0bdc-479a-bc6a-ebaa4add88a4)

