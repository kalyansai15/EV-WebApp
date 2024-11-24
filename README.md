# EV-WebApp

![EV Charging Station Finder and Slot Booking System](https://via.placeholder.com/1200x400?text=EV+Charging+System)  
A web-based application to find nearby electric vehicle (EV) charging stations, book charging slots, and make payments securely. This platform aims to make the charging process more accessible and efficient for EV owners.

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
