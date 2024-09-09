export const DUMMY_FACILITIES = [
    {
        id: 1,
        // img:"https://live.staticflickr.com/65535/50137510881_3f675bb620_h.jpg",
        img:"https://live.staticflickr.com/65535/51134975562_11a63a62d7_h.jpg",
        name: "Cape Canaveral",
        facilityName: "LC-39A & SLC-40",
        temp: "24°C",
        weather: "Clouds",
        region: "Florida",
        wind: "2 m/s"
    },
    {
        id:2,
        img: "https://live.staticflickr.com/65535/50906488116_c44db82fc1_k.jpg",
        name: "Starbase Boca Chica",
        facilityName: "Starship Launch Facility",
        temp: "28°C",
        weather: "Clear",
        region: "Texas",
        wind: "5 m/s"
    },
    {
        id:3,
        img:"https://live.staticflickr.com/982/42290930181_480260c49b_k.jpg",
        name: "Vandenerg Base",
        facilityName: "USSF SLC-4E",
        temp: "15°C",
        weather: "Clouds",
        region: "California",
        wind: "2 m/s"
    }
];

export const UPCOMING_API = "https://api.spacexdata.com/v4/launches/next";
export const PREVIOUS_API = "https://api.spacexdata.com/v4/launches/latest";
export const ROCKETNAME_API = "https://api.spacexdata.com/v4/rockets/";
export const LAUNCHPADNAME_API = "https://api.spacexdata.com/v4/launchpads/";
export const ROCKET_API = "https://api.spacexdata.com/v4/rockets";