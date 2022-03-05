const apiUrl = {
  /* Users */
  USERS_GET_ALL: "/api/Users/GetUsers",
  USERS_GET_ID:"/api/Users/GetUser/{id}",
  USER_CREATE:"/api/Users/PostUser",
  USER_UPDATE:"/api/Users/PutUser/{id}",
  USER_DELETE:'/api/Users/DeleteUser/{id}',


  /* Shops */
  SHOPS_GET_ALL: "/api/Shops/GetShops",
  SHOP_CREATE:"/api/Shops/PostShop",
  

  /* Seats */
  SEATS_GET_ALL: "/api/Seats/GetSeats",
  SEATS_GET_BY_ID:"/api/Seats/GetSeats/{id}",
  SEATS_UPDATE:"/api/Seats/PutSeats/{id}",
  SEATS_CREATE:"/api/Seats/PostSeats",
  SEATS_DELETE:"/api/Seats/DeleteSeats/{id}",

  /* Reviews */
  REVIEWS_GET_ALL: "/api/Reviews/GetReviews",
  REVIEWS_GET_BY_ID:"/api​/Reviews​/GetReview​/{id}",
  REVIEWS_UPDATE:"/api/Reviews/PutReview/{id}",
  REVIEWS_CREATE:"/api/Reviews/PostReview",
  REVIEWS_DELETE:"​/api​/Reviews​/DeleteReview​/{id}",

  /* Products */
  PRODUCTS_GET_ALL: "/api/Products/GetProducts",
  PRODUCTS_GET_BY_ID:" ​/api​/Products​/GetProduct​/{id}",
  PRODUCTS_UPDATE:"/api​/Products​/PutProduct​/{id}",
  PRODUCTS_CREATE:"/api/Products/PostProduct",
  PRODUCTS_DELETE:"​/api​/Products​/DeleteProduct​/{id}",


  /* Movies */
  MOVIES_GET_ALL: "/api/Movies/GetMovies",
  MOVIES_GET_BY_ID:"/api/Movies/GetMovies/{id}",
  MOVIES_UPDATE:"/api/Movies/PutMovies/{id}",
  MOVIES_CREATE:"/api/Movies/PostMovies",
  MOVIES_DELETE:"/api/Movies/DeleteMovies/{id}",
  // *MovieToday
  MOVIETODAY_GET_ALL:"/api/MoviesTodays/GetMoviesToday",
  MOVIETODAY_GET_BY_ID:"/api/MoviesTodays/GetMoviesToday/{id}",
  MOVIETODAY_UPDATE:"/api/MoviesTodays/PutMoviesToday/{id}",
  MOVIETODAY_CREATE:"/api/MoviesTodays/PostMoviesToday",
  MOVIETODAY_DELETE:"/api/MoviesTodays/DeleteMoviesToday/{id}",
  
  /* Genres */
  GENRES_GET_ALL: "/api/Genres/GetGenres",
  GENRES_GET_BY_ID:"/api/Genres/GetGenre/{id}",
  GENRES_UPDATE:"/api/Genres/PutGenre/{id}",
  GENRES_CREATE:"/api/Genres/PostGenre",
  GENRES_DALETE:"/api/Genres/DeleteGenre/{id}",

  /* Galleries */
  GALLERIES_GET_ALL: "/api/Galleries/GetGalleries",
  GALLERIES_GET_BY_ID:"/api/Galleries/GetGallery/{id}",
  GALLERIES_UPDATE:"/api​/Galleries​/PutGallery​/{id}",
  GALLERIES_CREATE:"/api/Galleries/PostGallery",
  GALLERIES_DELETE:"/api/Galleries/DeleteGallery/{id}",

  /* Feedbacks */
  FEEDBACKS_GET_ALL: "/api/Feedbacks/GetFeedbacks",
  FEEDBACKS_GET_BY_ID:"/api/Feedbacks/GetFeedback/{id}",
  FEEDBACKS_UPDATE:"/api/Feedbacks/PutFeedback/{id}",
  FEEDBACKS_CREATE:"​/api​/Feedbacks​/PostFeedback",
  FEEDBACKS_DELETE:"​/api​/Feedbacks​/DeleteFeedback​/{id}",

  /* Departments */
  DEPARTMENTS_GET_ALL: "/api/Departments/GetDepartments",
  DEPARTMENTS_GET_BY_ID:"/api/Departments/GetDepartment/{id}",
  DEPARTMENTS_UPDATE:"/api/Departments/PutDepartment/{id}",
  DEPARTMENTS_CREATE:"/api/Departments/PostDepartment",
  DEPARTMENTS_DELETE:"​/api​/Departments​/DeleteDepartment​/{id}",


  /* Comments */
  COMMENTS_GET_ALL: "/api/Comments/GetComments",
  COMMENTS_GET_BY_ID:"​/api​/Comments​/GetComment​/{id}",
  COMMENTS_UPDATE:"/api/Comments/PutComment/{id}",
  COMMENTS_CREATE:"/api/Comments/PostComment",
  COMMENTS_DELETE:"/api​/Comments​/DeleteComment​/{id}",

  /* Categories */
  CATEGORIES_GET_ALL: "/api/Categories/GetCategories",
  CATEGORIES_BY_ID:"/api/Categories/GetCategory/{id}",
  CATEGORIES_UPDATE:"/api/Categories/PutCategory/{id}",
  CATEGORY_CREATE:"/api/Categories/PostCategory",
  CATEGORY_DELETE:"/api/Categories/DeleteCategory/{id}",

  /* Bookings */
  BOOKINGS_GET_ALL: "/api/Bookings/GetBookings",
};
export default apiUrl;
