# Toll Collection System Frontend

This application was completed using react as part of my university coursework.

You can find this application deployed here: https://toll-system-lac.vercel.app/

## Table of Contents
- [Getting Started](#getting-started)
- [Requirements of the Assignment](#requirements-of-the-assignment)
- [Design and Implementation](#design-and-implementation)
- [Future Enhancements](#future-enhancements)

## Getting Started

To try out the application, follow these steps:

1. Clone the repository to your local machine.
   ```shell
   git clone https://github.com/andyforrest/toll-system.git
2. Install dependancies.
    ```shell
    npm install
4. Run project
      ```shell
    npm run dev

## Requirements of the Assignment

### 1. Select Toll Category
Users can choose a toll category from the provided options listed below:

- Single person, light load
- Single person, heavy load
- Single person, hand-drawn cart
- 1 horse + rider
- Horse-drawn cart, 1 horse
- Horse-drawn cart, 2–3 horses
- Horse-drawn cart, 4–5 horses
- Horse-drawn cart, 6 horses

### 2. View Toll Cost
Upon selecting a category, the application dynamically calculates and displays the corresponding toll cost:

| Category                        | Price                          |
|---------------------------------|--------------------------------|
| Single person, light load       | 1 As                           |
| Single person, heavy load       | 2 As                           |
| Single person, hand-drawn cart  | 1 Dupondius, 1 As               |
| 1 horse + rider                 | 2 Dupondius                    |
| Horse-drawn cart, 1 horse       | 3 Dupondius                    |
| Horse-drawn cart, 2–3 horses    | 4 Dupondius                    |
| Horse-drawn cart, 4–5 horses    | 1 Denarius                     |
| Horse-drawn cart, 6 horses      | 1 Denarius, 2 Sestertius        |


### 3. Enter Payment Data
Users can enter their payment data for processing

### 4. Accessibility
Application demonstrates accessibility considerations such as using appropriate colour contrasts and being navigable with only the keyboard or screen reader

## Design and Implementation

**Note**: Backend API integration points are indicated in the code with comments. These points would be used for fetching category and price information in a real-world scenario.

## Future Enhancements

While this demo serves as a basic frontend prototype, future enhancements could include:

- Integration with a backend API for dynamic category and price updates.
- Multi-category journey support.
- Stripe/Paypal payment processing






