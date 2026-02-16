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
    path: [
      [41.9105, -87.6775], // North Ave (Corrected: Near Damen)
      [41.9175, -87.6870], // Western Ave (Corrected)
      [41.9220, -87.6970], // California Ave
      [41.9315, -87.7090], // Diversey/Kimball area
      [41.9395, -87.7125]  // Belmont approx (Correction)
    ]
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
    path: [
      [41.8306, -87.6754], // 35th
      [41.8219, -87.6756], // Pershing
      [41.8088, -87.6760]  // 47th
    ]
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
    path: [
      [41.8674, -87.6276], // Roosevelt
      [41.8576, -87.6276]  // 18th
    ]
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
    path: [
      [41.7691, -87.6445], // Halsted
      [41.7691, -87.6300]  // Wentworth
    ]
  }
];

export const CRASH_DATA = [
  // C1: Milwaukee Ave
  { id: 1, corridorId: 'c1', lat: 41.9104, lng: -87.6770, severity: 'Non-Incapacitating', mode: 'Bicycle', year: 2023, location: 'Milwaukee & North' },
  { id: 2, corridorId: 'c1', lat: 41.9095, lng: -87.6760, severity: 'No Injury', mode: 'Bicycle', year: 2022, location: 'Milwaukee & Leavitt' },
  { id: 3, corridorId: 'c1', lat: 41.9082, lng: -87.6745, severity: 'Incapacitating Injury', mode: 'Pedestrian', year: 2023, location: 'Milwaukee & Oakley' },
  { id: 4, corridorId: 'c1', lat: 41.9065, lng: -87.6720, severity: 'No Injury', mode: 'Bicycle', year: 2021, location: 'Milwaukee & Western' },
  { id: 5, corridorId: 'c1', lat: 41.9045, lng: -87.6695, severity: 'Reported, Not Evident', mode: 'Pedestrian', year: 2022, location: 'Milwaukee & Haddon' },
  { id: 6, corridorId: 'c1', lat: 41.9035, lng: -87.6680, severity: 'Fatal', mode: 'Bicycle', year: 2020, location: 'Milwaukee & Division' },
  { id: 7, corridorId: 'c1', lat: 41.9100, lng: -87.6765, severity: 'No Injury', mode: 'Bicycle', year: 2023, location: '1500 N Milwaukee' },
  { id: 8, corridorId: 'c1', lat: 41.9055, lng: -87.6710, severity: 'Non-Incapacitating', mode: 'Pedestrian', year: 2021, location: '1400 N Milwaukee' },

  // C2: Damen Ave (Lake to Madison)
  { id: 10, corridorId: 'c2', lat: 41.8880, lng: -87.6758, severity: 'Incapacitating Injury', mode: 'Pedestrian', year: 2023, location: 'Damen & Lake' },
  { id: 11, corridorId: 'c2', lat: 41.8860, lng: -87.6758, severity: 'No Injury', mode: 'Bicycle', year: 2022, location: 'Damen & Washington' },
  { id: 12, corridorId: 'c2', lat: 41.8840, lng: -87.6758, severity: 'No Injury', mode: 'Bicycle', year: 2023, location: 'Damen & Warren' },
  { id: 13, corridorId: 'c2', lat: 41.8820, lng: -87.6758, severity: 'Non-Incapacitating', mode: 'Pedestrian', year: 2021, location: 'Damen & Madison' },
  { id: 14, corridorId: 'c2', lat: 41.8850, lng: -87.6758, severity: 'No Injury', mode: 'Bicycle', year: 2020, location: 'Damen & Randolph' },

  // C3: State St (Roosevelt to 18th)
  { id: 15, corridorId: 'c3', lat: 41.8674, lng: -87.6276, severity: 'Incapacitating Injury', mode: 'Pedestrian', year: 2023, location: 'State & Roosevelt' },
  { id: 16, corridorId: 'c3', lat: 41.8590, lng: -87.6276, severity: 'Fatal', mode: 'Pedestrian', year: 2021, location: 'State & 18th' },
  { id: 17, corridorId: 'c3', lat: 41.8650, lng: -87.6276, severity: 'No Injury', mode: 'Bicycle', year: 2022, location: 'State & 14th' },
  { id: 18, corridorId: 'c3', lat: 41.8660, lng: -87.6276, severity: 'Non-Incapacitating', mode: 'Bicycle', year: 2023, location: 'State & 13th' },

  // C4: 69th St (Halsted to Wentworth)
  { id: 19, corridorId: 'c4', lat: 41.7690, lng: -87.6440, severity: 'Incapacitating Injury', mode: 'Bicycle', year: 2023, location: '69th & Halsted' },
  { id: 20, corridorId: 'c4', lat: 41.7690, lng: -87.6300, severity: 'Fatal', mode: 'Pedestrian', year: 2022, location: '69th & Wentworth' },
  { id: 21, corridorId: 'c4', lat: 41.7690, lng: -87.6380, severity: 'Non-Incapacitating', mode: 'Bicycle', year: 2023, location: '69th & Eggleston' },
  { id: 22, corridorId: 'c4', lat: 41.7690, lng: -87.6350, severity: 'No Injury', mode: 'Pedestrian', year: 2021, location: '69th & Normal' },
];

export const NETWORK_DATA = {
  c1: {
    bikeways: [
      { type: 'Protected Bike Lane', pct: '60%', status: 'Existing' },
      { type: 'Shared Lane', pct: '40%', status: 'Gap' },
    ],
    connections: ['Elston Ave (Bike Route)', 'Cortland St (Greenway)'],
    highCrashIntersections: [
      { name: 'Milwaukee/North/Damen', crashes: 15, ksi: 2 },
      { name: 'Milwaukee/Division', crashes: 22, ksi: 4 },
      { name: 'Milwaukee/Western', crashes: 8, ksi: 1 },
    ]
  },
  c2: {
    bikeways: [
      { type: 'Shared Lane', pct: '100%', status: 'Gap' },
    ],
    connections: ['Lake St (Green Line)', 'Washington Blvd (Bus Lane)'],
    highCrashIntersections: [
      { name: 'Damen / Lake', crashes: 12, ksi: 1 },
      { name: 'Damen / Madison', crashes: 9, ksi: 0 },
    ]
  },
  c3: {
    bikeways: [
      { type: 'Shared Lane', pct: '20%', status: 'Gap' },
      { type: 'No Facilities', pct: '80%', status: 'Gap' },
    ],
    connections: ['Roosevelt Rd (Transit)', '18th St (Bike Route)'],
    highCrashIntersections: [
      { name: 'State / Roosevelt', crashes: 22, ksi: 3 },
      { name: 'State / 18th', crashes: 14, ksi: 1 },
    ]
  },
  c4: {
    bikeways: [
      { type: 'Protected Bike Lane', pct: '0%', status: 'Gap' },
    ],
    connections: ['Halsted St (Bus Route)', 'Dan Ryan (Access)'],
    highCrashIntersections: [
      { name: '69th / Halsted', crashes: 18, ksi: 2 },
      { name: '69th / Wentworth', crashes: 12, ksi: 1 },
    ]
  }
};
