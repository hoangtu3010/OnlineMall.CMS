const apiUrl = {
    /* Authentication */
    AUTH_LOGIN: "/api/AuthManagerment/Login",
    AUTH_REGISTER: "/api/AuthManagerment/Register",
    AUTH_USER: "/api/AuthManagerment/GetCurrentUser",

    /* Upload File */
    UPLOAD_FILE: "/api/UploadFile/SaveImage",

    /* Users */
    USERS_GET_ALL: "/api/Users/GetUsers",
    USERS_GET_BY_ID: "/api/Users/GetUser/",
    USER_CREATE: "/api/Users/PostUser",
    USER_UPDATE: "/api/Users/PutUser/",
    USER_DELETE: "/api/Users/DeleteUser/",

    /* Shops */
    SHOPS_GET_ALL: "/api/Shops/GetShops",
    SHOP_GET_BY_ID: "/api/Shops/GetShop/",
    SHOP_CREATE: "/api/Shops/PostShop",
    SHOP_UPDATE: "/api/Shops/PutShop/",
    SHOP_DELETE: "/api/Shops/DeleteShop/",

    /* Seats */
    SEATS_GET_ALL: "/api/Seats/GetSeats",
    SEATS_GET_BY_ID: "/api/Seats/GetSeats/",
    SEATS_UPDATE: "/api/Seats/PutSeats/",
    SEATS_CREATE: "/api/Seats/PostSeats",
    SEATS_DELETE: "/api/Seats/DeleteSeats/",

    /* Reviews */
    REVIEWS_GET_ALL: "/api/Reviews/GetReviews",
    REVIEWS_GET_BY_ID: "/api/Reviews/GetReview/",
    REVIEWS_UPDATE: "/api/Reviews/PutReview/",
    REVIEWS_CREATE: "/api/Reviews/PostReview",
    REVIEWS_DELETE: "/api/Reviews/DeleteReview/",

    /* Products */
    PRODUCTS_GET_ALL: "/api/Products/GetProducts",
    PRODUCTS_GET_BY_ID: "/api/Products/GetProduct/",
    PRODUCTS_UPDATE: "/api/Products/PutProduct/",
    PRODUCTS_CREATE: "/api/Products/PostProduct",
    PRODUCTS_DELETE: "​/api/Products/DeleteProduct/",

    /* Movies */
    MOVIES_GET_ALL: "/api/Movies/GetMovies",
    MOVIES_GET_BY_ID: "/api/Movies/GetMovies/",
    MOVIES_UPDATE: "/api/Movies/PutMovies/",
    MOVIES_CREATE: "/api/Movies/PostMovies",
    MOVIES_DELETE: "/api/Movies/DeleteMovies/",
    // *MovieToday
    MOVIES_TODAY_GET_ALL: "/api/MoviesTodays/GetMoviesToday",
    MOVIES_TODAY_GET_BY_ID: "/api/MoviesTodays/GetMoviesToday/",
    MOVIES_TODAY_UPDATE: "/api/MoviesTodays/PutMoviesToday/",
    MOVIES_TODAY_CREATE: "/api/MoviesTodays/PostMoviesToday",
    MOVIES_TODAY_DELETE: "/api/MoviesTodays/DeleteMoviesToday/",

    /* Genres */
    GENRES_GET_ALL: "/api/Genres/GetGenres",
    GENRES_GET_BY_ID: "/api/Genres/GetGenre/",
    GENRES_UPDATE: "/api/Genres/PutGenre/",
    GENRES_CREATE: "/api/Genres/PostGenre",
    GENRES_DELETE: "/api/Genres/DeleteGenre/",

    /* Galleries */
    GALLERIES_GET_ALL: "/api/Galleries/GetGalleries",
    GALLERIES_GET_BY_ID: "/api/Galleries/GetGallery/",
    GALLERIES_UPDATE: "/api/Galleries/PutGallery/",
    GALLERIES_CREATE: "/api/Galleries/PostGallery",
    GALLERIES_DELETE: "/api/Galleries/DeleteGallery/",

    /* Feedbacks */
    FEEDBACKS_GET_ALL: "/api/Feedbacks/GetFeedbacks",
    FEEDBACKS_GET_BY_ID: "/api/Feedbacks/GetFeedback/",
    FEEDBACKS_UPDATE: "/api/Feedbacks/PutFeedback/",
    FEEDBACKS_CREATE: "/api/Feedbacks/PostFeedback",
    FEEDBACKS_DELETE: "/api/Feedbacks/DeleteFeedback/",

    /* Departments */
    DEPARTMENTS_GET_ALL: "/api/Departments/GetDepartments",
    DEPARTMENTS_GET_BY_ID: "/api/Departments/GetDepartment/",
    DEPARTMENTS_UPDATE: "/api/Departments/PutDepartment/",
    DEPARTMENTS_CREATE: "/api/Departments/PostDepartment",
    DEPARTMENTS_DELETE: "/api/Departments/DeleteDepartment/",

    /* Comments */
    COMMENTS_GET_ALL: "/api/Comments/GetComments",
    COMMENTS_GET_BY_ID: "/api/Comments/GetComment/",
    COMMENTS_UPDATE: "/api/Comments/PutComment/",
    COMMENTS_CREATE: "/api/Comments/PostComment",
    COMMENTS_DELETE: "/api/Comments/DeleteComment/",

    /* Categories */
    CATEGORIES_GET_ALL: "/api/Categories/GetCategories",
    CATEGORIES_GET_BY_ID: "/api/Categories/GetCategory/",
    CATEGORIES_UPDATE: "/api/Categories/PutCategory/",
    CATEGORIES_CREATE: "/api/Categories/PostCategory",
    CATEGORIES_DELETE: "/api/Categories/DeleteCategory/",

    /* Bookings */
    BOOKING_GET_ALL: "/api/Bookings/GetBookings",
    BOOKING_GET_BY_ID:"/api/Bookings/GetBooking/",
    BOOKING_DELETE:"/api/Bookings/DeleteBooking/",
};
export default apiUrl;