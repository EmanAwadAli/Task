# 🎯 Nasnav interview task

## 📌 Overview

#### 📑 In this task , I created a simple single product page using react. I implemented [this design](https://xd.adobe.com/view/2186e175-b022-45db-a2f4-c9ba6e4bde30-74d5/) in react following these rules:

- **File types should be js + jsx + scss.**

- **Folder structure:**

  - public/images for static images.
  - src/images for dynamic images (dummy data images).
  - src/services for api calls (dummy data for the test).
  - src/components for other react components.
  - src/pages for router pages.

- **Data should be passed via props or returned by an api.**
- **Should depend on two colors in css variables ( --primary-color , --secondary-color ).**
- **Should use lazy loading at least at one component.**
- **Shouldn't use hooks.**
- **Shouldn't use redux.**
- **The only required functionality is “add to cart”.**
  - add to cart functionality can be divided in 2 cases:
    - **Empty cart:**
      - Cart icon should have a badge containing 0 when cart is empty
      - Clicking on the top cart icon should show the empty cart dropdown
    - **Non empty cart:**
      - Cart icon should have a badge containing the number of cart items
      - Clicking on the top cart icon should show cart items dropdown
    - **In both cases Pressing the "Add to cart" button should increment the items at cart by quantity.**

## 📥 Installation

In order to run this project you will need to install [node.js](https://nodejs.org/en/) globally on your device after that :

###### Clone Project

```
git clone git@github.com:EmanAwadAli/NasNav-Task.git
```

###### Install npm packages

```
npm i
```

###### Add Bootstrap

```
npm i bootstrap
```

###### Add sass

```
npm i sass
```

###### Add Slick Slider

```
npm i react-slick --save
```
###### Add Swiper Slider

```
npm i swiper
```
###### Start Your Project

=======
###### Start Your Project
```
npm start
```
**👉 LocalHost Pages Access Link** :  ```http://localhost:3000/Task```

**👉 GitHub Pages Access Link** : [**NasNav Interview Task**](https://emanawadali.github.io/Task)

