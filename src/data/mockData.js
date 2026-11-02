import { CORRIDOR_GEOMETRY } from './corridorGeometry';
import { HIGH_CRASH_INTERSECTIONS } from './crashData';

export const CORRIDORS = [
  {
    id: 'c1',
    name: 'N Milwaukee Ave',
    limits: 'North Ave to Belmont Ave',
    length: '2.4 mi',
    classification: 'Major Arterial',
    tags: ['High Crash Corridor', 'Bike Route'],
    center: [41.919, -87.692],
    zoom: 13,
    path: CORRIDOR_GEOMETRY.c1
  },
  {
    id: 'c2',
    name: 'S Damen Ave',
    limits: '35th St to 47th St',
    length: '1.5 mi',
    classification: 'Minor Arterial',
    tags: ['Industrial', 'Buffer Lane'],
    center: [41.819, -87.675],
    zoom: 14,
    path: CORRIDOR_GEOMETRY.c2
  },
  {
    id: 'c3',
    name: 'State St',
    limits: 'Roosevelt Rd to 18th St',
    length: '0.8 mi',
    classification: 'Principal Arterial',
    tags: ['Downtown', 'Transit Heavy'],
    center: [41.863, -87.627],
    zoom: 15,
    path: CORRIDOR_GEOMETRY.c3
  },
  {
    id: 'c4',
    name: '69th St',
    limits: 'Halsted St to Wentworth Ave',
    length: '0.5 mi',
    classification: 'Collector',
    tags: ['Residential', 'School Zone'],
    center: [41.768, -87.635],
    zoom: 15,
    path: CORRIDOR_GEOMETRY.c4
  }
];

export { CRASH_DATA } from './crashData';

export const NETWORK_DATA = {
  c1: {
    bikeways: [
      { type: 'Protected Bike Lane', pct: '60%', status: 'Existing' },
      { type: 'Shared Lane', pct: '40%', status: 'Gap' },
    ],
    connections: ['Elston Ave (Bike Route)', 'Cortland St (Greenway)'],
    highCrashIntersections: HIGH_CRASH_INTERSECTIONS.c1
  },
  c2: {
    bikeways: [
      { type: 'Shared Lane', pct: '100%', status: 'Gap' },
    ],
    connections: ['Lake St (Green Line)', 'Washington Blvd (Bus Lane)'],
    highCrashIntersections: HIGH_CRASH_INTERSECTIONS.c2
  },
  c3: {
    bikeways: [
      { type: 'Shared Lane', pct: '20%', status: 'Gap' },
      { type: 'No Facilities', pct: '80%', status: 'Gap' },
    ],
    connections: ['Roosevelt Rd (Transit)', '18th St (Bike Route)'],
    highCrashIntersections: HIGH_CRASH_INTERSECTIONS.c3
  },
  c4: {
    bikeways: [
      { type: 'Protected Bike Lane', pct: '0%', status: 'Gap' },
    ],
    connections: ['Halsted St (Bus Route)', 'Dan Ryan (Access)'],
    highCrashIntersections: HIGH_CRASH_INTERSECTIONS.c4
  }
};
