import React, { useState } from 'react';
import MapComponent from './MapComponent';

const LOCAL_KEY = "APSRTC_BUSES";
const buses = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];


const BUS_DATA = {
  '222R': ['Gajuwaka', 'Kurmannapalem', 'Sheela Nagar', 'Auto Nagar', 'Nathayyapalem', 'NAD Junction', 'Yarada Road Junction', 'Maddilapalem'],
  '28K': ['Simhachalam', 'Prahladapuram', 'Adivivaram', 'Gopalapatnam', 'Kurmannapalem', 'Gajuwaka'],
  '900K': ['Maddilapalem', 'Vepagunta', 'Scindia', 'Steel Plant Township'],
  '999': ['RTC Complex', 'Jagadamba Junction', 'MVP Colony', 'Rushikonda', 'Bheemili Beach'],
  '12D': ['Vijayawada', 'Benz Circle', 'PNBS', 'Auto Nagar', 'Gannavaram Airport'],
  '24A': ['Guntur', 'Chuttugunta', 'Brindavan Gardens', 'RTC Bus Stand'],
  '45B': ['Vizianagaram', 'Ramatalkies', 'RTC Complex', 'Three Lanterns Junction'],
  '38E': ['Tirupati', 'Alipiri', 'Kapilatheertham'],
  '102F': ['Anantapur', 'Clock Tower', 'Railway Station', 'Saptagiri Circle'],
  '87K': ['Kurnool', 'Nehru Nagar', 'Jubliee Bus Stand', 'Railway Station'],
  '60M': ['Nellore', 'Ranganayakulapet', 'Stonehousepet', 'RTC Bus Stand'],
  '18H': ['Ongole', 'Kurnool Road', 'Ongole Bypass', 'RTC Bus Stand'],
  '77N': ['Rajahmundry', 'Godavari Bridge', 'Kotipalli Bus Stop', 'RTC Bus Stand'],
  '66Z': ['Kakinada', 'Jagannaickpur', 'Bhanugudi Junction', 'RTC Bus Stand'],
  '52P': ['Eluru', 'Fire Station', 'Powerpet', 'RTC Bus Stand'],
  '29T': ['Machilipatnam', 'Manginapudi Beach', 'Chilakalapudi', 'RTC Bus Stand'],
  '34U': ['Chittoor', 'Gangadhara Nellore', 'MSR Circle', 'RTC Bus Stand'],
  '91X': ['Kadapa', 'Seven Roads Circle', 'RIMS Hospital', 'RTC Bus Stand'],
  '26R': ['Srikakulam', 'Palasa', 'Tekkali', 'RTC Bus Stand'],
  '39G': ['Vizag', 'Gopalapatnam', 'MVP Colony', 'RTC Complex'],
  '48H': ['Vizag', 'Siripuram', 'Kailasagiri', 'RTC Complex'],
  '61L': ['Vijayawada', 'Governorpet', 'Krishna Lanka', 'RTC Bus Stand'],
  '83M': ['Guntur', 'Lakshmipuram', 'Nallapadu', 'RTC Bus Stand'],
  '20A': ['Tirupati', 'Renigunta', 'Airport Road', 'RTC Bus Stand'],
  '90P': ['Anantapur', 'Saptagiri Circle', 'Town Bus Stand', 'Railway Station'],
  '33J': ['Kurnool', 'Sunkesula Road', 'Stadium', 'RTC Bus Stand'],
  '78D': ['Nellore', 'Narayana Hospital', 'Mini Bypass', 'RTC Bus Stand'],
  '64T': ['Ongole', 'Collectorate', 'Addanki Bus Stand', 'RTC Bus Stand'],
  '15Z': ['Rajahmundry', 'Aryapuram', 'Danavaipeta', 'RTC Bus Stand'],
  '95R': ['Kakinada', 'Sarpavaram', 'Cinema Hall Center', 'RTC Bus Stand'],
  '22W': ['Eluru', 'Ashok Nagar', 'Narasimharaopet', 'RTC Bus Stand'],
  '49S': ['Machilipatnam', 'RTC Complex', 'Pedana', 'RTC Bus Stand'],
  '17B': ['Chittoor', 'Puttur Road', 'Satyavedu', 'RTC Bus Stand'],
  '55K': ['Kadapa', 'Proddatur', 'Pulivendula', 'RTC Bus Stand'],
  '31Y': ['Srikakulam', 'Ranastalam', 'Amadalavalasa', 'RTC Bus Stand'],
  '14M': ['Vizag', 'Beach Road', 'Old Gajuwaka', 'RTC Complex'],
  '43L': ['Guntur', 'Tenali', 'Mangalagiri', 'RTC Bus Stand'],
  '97V': ['Tirupati', 'Chandragiri', 'Balaji Colony', 'RTC Bus Stand'],
  '13G': ['Vijayawada', 'Penamaluru', 'Krishna Canal', 'RTC Bus Stand'],
  '50A': ['Rajahmundry', 'Morampudi', 'Dowleswaram', 'RTC Bus Stand'],
  '92D': ['Kurnool', 'Kodumur', 'Orvakal', 'RTC Bus Stand'],
  '36N': ['Nellore', 'Kavali', 'Udayagiri', 'RTC Bus Stand'],
  '41X': ['Vizag', 'Seethammadhara', 'Dwaraka Nagar', 'RTC Complex'],
  '62B': ['Anantapur', 'Hindupur', 'Bathalapalli', 'RTC Bus Stand'],
  '75P': ['Kadapa', 'Badvel', 'Jammalamadugu', 'RTC Bus Stand'],
  '58J': ['Guntur', 'Prathipadu', 'Gorantla', 'RTC Bus Stand'],
  '65R': ['Vijayawada', 'Poranki', 'Kanuru', 'RTC Bus Stand'],
  '27F': ['Kakinada', 'Pithapuram', 'Samarlakota', 'RTC Bus Stand'],
  '19C': ['Tirupati', 'Tiruchanur', 'Sri Padmavati Temple', 'RTC Bus Stand'],
  '80H': ['Ongole', 'Markapur', 'Darsi', 'RTC Bus Stand'],
  '44M': ['Vizianagaram', 'Cheepurupalli', 'Gajapathinagaram', 'RTC Bus Stand'],
  '70N': ['Srikakulam', 'Ichapuram', 'Sompeta', 'RTC Bus Stand'],
  '21L': ['Eluru', 'Bhimadole', 'Jangareddygudem', 'RTC Bus Stand'],
  '30X': ['Machilipatnam', 'Avanigadda', 'Koduru', 'RTC Bus Stand'],
  '37K': ['Vizag', 'Kancharapalem', 'Pendurthi', 'RTC Complex'],
  '84Z': ['Guntur', 'Amaravati', 'Tulluru', 'RTC Bus Stand'],
  '46A': ['Tirupati', 'Karakambadi', 'Airport', 'RTC Bus Stand'],
  '85T': ['Rajahmundry', 'Korukonda', 'Rajiv Gandhi Bridge', 'RTC Bus Stand'],
  '59G': ['Kakinada', 'Annavaram', 'Tuni', 'RTC Bus Stand'],
  '16D': ['Nellore', 'Gudur', 'Sri City', 'RTC Bus Stand'],
  '76E': ['Vijayawada', 'Nandigama', 'Jaggayyapeta', 'RTC Bus Stand'],
  '47V': ['Vizag', 'Duvvada', 'Yarada Beach', 'RTC Complex'],
  '88M': ['Anantapur', 'Kadiri', 'Pamidi', 'RTC Bus Stand'],
  '93C': ['Kurnool', 'Adoni', 'Yemmiganur', 'RTC Bus Stand'],
  '10B': ['Srikakulam', 'Narasannapeta', 'Pathapatnam', 'RTC Bus Stand'],
  '42P': ['Chittoor', 'Nagari', 'Puttur', 'RTC Bus Stand'],
  '100A': ['Vizag', 'Araku', 'Padmapuram Gardens', 'RTC Complex'],
  '63J': ['Guntur', 'Ponnur', 'Bapatla', 'RTC Bus Stand'],
  '11T': ['Tirupati', 'Tirumala', 'Srivari Mettu', 'RTC Bus Stand'],
  '35H': ['Eluru', 'Denduluru', 'Tadepalligudem', 'RTC Bus Stand'],
  '98Z': ['Kadapa', 'Rajampet', 'Rayachoti', 'RTC Bus Stand'],
  '115A': ['Vijayawada', 'Gunadala', 'Ibrahimpatnam', 'RTC Bus Stand'],
  '72C': ['Guntur', 'Pedakakani', 'Tadepalli', 'RTC Bus Stand'],
  '56D': ['Tirupati', 'Srikalahasti', 'Renigunta', 'RTC Bus Stand'],
  '89E': ['Anantapur', 'Dharmavaram', 'Puttaparthi', 'RTC Bus Stand'],
  '23F': ['Kurnool', 'Adoni', 'Yemmiganur', 'RTC Bus Stand'],
  '67G': ['Nellore', 'Kavali', 'Singarayakonda', 'RTC Bus Stand'],
  '94H': ['Ongole', 'Chirala', 'Vetapalem', 'RTC Bus Stand'],
  '51J': ['Rajahmundry', 'Ramachandrapuram', 'Mandapeta', 'RTC Bus Stand'],
  '32K': ['Kakinada', 'Pithapuram', 'Samarlakota', 'RTC Bus Stand'],
  '73L': ['Eluru', 'Bhimavaram', 'Tadepalligudem', 'RTC Bus Stand'],
  '40M': ['Machilipatnam', 'Gudivada', 'Kaikaluru', 'RTC Bus Stand'],
  '81N': ['Chittoor', 'Palamaner', 'Punganur', 'RTC Bus Stand'],
  '25P': ['Kadapa', 'Proddatur', 'Jammalamadugu', 'RTC Bus Stand'],
  '69R': ['Srikakulam', 'Palakonda', 'Rajam', 'RTC Bus Stand'],
  '57T': ['Visakhapatnam', 'Anakapalli', 'Narsipatnam', 'RTC Complex'],
  '86V': ['Vizianagaram', 'Bobbili', 'Parvathipuram', 'RTC Bus Stand'],
  '12B': ['Vijayawada', 'Nuzvid', 'Tiruvuru', 'RTC Bus Stand'],
  '45C': ['Guntur', 'Narasaraopet', 'Vinukonda', 'RTC Bus Stand'],
  '79D': ['Tirupati', 'Madanapalle', 'Rayachoti', 'RTC Bus Stand'],
  '28E': ['Anantapur', 'Hindupur', 'Penukonda', 'RTC Bus Stand'],
  '63F': ['Kurnool', 'Nandyal', 'Atmakur', 'RTC Bus Stand'],
  '96G': ['Nellore', 'Gudur', 'Venkatagiri', 'RTC Bus Stand'],
  '53H': ['Ongole', 'Kanigiri', 'Podili', 'RTC Bus Stand'],
  '34J': ['Rajahmundry', 'Kovvur', 'Nidadavole', 'RTC Bus Stand'],
  '71K': ['Kakinada', 'Rajole', 'Amalapuram', 'RTC Bus Stand'],
  '42L': ['Eluru', 'Koyyalagudem', 'Polavaram', 'RTC Bus Stand'],
  '82M': ['Machilipatnam', 'Avanigadda', 'Koduru', 'RTC Bus Stand'],
  '26N': ['Chittoor', 'Nagari', 'Puttur', 'RTC Bus Stand'],
  '60P': ['Kadapa', 'Badvel', 'Mydukur', 'RTC Bus Stand'],
  '91R': ['Srikakulam', 'Ichapuram', 'Sompeta', 'RTC Bus Stand'],
  '58T': ['Visakhapatnam', 'Yalamanchili', 'Tuni', 'RTC Complex'],
  '87V': ['Vizianagaram', 'Cheepurupalli', 'Gajapathinagaram', 'RTC Bus Stand'],
  '13B': ['Vijayawada', 'Jaggayyapeta', 'Tiruvuru', 'RTC Bus Stand'],
  '46C': ['Guntur', 'Prathipadu', 'Gurazala', 'RTC Bus Stand'],
  '80D': ['Tirupati', 'Rayachoti', 'Railway Koduru', 'RTC Bus Stand'],
  '29E': ['Anantapur', 'Kadiri', 'Dharmavaram', 'RTC Bus Stand'],
  '64F': ['Kurnool', 'Dhone', 'Pattikonda', 'RTC Bus Stand'],
  '97G': ['Nellore', 'Atmakur', 'Rapur', 'RTC Bus Stand'],
  '54H': ['Ongole', 'Kanigiri', 'Podili', 'RTC Bus Stand'],
  '35J': ['Rajahmundry', 'Anaparthi', 'Bikkavolu', 'RTC Bus Stand'],
  '72K': ['Kakinada', 'Annavaram', 'Tuni', 'RTC Bus Stand'],
  '43L': ['Eluru', 'Chintalapudi', 'Jangareddygudem', 'RTC Bus Stand'],
  '111A': ['Vijayawada', 'Ibrahimpatnam', 'Jaggayyapeta', 'Damalacheruvu'],
  '74C': ['Guntur', 'Phirangipuram', 'Sattenapalli', 'Amaravathi'],
  '57D': ['Tirupati', 'Renigunta', 'Srikalahasti', 'Naidupeta'],
  '90E': ['Anantapur', 'Tadpatri', 'Pulivendula', 'Kadapa'],
  '24F': ['Kurnool', 'Nandyal', 'Atmakur', 'Srisailam'],
  '68G': ['Nellore', 'Kavali', 'Singarayakonda', 'Chirala'],
  '95H': ['Ongole', 'Markapur', 'Giddalur', 'Nandyal'],
  '52J': ['Rajahmundry', 'Anaparthi', 'Peddapuram', 'Tuni'],
  '33K': ['Kakinada', 'Yanam', 'Amalapuram', 'Rajole'],
  '74L': ['Eluru', 'Jangareddygudem', 'Kovvur', 'Tadepalligudem'],
  '41M': ['Machilipatnam', 'Gudivada', 'Vuyyuru', 'Pamarru'],
  '82N': ['Chittoor', 'Palamaner', 'Kuppam', 'Punganur'],
  '26P': ['Kadapa', 'Rayachoti', 'Madanapalle', 'Piler'],
  '70R': ['Srikakulam', 'Rajam', 'Palakonda', 'Parvathipuram'],
  '59T': ['Visakhapatnam', 'Anakapalli', 'Yalamanchili', 'Tuni'],
  '88V': ['Vizianagaram', 'Bobbili', 'Salur', 'Parvathipuram'],
  '13B': ['Vijayawada', 'Nuzvid', 'Tiruvuru', 'Jaggayyapeta'],
  '46C': ['Guntur', 'Narasaraopet', 'Vinukonda', 'Gurazala'],
  '81D': ['Tirupati', 'Puttur', 'Nagari', 'Chittoor'],
  '29E': ['Anantapur', 'Kadiri', 'Dharmavaram', 'Penukonda'],
  '64F': ['Kurnool', 'Dhone', 'Pattikonda', 'Adoni'],
  '97G': ['Nellore', 'Atmakur', 'Rapur', 'Gudur'],
  '55H': ['Ongole', 'Kanigiri', 'Podili', 'Darsi'],
  '36J': ['Rajahmundry', 'Kovvur', 'Nidadavole', 'Ramachandrapuram'],
  '73K': ['Kakinada', 'Rajole', 'Amalapuram', 'Yanam'],
  '44L': ['Eluru', 'Koyyalagudem', 'Polavaram', 'Bhimavaram'],
  '84M': ['Machilipatnam', 'Avanigadda', 'Koduru', 'Manginapudi'],
  '28N': ['Chittoor', 'Nagari', 'Puttur', 'Satyavedu'],
  '62P': ['Kadapa', 'Badvel', 'Mydukur', 'Rajampet'],
  '93R': ['Srikakulam', 'Ichapuram', 'Sompeta', 'Tekkali'],
  '61T': ['Visakhapatnam', 'Yalamanchili', 'Narsipatnam', 'Anakapalli'],
  '90V': ['Vizianagaram', 'Cheepurupalli', 'Gajapathinagaram', 'Bobbili'],
  '14B': ['Vijayawada', 'Jaggayyapeta', 'Tiruvuru', 'Nuzvid'],
  '47C': ['Guntur', 'Prathipadu', 'Gurazala', 'Narasaraopet'],
  '83D': ['Tirupati', 'Rayachoti', 'Railway Koduru', 'Madanapalle'],
  '30E': ['Anantapur', 'Kadiri', 'Dharmavaram', 'Hindupur'],
  '65F': ['Kurnool', 'Dhone', 'Pattikonda', 'Yemmiganur'],
  '98G': ['Nellore', 'Atmakur', 'Rapur', 'Venkatagiri'],
  '56H': ['Ongole', 'Kanigiri', 'Podili', 'Chirala'],
  '37J': ['Rajahmundry', 'Anaparthi', 'Bikkavolu', 'Mandapeta'],
  '75K': ['Kakinada', 'Annavaram', 'Tuni', 'Peddapuram'],
  '45L': ['Eluru', 'Chintalapudi', 'Jangareddygudem', 'Koyyalagudem'],
  '81G': ['Guntur', 'Nallapadu', 'Tenali', 'Repalle'],
  '39J': ['Tirupati', 'Srinivasa Mangapuram', 'Karakambadi', 'Chandragiri'],
  '104K': ['Rajahmundry', 'Dowleswaram', 'Mandapeta', 'Draksharamam'],
  '22N': ['Nellore', 'Vedayapalem', 'Muthukur', 'Krishnapatnam'],
  '70V': ['Kurnool', 'Kodumur', 'Gonegandla', 'Adoni'],
  '95C': ['Ongole', 'Tangutur', 'Chimakurthy', 'Maddipadu'],
  '84K': ['Srikakulam', 'Tekkali', 'Palasa', 'Baruva'],
  '55P': ['Machilipatnam', 'Gudivada', 'Hanuman Junction', 'Eluru'],
  '112A': ['Kadapa', 'Mydukur', 'Porumamilla', 'Rajampet'],
  '121X': ['Anantapur', 'Uravakonda', 'Rayadurgam', 'Ballari'],
  '79F': ['Vizianagaram', 'Srungavarapukota', 'Araku', 'Ananthagiri'],
  '68C': ['Tadepalligudem', 'Pentapadu', 'Tanuku', 'Attili'],
  '33Z': ['Kakinada', 'Korrangi', 'Yanam', 'Coringa'],
  '222R': ['Gajuwaka', 'Kurmannapalem', 'Sheela Nagar', 'Auto Nagar', 'Nathayyapalem', 'NAD Junction', 'Yarada Road Junction', 'Maddilapalem'],
  '28K': ['Simhachalam', 'Prahladapuram', 'Adivivaram', 'Gopalapatnam', 'Kurmannapalem', 'Gajuwaka'],
  '900K': ['Maddilapalem', 'Vepagunta', 'Scindia', 'Steel Plant Township'],
  '999': ['RTC Complex', 'Jagadamba Junction', 'MVP Colony', 'Rushikonda', 'Bheemili Beach'],
  '12D': ['Vijayawada', 'Benz Circle', 'PNBS', 'Auto Nagar', 'Gannavaram Airport'],
  '143L': ['Vizianagaram', 'Phoolbagh', 'Nellimarla','Gurla', 'Kalavacharla', 'Kotagandredu', 'Kothapeta', 'Garikivalasa', 'Kenguva'],
  '103M': ['Vizag', 'Maddilapalem', 'Siripuram', 'Kailasagiri'],
  '56P': ['Vijayawada', 'Patamata', 'Benz Circle', 'Auto Nagar']
};

