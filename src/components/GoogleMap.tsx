import { useState, useEffect, useRef } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Input } from '@/components/ui/input';

interface GoogleMapProps {
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const PlaceAutocomplete = () => {
  const map = useMap();
  const places = useMapsLibrary('places');
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['geometry', 'name', 'formatted_address']
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocomplete);
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener('place_changed', () => {
      const place = placeAutocomplete.getPlace();
      
      if (!place.geometry?.location) {
        return;
      }

      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      setMarkerPosition(location);
      
      if (map) {
        map.panTo(location);
        map.setZoom(15);
      }
    });
  }, [placeAutocomplete, map]);

  return (
    <>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search for a location..."
          className="bg-background shadow-lg"
        />
      </div>
      {markerPosition && (
        <AdvancedMarker position={markerPosition}>
          <Pin
            background="#e65100"
            borderColor="#bf360c"
            glyphColor="#fff"
          />
        </AdvancedMarker>
      )}
    </>
  );
};

const GoogleMap = ({ 
  apiKey, 
  center = { lat: 33.7490, lng: -84.3880 }, // Atlanta, GA
  zoom = 10,
  className = ""
}: GoogleMapProps) => {
  return (
    <div className={className}>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={center}
          defaultZoom={zoom}
          mapId="first-class-construction-map"
          gestureHandling="cooperative"
          disableDefaultUI={false}
          style={{ width: '100%', height: '100%' }}
        >
          <AdvancedMarker position={center}>
            <Pin
              background="#e65100"
              borderColor="#bf360c"
              glyphColor="#fff"
            />
          </AdvancedMarker>
          <PlaceAutocomplete />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
