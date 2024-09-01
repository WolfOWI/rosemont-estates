<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/WolfOWI/rosemont-estates?color=%000000)
![GitHub watchers](https://img.shields.io/github/watchers/WolfOWI/rosemont-estates?color=%000000)
![GitHub language count](https://img.shields.io/github/languages/count/WolfOWI/rosemont-estates?color=%000000)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/WolfOWI/rosemont-estates?color=%000000)
[![Behance][behance-shield]][behance-url]

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Wolf Botha</h5>
<h5 align="center" style="padding:0;margin:0;">21100255</h5>
<h6 align="center">Development 200 Term 3 - 2024</h6>
</br>
<p align="center">

  <a href="https://github.com/WolfOWI/rosemont-estates">
    <img src="src/assets/logos/rosemont_emblem.svg" alt="Logo" width="140" height="140">
  </a>
  
  <h3 align="center">Rosemont Estates</h3>

  <p align="center">
    Short Project Slogan / Description <br>
      <a href="https://github.com/WolfOWI/rosemont-estates"><strong>Explore the docs »</strong></a>
   <br />
   <br />
   <a href="https://youtu.be/K2DtZRP9LBY?si=4abhtoUpneIFh21x">View Demo</a>
    ·
    <a href="https://github.com/WolfOWI/rosemont-estates/issues">Report Bug</a>
    ·
    <a href="https://github.com/WolfOWI/rosemont-estates/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features and Functionality](#features-and-functionality)
  - [Login \& Signup](#login--signup)
  - [Home](#home)
  - [Listing (With Filtering)](#listing-with-filtering)
  - [Individual Listing](#individual-listing)
  - [Edit Listing](#edit-listing)
  - [Create Listing](#create-listing)
  - [Profile](#profile)
  - [Admin New Listings Dash](#admin-new-listings-dash)
  - [Admin Potential Buyers](#admin-potential-buyers)
  - [Admin Potential Tenants](#admin-potential-tenants)
  - [Admin Closed Deals](#admin-closed-deals)
  - [Admin Rejected Homes](#admin-rejected-homes)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
  - [Wireframes](#wireframes)
  - [User-flow](#user-flow)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Reviews \& Testing](#reviews--testing)
    - [Feedback from Reviews](#feedback-from-reviews)
    - [Unit Tests](#unit-tests)
  - [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

<!-- header image of project -->

![image1][image1]

### Project Description

Rosemont Estates is a luxury real estate platform designed to connect discerning buyers and renters with the most exquisite properties on the market. Whether you're looking for a serene getaway, a stately mansion, or an elegant modern home, Rosemont Estates offers a curated selection of high-end properties to meet every need. Our platform provides a seamless experience for users to browse, compare, and connect with agents, ensuring that every transaction is handled with the utmost professionalism and care.

### Built With

- [React](https://react.dev)
- [React Router](https://reactrouter.com/en/main)
- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en)
- [Leaflet Geosearch](https://www.npmjs.com/package/leaflet-geosearch)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chakra UI](https://v2.chakra-ui.com/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Here are the steps to clone this repository, set up the MySQL database, and run the project locally:

1. **Clone the Repository**:

   - Open GitHub Desktop or your terminal/command prompt.
   - If using GitHub Desktop:
     - Click on `File` -> `Clone repository...`.
     - In the `URL` tab, enter `https://github.com/WolfOWI/rosemont-estates.git` and choose the local path where you want to save the repository.
     - Click `Clone`.
   - If using the terminal:
     - Run the following command to clone the repository:
       ```sh
       git clone https://github.com/WolfOWI/rosemont-estates.git
       ```
   - Navigate to the cloned repository directory:
     ```sh
     cd rosemont-estates
     ```

2. **Install Dependencies**:

   - Ensure you are in the `root` directory inside the cloned repository.
   - Run the following command to install all required dependencies:
     ```sh
     npm install
     ```

3. **Set Up MySQL Database**:

   - Ensure that you have MySQL installed on your machine. You can download it from [MySQL](https://www.mysql.com/).
   - Open your MySQL client (like phpMyAdmin, MySQL Workbench, or the command line).
   - Create a new database for the project:
     ```sql
     CREATE DATABASE rosemont_estates;
     ```
   - Import the database schema and data:
     - If using phpMyAdmin:
       - Open phpMyAdmin and select the `rosemont_estates` database.
       - Click on the `Import` tab.
       - Choose the SQL file located in the `database` directory of your cloned repository (`database/rosemont_estates.sql`).
       - Click `Go` to import the database.
     - If using the command line:
       ```sh
       mysql -u your_username -p rosemont_estates < database/rosemont_estates.sql
       ```
       Replace `your_username` with your MySQL username and enter your password when prompted.

4. **Run the Frontend Server**:

   - After installing the dependencies, run the following command to start the frontend server:
     ```sh
     npm start
     ```
   - The frontend server should now be running on `http://localhost:3000`.

5. **Access the Application**:

   - Open your web browser and go to `http://localhost:3000`.
   - You should see the homepage of the Rosemont Estates application.

By following these steps, you will have the Rosemont Estates project fully set up and running on your local machine. This setup ensures that your MySQL database is correctly configured.

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->

## Features and Functionality

### Login & Signup

Description of Feature

![feature1][fimage1]
![feature2][fimage2]

### Home

Description of Feature

![feature3][fimage3]

### Listing (With Filtering)

Description of Feature

![feature4][fimage4]
![feature5][fimage5]

### Individual Listing

Description of Feature

![feature6][fimage6]

### Edit Listing

Description of Feature

![feature7][fimage7]

### Create Listing

Description of Feature

![feature8][fimage8]

### Profile

Description of Feature

![feature9][fimage9]

### Admin New Listings Dash

Description of Feature

![feature10][fimage10]

### Admin Potential Buyers

Description of Feature

![feature11][fimage11]

### Admin Potential Tenants

Description of Feature

![feature12][fimage12]

### Admin Closed Deals

Description of Feature

![feature13][fimage13]

### Admin Rejected Homes

Description of Feature

![feature14][fimage14]
![feature15][fimage15]

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->

## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation

![image5][image5]
<br>
![image6][image6]

### Wireframes

![image7][image7]

### User-flow

![image8][image8]

<!-- DEVELOPMENT PROCESS -->

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process

<!-- stipulate all of the functionality you included in the project -->

- Made use of both `functionality` to implement a specific feature.
- `MVC/MVVM` design architecture implemented.
- `Plugin` for this.
- ETC.

#### Highlights

<!-- stipulated the highlight you experienced with the project -->

- Sunshine.
- Rainbows.

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- Bugs.
- Bugs.

### Reviews & Testing

<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->

#### Feedback from Reviews

`Peer Reviews` were conducted by my fellow students and lecturer. The following feedback I found useful:

- Feedback one.
- Feedback two.

#### Unit Tests

`Unit Tests` were conducted to establish working functionality. Here are all the tests that were ran:

- Test 1 of this functionality
- Test 2 of this functionality

### Future Implementation

<!-- stipulate functionality and improvements that can be implemented in the future. -->

- Future 1.
- Future 2.

<!-- MOCKUPS -->

## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/WolfOWI/rosemont-estates/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->

## Authors

- **Your Name & Surname** - [WolfOWI](https://github.com/WolfOWI)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Your Name & Surname** - [email@address](mailto:email@address) - [@instagram_handle](https://www.instagram.com/instagram_handle/)
- **Project Link** - https://github.com/WolfOWI/rosemont-estates

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->

- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)

<!-- MARKDOWN LINKS & IMAGES -->

[image1]: /path/to/image.png
[fimage1]: src/assets/mockups/01login.png
[fimage2]: src/assets/mockups/02signup.png
[fimage3]: src/assets/mockups/03home.png
[fimage4]: /path/to/image.png
[fimage5]: /path/to/image.png
[fimage6]: /path/to/image.png
[fimage7]: /path/to/image.png
[fimage8]: /path/to/image.png
[fimage9]: /path/to/image.png
[fimage10]: /path/to/image.png
[fimage11]: /path/to/image.png
[fimage12]: /path/to/image.png
[fimage13]: /path/to/image.png
[fimage14]: /path/to/image.png
[fimage15]: /path/to/image.png
[image5]: /path/to/image.png
[image6]: /path/to/image.png
[image7]: /path/to/image.png
[image8]: /path/to/image.png
[image9]: /path/to/image.png
[image10]: /path/to/image.png

<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->

[behance-shield]: https://img.shields.io/badge/-Behance-black.svg?style=flat-square&logo=behance&colorB=555
[behance-url]: https://www.behance.net/wolfbotha
