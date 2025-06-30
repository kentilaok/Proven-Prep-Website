// Initialize the Leaflet map centered on Portland
const map = L.map('my-map', {
  zoomControl: true,
  attributionControl: false
}).setView([45.5152, -122.6784], 6); // Portland, OR

// Minimal basemap (no labels)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
}).addTo(map);

// Function to add a faded circle and a solid inner circle with a popup label
function addFadedCircle(lat, lng, label) {
  // Outer faded (no border)
  L.circle([lat, lng], {
    color: '#2C1F73',
    fillColor: '#2C1F73',
    fillOpacity: 0.2,
    radius: 20000,
    weight: 0
  }).addTo(map);

  // Inner solid
  L.circle([lat, lng], {
    color: '#2C1F73',
    fillColor: '#2C1F73',
    fillOpacity: 1,
    radius: 8000
  }).addTo(map).bindPopup(label);

  // Add city name as a label (DivIcon)
 L.marker([lat, lng], {
  icon: L.divIcon({
    className: 'city-label',
    html: `<span>${label}</span>`,
    iconSize: [100, 24], // width, height
    iconAnchor: [50, 40] // [center, below the icon] - increase second value to move text up
  }),
  interactive: false
}).addTo(map);
}

// Add circles for each city
addFadedCircle(45.5152, -122.6784, 'Portland, OR'); // Portland, OR
addFadedCircle(47.6062, -122.3321, 'Seattle, WA'); // Seattle, WA
addFadedCircle(38.5816, -121.4944, 'Sacramento, CA'); // Sacramento, CA
addFadedCircle(43.6150, -116.2023, 'Boise, ID'); // Boise, ID
addFadedCircle(44.9429, -123.0351, 'Salem, OR'); // Salem, OR