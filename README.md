# YelpCamp

YelpCamp is a web application that allows users to view, add, review, and edit campgrounds. It provides a platform for users to discover and share their favorite camping spots with others.

## Features

- **User Authentication:** Users can sign up, log in, and log out securely. Authentication is implemented using sessions and password hashing.
- **Campground Management:** Users can view a list of campgrounds, add new campgrounds, edit existing ones, and delete campgrounds they own.
- **Campground Reviews:** Users can leave reviews and ratings for campgrounds. They can also edit or delete their own reviews.
- **Image Upload:** Campgrounds can be associated with images. Images are uploaded to Cloudinary for storage and retrieval.
- **Responsive Design:** The application is designed to be responsive and accessible on different devices and screen sizes.

## Technologies Used

- **Node.js:** A JavaScript runtime used for server-side development.
- **Express.js:** A web application framework for Node.js used for routing, middleware, and request handling.
- **MongoDB:** A NoSQL database used for storing application data.
- **EJS (Embedded JavaScript):** A templating language used for generating HTML markup with JavaScript.
- **Cloudinary:** A cloud-based image and video management service used for image upload and storage.

## Getting Started ( If you want to recreate the project )

1. Clone the repository:
   ```
   git clone https://github.com/FazYas123/YelpCamp.git
   ```

2. Install dependencies:
    ```
    npm i
    ```

3. Set up environment variables:
- Create a `.env` file in the a new "vars" folder, in the root directory.
- Add the following environment variables:

  ```
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_KEY=your_cloudinary_key
  CLOUDINARY_SECRET=your_cloudinary_secret
  MAPBOX_TOKEN=your_mapbox_token
  DB_URI=your_mongodb_connection_uri
  ```

4. Run the application:

    ```
    nodemon index.js
    ```


5. Access the application in your web browser at `http://localhost:portNumber`.

## Seeing the live project

My project has been deployed using render, if you want to access it for yourself, follow this link [Yasin's YelpCamp](https://yelpcamp-sh53.onrender.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project is based on the YelpCamp project from [Colt Steele's Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/) course on Udemy.
- Special thanks to the creators of the technologies and libraries used in this project.
