# React + Vite

# Bus Ticketing Website (React)

A modern, responsive Bus Ticketing Website built with **React** and **Tailwind CSS** that simulates an end-to-end bus booking flow using **hardcoded data**.

> **Purpose:** A frontend-only assignment that demonstrates clean architecture, component design, good state handling, a pleasant UX for seat selection, and a complete booking flow from search → seat selection → passenger info → ticket.

---

## Live Demo

[Live Demo](https://your-deployment-url.example)

---

## 🚀 What this project includes

* Home page with a search form (From, To, Journey Date) sourced from hardcoded cities.
* Search Results page showing bus cards matching the search.
* Seat Selection page with an interactive seat map (multi-select + fare calculation).
* Passenger Information page with robust validation.
* Review Booking page summarising the booking before final confirmation.
* Final Ticket page showing a generated Ticket ID and printable ticket details.
* Services layer that manages all hardcoded data and booking persistence.
* Local Storage managed with.
* Styling entirely with **Tailwind CSS** for a clean, responsive UI.

---

## 📁 Project structure (recommended / used)

```
BUS_TICKETING_WEBSITE/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── shared_components/ # Common components (FindRoute, Footer, Header, etc.)
│ │ ├── BusCard.jsx # Displays bus details in search results
│ │ ├── BusDetails.jsx # Detailed bus info
│ │ ├── CityInput.jsx # City input/autocomplete
│ │ ├── Home.jsx # Landing page with search form
│ │ ├── Invoice.jsx # Final ticket view (with generated ID)
│ │ ├── ReviewTicket.jsx # Review booking before confirmation
│ │ ├── SeatSelectionModal.jsx # Seat selection UI
│ │ └── UserDetails.jsx # Passenger info form
│ │
│ ├── custom_hooks/ # Custom React hooks
│ │ ├── useCityAutocomplete.js
│ │ └── useQuery.js
│ │
│ ├── mockData/ # Hardcoded data sources
│ │ ├── available_buses.js
│ │ └── city.js
│ │
│ ├── styles/ # Component/page-level styles
│ │ ├── busdetails.css
│ │ └── homepage.css
│ │
│ ├── App.jsx # Root app with routes
│ ├── index.css # Global styles
│ ├── main.jsx # Entry point
│ └── index.js (if applicable)
│
├── .gitignore
├── eslint.config.js
├── package.json
└── README.md
```

---

## Pages & User Flow

1. **Home** — Search form. `getCities()` is used to populate From/To dropdowns.
2. **Search Details** — Lists bus cards filtered by `from`, `to`, and `date`. Each card has `Select Seats` CTA.
3. **Seat Selection** — Grid seat layout for the selected bus. Multiple seats can be chosen; total fare updates live.
4. **Passenger Information** — Form collecting passengers’ name, phone, email, gender, and age. Validation prevents invalid submission.
5. **View Ticket** — Final ticket page with a randomly generated ticket ID and all booking details.

---

## 🗄️ Services & Data Management

All hardcoded data is kept in `src/mockData`. The service exposes the following functions:

### Example booking object

```json
{
      routeId: "delhi_agra",
      fromCityState: "Delhi, Delhi",
      toCityState: "Agra, Uttar Pradesh",
      fromCity: "Delhi",
      toCity: "Agra",
      fromCityId: "5d763ced4947d40f2be02707",
      toCityId: "5d76xxxx4947d40f2be02aaa",
      dates: [
        {
          searchDate: "2025-10-01",
          totalBuses: 3,
          marketPlaceResult: [
            {
              id: "68c1e3a1-da1",
              tripInventoryType: "MARKETPLACE",
              brandName: "Express Bus Co",
              startTime: "06:00AM",
              endTime: "09:00AM",
              timeDifference: "3 Hr",
              startTimeInMills: Date.parse("2025-10-01T06:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-01T09:00:00+05:30"),
              gstFare: 350,
              discountFare: 280,
              discountPercentage: 20,
              couponCode: "AGRA20",
              seatsAvailable: 25,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: true,
                isSleeperAvailable: false,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: true,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": false,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": true,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63a10",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
          ]
          boardingPoints: [{ name: "Iffco Chowk Gurgaon", isPriorityStation: false, isLounge: false }],
          dropPoints: [{ name: "Agra City Center", isPriorityStation: false, isLounge: false }],
          totalBoardingPointsCount: 1,
          totalDropPointsCount: 1,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        }
      ]
    }
```

## Form Validation

Passenger forms should include validation for:

* Required fields (name, phone, age)
* Valid email format
* Age must be a positive integer
* Phone number length / pattern

---

## Local Setup & Commands

**Prerequisites:**

* Node.js (v16+ recommended)
* npm or yarn

**Install**

```bash
git clone https://github.com/verma-gunjan/bus-ticketing-website
cd bus-ticketing-website
npm install
```

**Run (development)**

* **Vite**:

```bash
npm run dev
```

**Build**

```bash
npm run build
```

**Preview (Vite)**

```bash
npm run preview
```
## Extending / Future Improvements

* Add search auto-suggestions and depart/arrival maps.
* Add promo codes, discounts and fare breakup.
* Add user accounts and server-backed persistence.
* Add unit / integration tests (Jest + React Testing Library).
* Add accessibility improvements (ARIA labels, keyboard navigation for seat selection).

## Contact

Created by — Gunjan Verma

* GitHub: `https://github.com/verma-gunjan/bus-ticketing-website`
* Email: `verma.gunjan.work@example.com`