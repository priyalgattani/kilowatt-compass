# KiloWatt Compass 🚗⚡

KiloWatt Compass is a web application designed to help electric vehicle (EV) users locate charging stations and plan their routes efficiently. The application provides real-time mapping, charging station locations, and turn-by-turn navigation features.

## Features 🌟

- **Interactive Map**: Real-time map display using Pigeon Maps
- **Charging Station Locator**: Find EV charging stations in your area
- **Live Navigation**: Get directions from your current location to any destination
- **Search Functionality**: Search for locations and charging stations
- **User Location Tracking**: Automatically detects and tracks user location
- **Route Visualization**: Displays the optimal route with waypoints
- **Responsive Design**: Works on both desktop and mobile devices

## Tech Stack 💻

- React.js
- Pigeon Maps for mapping
- OpenRouteService API for directions
- OpenChargeMap API for charging stations
- Axios for API requests
- React Icons
- Bootstrap for styling

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd kilowattcompass
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
Create a `.env` file in the root directory and add your API keys:
```
VITE_OPENCHARGE_API_KEY=your_opencharge_api_key
VITE_ORS_API_KEY=your_openroute_service_api_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## API Keys 🔑

This project uses two main APIs:
- [OpenChargeMap API](https://openchargemap.org/site/develop#api) - For charging station data
- [OpenRouteService API](https://openrouteservice.org/) - For routing and navigation

You'll need to obtain API keys from both services to run the application.

## Features in Detail 📝

### Home Page
- Interactive map with zoom controls
- Current location marker
- Charging station markers
- Search bar for location search
- Get directions functionality

### Navigation
- Real-time route display
- Turn-by-turn directions
- Route optimization
- Distance and time estimates

### Charging Stations
- View nearby charging stations
- Station details including:
  - Charging types
  - Availability status
  - Location details
  - Distance from current location

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments 🙏

- OpenChargeMap for providing charging station data
- OpenRouteService for routing services
- Pigeon Maps for the mapping library
- React Icons for the icon set