const destinations = [...new Set(Object.values(BUS_DATA).flat())];

const FAKE_COORDINATES = {
  "Gajuwaka": { lat: 17.7, lng: 83.2 },
  "Vijayawada": { lat: 16.5062, lng: 80.6480 },
  "Vizag": { lat: 17.6868, lng: 83.2185 },
  "Tirupati": { lat: 13.6288, lng: 79.4192 },
};

export default function BusFinder() {
  const [busNumber, setBusNumber] = useState('');
  const [destination, setDestination] = useState('');
  const [result, setResult] = useState('');
  const [selectedStop, setSelectedStop] = useState('');
  const [passingBuses, setPassingBuses] = useState([]);
  const [mapLocation, setMapLocation] = useState(null);
  const [foundBus, setFoundBus] = useState(null);

  const checkBusRoute = () => {
    const route = BUS_DATA[busNumber.toUpperCase()];
    setFoundBus(route);

    if (route && route.includes(destination)) {
      setResult(`✅ Yes, Bus ${busNumber.toUpperCase()} passes through ${destination}.`);
    } else {
      setResult(`❌ No, Bus ${busNumber.toUpperCase()} does not go to ${destination}.`);
    }

    if (destination in FAKE_COORDINATES) {
      setMapLocation(FAKE_COORDINATES[destination]);
    } else {
      setMapLocation(null);
    }
  };

  const findBusesByDestination = () => {
    const matchingBuses = Object.entries(BUS_DATA)
      .filter(([bus, stops]) => stops.includes(selectedStop))
      .map(([bus]) => bus);
    setPassingBuses(matchingBuses);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>APSRTC Bus Finder</h1>

      <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '20px' }}>
        <h2>1. Check if a bus goes to your destination</h2>
        <input
          type="text"
          placeholder="Enter Bus Number (e.g., 222R)"
          value={busNumber}
          onChange={(e) => setBusNumber(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
        <input
          type="text"
          placeholder="Enter Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '5px 0' }}
        />
        <button onClick={checkBusRoute} style={{ padding: '8px 16px' }}>Check</button>
        {result && <p>{result}</p>}

        {foundBus && (
          <div style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f8f8f8"
          }}>
            <h3>📍 Route Preview for Bus {busNumber.toUpperCase()}:</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {foundBus.map((stop, index) => (
                <li key={index} style={{ textAlign: "center", marginBottom: "12px" }}>
                  {index === 0 && <span>🟢 </span>}
                  {index === foundBus.length - 1 && <span>🔴 </span>}
                  {index !== 0 && index !== foundBus.length - 1 && <span>• </span>}
                  <strong>{stop}</strong>
                  {index !== foundBus.length - 1 && <div style={{ fontSize: "20px", color: "#aaa" }}>↓</div>}
                </li>
              ))}
            </ul>
            <p style={{ textAlign: "center" }}>
              ⏱️ Estimated Time: <strong>{foundBus.length * 10} mins</strong>
            </p>
          </div>
        )}

        <MapComponent location={mapLocation} destination={destination} />
      </div>

      <div style={{ border: '1px solid #ccc', padding: '16px' }}>
        <h2>2. Find buses going to a destination</h2>
        <select onChange={(e) => setSelectedStop(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }}>
          <option value="">Select Destination</option>
          {destinations.map((stop, idx) => (
            <option key={idx} value={stop}>{stop}</option>
          ))}
        </select>
        <button onClick={findBusesByDestination} style={{ padding: '8px 16px' }}>Find Buses</button>
        {passingBuses.length > 0 && (
          <div>
            <h3>Buses passing through {selectedStop}:</h3>
            <ul>
              {passingBuses.map((bus, idx) => (
                <li key={idx}>{bus}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
