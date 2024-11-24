# EV-WebApp

**EV Charging Station Finder and Slot Booking System** is a web-based application designed to help electric vehicle (EV) owners easily find nearby charging stations and book slots in advance . This system is aimed at improving the EV charging experience, ensuring convenience, accessibility, and reliability for users while promoting the adoption of electric vehicles by reducing charging anxiety.

As the adoption of electric vehicles continues to rise, the need for a streamlined and efficient way to locate, reserve, and pay for charging slots becomes critical. This application addresses that need by offering a simple yet powerful solution.

---

## Features

- **Charging Station Locator**: Find nearby EV charging stations using geolocation services.
- **Slot Booking**: View available slots and reserve a time for charging your EV.
- **Real-time Updates**: Live status of charging slots and availability.
- **User Profiles**: Create accounts to manage bookings and transaction history.
- **Station Management**: Admin panel for charging station operators to manage bookings and monitor station performance.

---

## Installation

### Prerequisites

- Node.js (for backend)
- MongoDB (for database)
- **HTML, CSS, JavaScript** (for frontend)

### Steps to Install

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/kalyansai15/EV-WebApp.git
    cd EV-WebApp
    ```

2. **Install Backend Dependencies:**

    Navigate to the `backend/` folder and run:

    ```bash
    npm install
    ```

3. **Install Frontend Dependencies:**

    Since the frontend uses **HTML, CSS, and JavaScript**, there are no specific package dependencies. You can simply open the `frontend/` folder and start working with the files.

4. **Configure Database:**

    Set up your **MongoDB** instance and configure the connection string in the `backend/config/db.js` file.

5. **Start the Application:**

    - For the backend:
      ```bash
      cd backend
      node server.js
      ```

6. Visit `http://localhost:3000` in your browser to access the application.

---

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Geolocation**: Google Maps API

---

## Folder Structure

```plaintext
EV-WebApp/
│
├── backend/
│   └──server.js/            # Backend logic and API 
│   
├── frontend/                # HTML, CSS, and JavaScript frontend code
│   ├── Login.html           # Login page with HTML, CSS, and JavaScript
│   ├── User.html            # User page with HTML, CSS, and JavaScript
│   ├── Admin.html           # Admin page with HTML, CSS, and JavaScript
│
└── README.md                 # This file
```

# Screenshots

## Login page
![image](https://github.com/user-attachments/assets/664fb3dc-bff9-4135-a111-5927d4cf68dd)

## User Page 
![image](https://github.com/user-attachments/assets/9e40b164-ddc0-4ad8-9da5-3cc32c313fcb)

![image](https://github.com/user-attachments/assets/c855e639-ec0e-4b9f-8b77-5f91f06682a4)

![image](https://github.com/user-attachments/assets/e8d7d4b9-05bd-4c6e-ae9d-f5a10190deca)

## Admin Page
![image](https://github.com/user-attachments/assets/38b47923-819e-4f42-bd8d-b67e91a65231)

![image](https://github.com/user-attachments/assets/603bcf8c-fc45-4251-8eb9-9372345f6fc8)

# Contributing

We welcome contributions from the community! If you'd like to improve or add features to this project, feel free to fork the repository, make your changes, and submit a pull request. Please ensure that your code adheres to the project's coding standards and is well-documented.

# Acknowledgments
- ** Google Maps API for geolocation and station search.
- ** HTML, CSS, and JavaScript for building the user interface.
- ** Node.js and Express.js for building the backend server.
- ** MongoDB for storing data.



