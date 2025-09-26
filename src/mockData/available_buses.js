// hardcoded bus data for multiple routes + dates
export const buses = {
  status: "OK",
  data: [
    // ---------- Delhi -> Jaipur ----------
    {
      routeId: "delhi_jaipur",
      fromCityState: "Delhi, Delhi",
      toCityState: "Jaipur, Rajasthan",
      fromCity: "Delhi",
      toCity: "Jaipur",
      fromCityId: "5d763ced4947d40f2be02707",
      toCityId: "5d764ec14947d40f2be02731",
      // two search dates for this route
      dates: [
        {
          searchDate: "2025-10-01",
          totalBuses: 3,
          marketPlaceResult: [
            {
              id: "68c1e3a1-dj1",
              tripInventoryType: "MARKETPLACE",
              brandName: "Bharat Benz",
              startTime: "10:30PM",
              endTime: "4:40AM",
              timeDifference: "6 Hr 10 Mins",
              startTimeInMills: Date.parse("2025-10-01T22:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T04:40:00+05:30"),
              gstFare: 553,
              discountFare: 415,
              discountPercentage: 25,
              couponCode: "VALUERIDE25",
              seatsAvailable: 17,
              useZingCash: false,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: true,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: true,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": false,
                "SHARING SLEEPER": true,
                "LAST ROW SEATER": true,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd639d",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-dj2",
              tripInventoryType: "MARKETPLACE",
              brandName: "Volvo AC Sleeper",
              startTime: "11:00PM",
              endTime: "5:10AM",
              timeDifference: "6 Hr 10 Mins",
              startTimeInMills: Date.parse("2025-10-01T23:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T05:10:00+05:30"),
              gstFare: 700,
              discountFare: 560,
              discountPercentage: 20,
              couponCode: "RIDE20",
              seatsAvailable: 12,
              useZingCash: true,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: false,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd639e",
              showOnTimeClaimBanner: true,
              isLaunchOfferApplicable: true,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-dj3",
              tripInventoryType: "MARKETPLACE",
              brandName: "AC Seater/Sleeper",
              startTime: "08:15PM",
              endTime: "02:25AM",
              timeDifference: "6 Hr 10 Mins",
              startTimeInMills: Date.parse("2025-10-01T20:15:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T02:25:00+05:30"),
              gstFare: 605,
              discountFare: 454,
              discountPercentage: 25,
              couponCode: "VALUERIDE25",
              seatsAvailable: 13,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: true,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: true,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": false,
                "SHARING SLEEPER": true,
                "LAST ROW SEATER": true,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd639d",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            }
          ],
          boardingPoints: [
            { name: "Delhi", isPriorityStation: false, isLounge: false },
            { name: "Dhaula Kuan", isPriorityStation: false, isLounge: false },
            { name: "Iffco Chowk Gurgaon", isPriorityStation: false, isLounge: false }
          ],
          dropPoints: [
            { name: "200 Ft Bypass", isPriorityStation: false, isLounge: false },
            { name: "Amity University", isPriorityStation: false, isLounge: false }
          ],
          totalBoardingPointsCount: 3,
          totalDropPointsCount: 2,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        },
        {
          searchDate: "2025-10-02",
          totalBuses: 3,
          marketPlaceResult: [
            {
              id: "68c1e3a1-dj4",
              tripInventoryType: "MARKETPLACE",
              brandName: "Bharat Benz Premium",
              startTime: "09:30PM",
              endTime: "03:40AM",
              timeDifference: "6 Hr 10 Mins",
              startTimeInMills: Date.parse("2025-10-02T21:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-03T03:40:00+05:30"),
              gstFare: 580,
              discountFare: 435,
              discountPercentage: 25,
              couponCode: "VALUERIDE25",
              seatsAvailable: 10,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: true,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: true,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": true,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd639f",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-dj5",
              tripInventoryType: "MARKETPLACE",
              brandName: "Volvo Comfort",
              startTime: "11:45PM",
              endTime: "06:00AM",
              timeDifference: "6 Hr 15 Mins",
              startTimeInMills: Date.parse("2025-10-02T23:45:00+05:30"),
              endTimeInMills: Date.parse("2025-10-03T06:00:00+05:30"),
              gstFare: 750,
              discountFare: 600,
              discountPercentage: 20,
              couponCode: "GET20",
              seatsAvailable: 8,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: false,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63a00",
              showOnTimeClaimBanner: true,
              isLaunchOfferApplicable: true,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-dj6",
              tripInventoryType: "MARKETPLACE",
              brandName: "AC Seater",
              startTime: "07:30PM",
              endTime: "01:40AM",
              timeDifference: "6 Hr 10 Mins",
              startTimeInMills: Date.parse("2025-10-02T19:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-03T01:40:00+05:30"),
              gstFare: 500,
              discountFare: 375,
              discountPercentage: 25,
              couponCode: "SAVE25",
              seatsAvailable: 20,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: true,
                isSleeperAvailable: false,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: true,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": false,
                "SHARING SLEEPER": true,
                "LAST ROW SEATER": true,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63a01",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            }
          ],
          boardingPoints: [
            { name: "Mori Gate/ ISBT Kashmere Gate", isPriorityStation: false, isLounge: false },
            { name: "Mahipal Pur", isPriorityStation: false, isLounge: false }
          ],
          dropPoints: [
            { name: "Narayan Singh Circle, Jaipur", isPriorityStation: false, isLounge: false },
            { name: "Nims University", isPriorityStation: false, isLounge: false }
          ],
          totalBoardingPointsCount: 2,
          totalDropPointsCount: 2,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        }
      ]
    },

    // ---------- Delhi -> Agra ----------
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
            {
              id: "68c1e3a1-da2",
              tripInventoryType: "MARKETPLACE",
              brandName: "Volvo Express",
              startTime: "07:30AM",
              endTime: "10:30AM",
              timeDifference: "3 Hr",
              startTimeInMills: Date.parse("2025-10-01T07:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-01T10:30:00+05:30"),
              gstFare: 450,
              discountFare: 360,
              discountPercentage: 20,
              couponCode: "VOLVO10",
              seatsAvailable: 12,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: false,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: true,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": false,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63a11",
              showOnTimeClaimBanner: true,
              isLaunchOfferApplicable: true,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-da3",
              tripInventoryType: "MARKETPLACE",
              brandName: "Non-AC Seater",
              startTime: "05:00AM",
              endTime: "08:15AM",
              timeDifference: "3 Hr 15 Mins",
              startTimeInMills: Date.parse("2025-10-01T05:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-01T08:15:00+05:30"),
              gstFare: 250,
              discountFare: 200,
              discountPercentage: 20,
              couponCode: "SAVE20",
              seatsAvailable: 30,
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
              serviceId: "646efbef6ec04aaf5cdd63a12",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: false,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            }
          ],
          boardingPoints: [{ name: "Delhi", isPriorityStation: false, isLounge: false }],
          dropPoints: [{ name: "Agra Cantt", isPriorityStation: false, isLounge: false }],
          totalBoardingPointsCount: 1,
          totalDropPointsCount: 1,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        },
        {
          searchDate: "2025-10-02",
          totalBuses: 3,
          marketPlaceResult: [
            {
              id: "68c1e3a1-da4",
              tripInventoryType: "MARKETPLACE",
              brandName: "Express Bus Co",
              startTime: "06:30AM",
              endTime: "09:30AM",
              timeDifference: "3 Hr",
              startTimeInMills: Date.parse("2025-10-02T06:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T09:30:00+05:30"),
              gstFare: 360,
              discountFare: 288,
              discountPercentage: 20,
              couponCode: "AGRA20",
              seatsAvailable: 22,
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
              serviceId: "646efbef6ec04aaf5cdd63a13",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-da5",
              tripInventoryType: "MARKETPLACE",
              brandName: "Volvo Express",
              startTime: "12:00PM",
              endTime: "03:00PM",
              timeDifference: "3 Hr",
              startTimeInMills: Date.parse("2025-10-02T12:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T15:00:00+05:30"),
              gstFare: 480,
              discountFare: 384,
              discountPercentage: 20,
              couponCode: "VOLVO10",
              seatsAvailable: 10,
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
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63a14",
              showOnTimeClaimBanner: true,
              isLaunchOfferApplicable: true,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-da6",
              tripInventoryType: "MARKETPLACE",
              brandName: "Economy Seater",
              startTime: "03:30PM",
              endTime: "06:45PM",
              timeDifference: "3 Hr 15 Mins",
              startTimeInMills: Date.parse("2025-10-02T15:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T18:45:00+05:30"),
              gstFare: 260,
              discountFare: 208,
              discountPercentage: 20,
              couponCode: "ECON20",
              seatsAvailable: 28,
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
              serviceId: "646efbef6ec04aaf5cdd63a15",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: false,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            }
          ],
          boardingPoints: [{ name: "Iffco Chowk Gurgaon", isPriorityStation: false, isLounge: false }],
          dropPoints: [{ name: "Agra City Center", isPriorityStation: false, isLounge: false }],
          totalBoardingPointsCount: 1,
          totalDropPointsCount: 1,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        }
      ]
    },

    // ---------- Jaipur -> Udaipur ----------
    {
      routeId: "jaipur_udaipur",
      fromCityState: "Jaipur, Rajasthan",
      toCityState: "Udaipur, Rajasthan",
      fromCity: "Jaipur",
      toCity: "Udaipur",
      fromCityId: "5d764ec14947d40f2be02731",
      toCityId: "5d76yyyy4947d40f2be02bbb",
      dates: [
        {
          searchDate: "2025-10-01",
          totalBuses: 3,
          marketPlaceResult: [
            {
              id: "68c1e3a1-ju1",
              tripInventoryType: "MARKETPLACE",
              brandName: "Rajasthan Travels",
              startTime: "09:00PM",
              endTime: "04:00AM",
              timeDifference: "7 Hr",
              startTimeInMills: Date.parse("2025-10-01T21:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T04:00:00+05:30"),
              gstFare: 900,
              discountFare: 675,
              discountPercentage: 25,
              couponCode: "RJ25",
              seatsAvailable: 16,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: false,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": true
              },
              serviceId: "646efbef6ec04aaf5cdd63b20",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-ju2",
              tripInventoryType: "MARKETPLACE",
              brandName: "Volvo Royale",
              startTime: "10:30PM",
              endTime: "05:30AM",
              timeDifference: "7 Hr",
              startTimeInMills: Date.parse("2025-10-01T22:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T05:30:00+05:30"),
              gstFare: 1200,
              discountFare: 960,
              discountPercentage: 20,
              couponCode: "VOLVO20",
              seatsAvailable: 6,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: false,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63b21",
              showOnTimeClaimBanner: true,
              isLaunchOfferApplicable: true,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-ju3",
              tripInventoryType: "MARKETPLACE",
              brandName: "AC Seater",
              startTime: "08:00PM",
              endTime: "03:15AM",
              timeDifference: "7 Hr 15 Mins",
              startTimeInMills: Date.parse("2025-10-01T20:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-02T03:15:00+05:30"),
              gstFare: 800,
              discountFare: 640,
              discountPercentage: 20,
              couponCode: "SEAT20",
              seatsAvailable: 20,
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
              serviceId: "646efbef6ec04aaf5cdd63b22",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            }
          ],
          boardingPoints: [
            { name: "Jaipur Bus Stand", isPriorityStation: false, isLounge: false },
            { name: "Gopalpura", isPriorityStation: false, isLounge: false }
          ],
          dropPoints: [{ name: "Udaipur City", isPriorityStation: false, isLounge: false }],
          totalBoardingPointsCount: 2,
          totalDropPointsCount: 1,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        },
        {
          searchDate: "2025-10-02",
          totalBuses: 3,
          marketPlaceResult: [
            {
              id: "68c1e3a1-ju4",
              tripInventoryType: "MARKETPLACE",
              brandName: "Rajasthan Travels",
              startTime: "09:30PM",
              endTime: "04:40AM",
              timeDifference: "7 Hr 10 Mins",
              startTimeInMills: Date.parse("2025-10-02T21:30:00+05:30"),
              endTimeInMills: Date.parse("2025-10-03T04:40:00+05:30"),
              gstFare: 920,
              discountFare: 690,
              discountPercentage: 25,
              couponCode: "RJ25",
              seatsAvailable: 14,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: false,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": true
              },
              serviceId: "646efbef6ec04aaf5cdd63b23",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-ju5",
              tripInventoryType: "MARKETPLACE",
              brandName: "Volvo Royale",
              startTime: "11:00PM",
              endTime: "06:00AM",
              timeDifference: "7 Hr",
              startTimeInMills: Date.parse("2025-10-02T23:00:00+05:30"),
              endTimeInMills: Date.parse("2025-10-03T06:00:00+05:30"),
              gstFare: 1250,
              discountFare: 1000,
              discountPercentage: 20,
              couponCode: "VOLVO20",
              seatsAvailable: 5,
              seatAvailabilityBySeatType: {
                isSeaterAvailable: false,
                isSleeperAvailable: true,
                isSemiSleeperAvailable: false
              },
              availableSeatType: {
                SEATER: false,
                "SEMI SLEEPER": false,
                "SINGLE SLEEPER": true,
                "SHARING SLEEPER": false,
                "LAST ROW SEATER": false,
                "LAST ROW SLEEPER": false
              },
              serviceId: "646efbef6ec04aaf5cdd63b24",
              showOnTimeClaimBanner: true,
              isLaunchOfferApplicable: true,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            },
            {
              id: "68c1e3a1-ju6",
              tripInventoryType: "MARKETPLACE",
              brandName: "AC Seater",
              startTime: "07:45PM",
              endTime: "03:00AM",
              timeDifference: "7 Hr 15 Mins",
              startTimeInMills: Date.parse("2025-10-02T19:45:00+05:30"),
              endTimeInMills: Date.parse("2025-10-03T03:00:00+05:30"),
              gstFare: 820,
              discountFare: 656,
              discountPercentage: 20,
              couponCode: "SEAT20",
              seatsAvailable: 18,
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
              serviceId: "646efbef6ec04aaf5cdd63b25",
              showOnTimeClaimBanner: false,
              isLaunchOfferApplicable: false,
              isLiveTrackingAvailable: true,
              evtData: { evtInventory: "Marketplace", evtInventoryType: "MARKETPLACE" }
            }
          ],
          boardingPoints: [{ name: "Jaipur Bus Stand", isPriorityStation: false, isLounge: false }],
          dropPoints: [{ name: "Udaipur City", isPriorityStation: false, isLounge: false }],
          totalBoardingPointsCount: 1,
          totalDropPointsCount: 1,
          showLaunchOfferBanner: false,
          launchOfferDetails: { seatPrice: 0, titleTxt: "", subtitleTxt: "" }
        }
      ]
    }
  ]
};
