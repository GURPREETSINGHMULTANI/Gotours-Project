export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VycHJlZXRzaW5naG11bHRhbmkiLCJhIjoiY2txZmpsOGlrMTYzcjJvbnp0ZmJoeW1pZyJ9.PiJO1qXXB67Jl6k8FIXy7A';

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/gurpreetsinghmultani/cksmszui32hyq17lk6qeqk6p0',
        scrollZoom: false
        // center: [-118.113491, 34.111745],
        // zoom: 4,
        // interactive: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Add marker
        const el = document.createElement('div');
        el.className = 'marker';

        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);

        // Add popup
        new mapboxgl.Popup({ offset: 30 }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);

        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
}

