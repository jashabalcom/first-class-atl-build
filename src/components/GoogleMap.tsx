import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

interface GoogleMapProps {
  apiKey: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

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
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
