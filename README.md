# VELOCITY RENTALS — Vehicle Rental Management System

A responsive front-end implementation based on the supplied mini-project report and UI screenshots.

## Included
- Landing page with Admin Portal and Client Portal
- Admin authentication (`admin` / `admin123`)
- Client registration and login
- Cars / Bikes / Trucks categories
- Vehicle cards with image, rate and status
- Search and price/name sorting
- Vehicle details modal
- Date validation and rental cost calculation
- Booking confirmation
- Client rental history
- Admin fleet inventory
- Admin add/edit/delete vehicle controls
- Booking activity panel
- LocalStorage persistence
- Responsive dark, grid-based UI with cyan accent

## Run
Open `index.html` directly in a browser.

No npm, API key, database or paid service is required for the demo.

## Notes
Vehicle images use remote Unsplash image URLs. If the browser is offline, the app automatically falls back to a simple generated placeholder.

The current implementation uses browser LocalStorage as a demo database. It is structured so a real backend (Firebase, Node.js/SQL, etc.) can replace the storage/auth layer later.
