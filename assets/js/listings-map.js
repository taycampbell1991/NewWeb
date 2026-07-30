document.addEventListener('DOMContentLoaded', function () {
  const mapEl = document.getElementById('listings-map');
  if (!mapEl || typeof L === 'undefined' || typeof soldListings === 'undefined') return;

  const map = L.map(mapEl).setView([44.2, -122.5], 7);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const markers = [];
  soldListings.forEach(function (item) {
    const marker = L.marker([item.lat, item.lon]).addTo(map);
    const popupHtml =
      '<div class="map-popup">' +
        '<img src="' + item.img + '" alt="' + item.title + '">' +
        '<div class="map-popup-body">' +
          '<h4>' + item.title + '</h4>' +
          '<p>' + item.address + '</p>' +
          (item.meta ? '<p class="map-popup-meta">' + item.meta + '</p>' : '') +
        '</div>' +
      '</div>';
    marker.bindPopup(popupHtml);
    markers.push(marker);
  });

  if (markers.length) {
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }
});
