import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./GalleMap.css"; // Create this for styling

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmtwYXNxdWFsIiwiYSI6ImNtY3J1N2ZraTB5NnIyb3E1MWQ3dDdvZ3IifQ.eLSPFCj_cD7ZTn-kwWMnCQ";

const locations = [
  // Universities & Educational Institutions
  {
    name: "University of Ruhuna Faculty of Medicine",
    coordinates: [80.2265, 6.0678],
    category: "education",
    color: "#FF6B6B",
  },
  {
    name: "University of Ruhuna Faculty of Engineering",
    coordinates: [80.19229, 6.078694],
    category: "education",
    color: "#FF6B6B",
  },
  {
    name: "University of Ruhuna Faculty of Allied Health Sciences",
    coordinates: [80.2197, 6.0719],
    category: "education",
    color: "#FF6B6B",
  },
  {
    name: "ICBT Galle Campus",
    coordinates: [80.21556340422342, 6.038831792996123],
    category: "education",
    color: "#FF6B6B",
  },
  {
    name: "National Institute of Business Management (NIBM)",
    coordinates: [80.22392061320487, 6.037230628269744],
    category: "education",
    color: "#FF6B6B",
  },
  {
    name: "Advanced Technological Institute (ATI), Labuduwa",
    coordinates: [80.2334151984366, 6.074435908857682],
    category: "education",
    color: "#FF6B6B",
  },
  {
    name: "Informatics Institute of Technology (IIT) – Galle Regional Centre",
    coordinates: [80.21204276721603, 6.034863582763873],
    category: "education",
    color: "#FF6B6B",
  },

  // Hospitals & Medical Centers
  {
    name: "Karapitiya Teaching Hospital",
    coordinates: [80.22613667368032, 6.067138387088375],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "The German-Sri Lanka Friendship Hospital for Women",
    coordinates: [80.22308427194157, 6.067437938625118],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Co-operative Hospital Galle",
    coordinates: [80.2162111561074, 6.036813364695936],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Ruhunu Hospital Galle",
    coordinates: [80.22738980213394, 6.069606067770901],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Queensbury Hospital Karapitiya",
    coordinates: [80.22124641747602, 6.062590908224428],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Roseth Hospital Ambalangoda",
    coordinates: [80.05435676625369, 6.239189547029547],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Suvana Suva Madiya Hospital Ambalangoda",
    coordinates: [80.05050775468179, 6.241272987238191],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Baddegama Medical Center",
    coordinates: [80.17893049418714, 6.172134259976251],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "District Hospital – Baddegama",
    coordinates: [80.18037650158183, 6.163256864449889],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "District Hospital – Ambalangoda",
    coordinates: [80.06237690453639, 6.249218768299743],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Base Hospital - Elpitiya",
    coordinates: [80.16433635916732, 6.293428791772494],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "District Hospital – Udugama",
    coordinates: [80.34064653309518, 6.188493485395204],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "District Hospital – Unawatuna",
    coordinates: [80.24722781562711, 6.02071105901053],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "District Hospital – Karandeniya",
    coordinates: [80.0997224402141, 6.269126575363598],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Base Hospital – Balapitiya",
    coordinates: [80.03817838309573, 6.260803990682238],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Hikkaduwa",
    coordinates: [80.12900933405048, 6.141695943159506],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Bentota",
    coordinates: [79.99950239659012, 6.423776900138732],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Ambalangoda",
    coordinates: [80.06289379028972, 6.248832024357482],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Baddegama",
    coordinates: [80.17961330575339, 6.16300549449848],
    category: "medical",
    color: "#4ECDC4",
  },
  // {
  //   name: "Divisional Hospital – Batapola",
  //   coordinates: [80.112, 6.092],
  //   category: "medical",
  //   color: "#4ECDC4",
  // },
  {
    name: "Divisional Hospital – Habaraduwa",
    coordinates: [80.177, 6.067],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Rathgama",
    coordinates: [80.185, 6.075],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Uragasmanhandiya",
    coordinates: [80.315, 6.145],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Nagoda",
    coordinates: [80.212, 6.042],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Ahangama",
    coordinates: [80.365, 5.975],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Hiniduma",
    coordinates: [80.358, 6.198],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Divisional Hospital – Imaduwa",
    coordinates: [80.452, 6.122],
    category: "medical",
    color: "#4ECDC4",
  },
  // {
  //   name: "Divisional Hospital – Thalapitiya",
  //   coordinates: [80.132, 6.058],
  //   category: "medical",
  //   color: "#4ECDC4",
  // },
  {
    name: "Divisional Hospital – Induruwa",
    coordinates: [80.015, 6.358],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "District Ayurvedic Hospital – Galle",
    coordinates: [80.2185, 6.0305],
    category: "medical",
    color: "#4ECDC4",
  },
  {
    name: "Ayurveda Rural Hospital – Pitigala",
    coordinates: [80.378, 6.185],
    category: "medical",
    color: "#4ECDC4",
  },

  // Transportation
  {
    name: "Galle Central Bus Stand",
    coordinates: [80.214, 6.032],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Galle Highway (Expressway) Stand",
    coordinates: [80.216, 6.034],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Ambalangoda Bus Stand",
    coordinates: [80.052, 6.235],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Hikkaduwa Bus Stand",
    coordinates: [80.102, 6.139],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Koggala Bus Stand",
    coordinates: [80.325, 5.995],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Baddegama Central Bus Stand",
    coordinates: [80.1975, 6.1845],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Galle Railway Station",
    coordinates: [80.2195, 6.0285],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Ambalangoda Railway Station",
    coordinates: [80.053, 6.234],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Hikkaduwa Railway Station",
    coordinates: [80.101, 6.138],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Bentota Railway Station",
    coordinates: [80.001, 6.425],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Ahangama Railway Station",
    coordinates: [80.364, 5.974],
    category: "transport",
    color: "#45B7D1",
  },
  {
    name: "Boossa Railway Station",
    coordinates: [80.285, 6.015],
    category: "transport",
    color: "#45B7D1",
  },

  // Parks & Nature
  {
    name: "Koggala Lake",
    coordinates: [80.328, 5.998],
    category: "nature",
    color: "#96CEB4",
  },
  {
    name: "Kanneliya Forest Reserve",
    coordinates: [80.365, 6.245],
    category: "nature",
    color: "#96CEB4",
  },
  {
    name: "Dharmapala Park",
    coordinates: [80.2155, 6.0275],
    category: "nature",
    color: "#96CEB4",
  },
  {
    name: "Holuwagoda Water Park",
    coordinates: [80.158, 6.112],
    category: "nature",
    color: "#96CEB4",
  },

  // Recreation & Sports
  {
    name: "Galle International Stadium",
    coordinates: [80.232, 6.058],
    category: "recreation",
    color: "#FFEAA7",
  },

  // Service Centers
  {
    name: "Dialog Experience Centre – Galle",
    coordinates: [80.215, 6.031],
    category: "service",
    color: "#DDA0DD",
  },

  // Hotels & Accommodation
  {
    name: "Le Grand Galle",
    coordinates: [80.2175, 6.0265],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Radisson Blu Resort, Galle",
    coordinates: [80.248, 6.012],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Jetwing Lighthouse",
    coordinates: [80.2185, 6.0255],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Hotel Riu Sri Lanka",
    coordinates: [80.185, 6.068],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Galle Fort Hotel",
    coordinates: [80.216, 6.027],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "The Fort Printers",
    coordinates: [80.217, 6.028],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Olinda Galle",
    coordinates: [80.2165, 6.0275],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Ginganga Lodge",
    coordinates: [80.219, 6.031],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "VODA Hotel",
    coordinates: [80.218, 6.0295],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Ocean Villa Den",
    coordinates: [80.22, 6.0285],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "The Sun House",
    coordinates: [80.221, 6.03],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Hikka Tranz by Cinnamon",
    coordinates: [80.104, 6.141],
    category: "hotel",
    color: "#F39C12",
  },
  {
    name: "Dormero Hotel Sri Lanka Hikkaduwa Beach",
    coordinates: [80.105, 6.142],
    category: "hotel",
    color: "#F39C12",
  },
];

const GalleMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [80.217, 6.033],
      zoom: 10,
    });

    // Add controls
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    const bounds = new mapboxgl.LngLatBounds();

    // Add markers
    locations.forEach((loc) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${loc.name}</h3><p>Category: ${loc.category}</p><p>Coordinates: ${loc.coordinates[1]}, ${loc.coordinates[0]}</p>`
      );

      new mapboxgl.Marker({ color: loc.color })
        .setLngLat(loc.coordinates)
        .setPopup(popup)
        .addTo(map.current);

      bounds.extend(loc.coordinates);
    });

    map.current.on("load", () => {
      map.current.fitBounds(bounds, { padding: 50 });
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <div className="legend">
        <h4>Legend</h4>
        <div className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: "#FF6B6B" }}
          />
          <span>Universities & Education</span>
        </div>
        <div className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: "#F39C12" }}
          />
          <span>Hotels & Accommodation</span>
        </div>
      </div>
    </div>
  );
};

export default GalleMap;
