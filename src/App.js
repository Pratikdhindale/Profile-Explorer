import React, { useState } from 'react';
import { Search, Edit2, Trash2, MapPin, Plus, Loader , ExternalLink} from 'lucide-react';
import { Card, CardHeader, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import Image1 from "./assets/pd.png"
// Mock data - replace with actual API calls in production
const initialProfiles = [
  {
    id: 1,
    name: "Shubham Mane",
    description: "Software Engineer",
    address: "123 Tech Street, Silicon Valley",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    interests: ["Coding", "Hiking", "Photography"],
    contact: {
      email: "john@example.com",
      phone: "+1 234 567 8900"
    }
  },
  {
    id: 2,
    name: "Yash Janjal",
    description: "Product Designer",
    address: "456 Design Avenue, San Francisco",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 37.7833, lng: -122.4167 },
    interests: ["UI/UX", "Art", "Travel"],
    contact: {
      email: "jane@example.com",
      phone: "+1 234 567 8901"
    }
  },
  {
    id: 3,
    name: "Pritam Singh",
    description: "Data Scientist",
    address: "789 Analytics Lane, Boston",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 42.3601, lng: -71.0589 },
    interests: ["Machine Learning", "Cooking", "Reading"],
    contact: {
      email: "alice@example.com",
      phone: "+1 617 555 1234"
    }
  },
  {
    id: 4,
    name: "Salman Shai",
    description: "DevOps Engineer",
    address: "101 Cloud Drive, Seattle",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 47.6062, lng: -122.3321 },
    interests: ["Automation", "Gaming", "Cycling"],
    contact: {
      email: "michael@example.com",
      phone: "+1 206 555 5678"
    }
  },
  {
    id: 5,
    name: "Amit Shinde",
    description: "Marketing Specialist",
    address: "303 Campaign Street, Chicago",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 41.8781, lng: -87.6298 },
    interests: ["Branding", "Travel", "Music"],
    contact: {
      email: "emily@example.com",
      phone: "+1 312 555 8765"
    }
  },
  {
    id: 6,
    name: "David Miller",
    description: "Cybersecurity Analyst",
    address: "404 Security Avenue, New York",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    interests: ["Ethical Hacking", "Fitness", "Blogging"],
    contact: {
      email: "david@example.com",
      phone: "+1 212 555 3344"
    }
  },
  {
    id: 7,
    name: "Shubh Gill",
    description: "AI Researcher",
    address: "505 Innovation Road, Austin",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 30.2672, lng: -97.7431 },
    interests: ["AI Ethics", "Painting", "Nature"],
    contact: {
      email: "sophia@example.com",
      phone: "+1 512 555 7788"
    }
  },
  {
    id: 8,
    name: "Sujay Kumar",
    description: "Full-Stack Developer",
    address: "606 Startup Lane, Denver",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 39.7392, lng: -104.9903 },
    interests: ["Web Development", "Running", "Photography"],
    contact: {
      email: "liam@example.com",
      phone: "+1 303 555 4455"
    }
  },
  {
    id: 9,
    name: "Ravi Dev",
    description: "Graphic Designer",
    address: "707 Design District, Miami",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    interests: ["Illustration", "Traveling", "Food"],
    contact: {
      email: "olivia@example.com",
      phone: "+1 305 555 6677"
    }
  },
  {
    id: 10,
    name: "Sachin Mailk",
    description: "Blockchain Developer",
    address: "808 Crypto Valley, Palo Alto",
    image: "/api/placeholder/150/150",
    coordinates: { lat: 37.4419, lng: -122.1430 },
    interests: ["Cryptocurrency", "Basketball", "Gaming"],
    contact: {
      email: "noah@example.com",
      phone: "+1 650 555 9988"
    }
  },
];

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);

  // Filter profiles based on search term
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProfileSelect = (profile) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setSelectedProfile(profile);
      setIsLoading(false);
    }, 800);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  const handleEdit = (profile) => {
    setIsEditing(true);
    setEditingProfile(profile);
  };

  const openInGoogleMaps = (coordinates) => {
    const { lat, lng } = coordinates;
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
    window.open(mapsUrl, '_blank');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Profile Explorer
        </h1>
        <div className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search profiles..."
              className="pl-10 w-full border-gray-200 focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            variant={isAdminMode ? "secondary" : "outline"}
            className="min-w-[120px] transition-all duration-200 hover:shadow-md"
            onClick={() => setIsAdminMode(!isAdminMode)}
          >
            {isAdminMode ? 'View Mode' : 'Admin Mode'}
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProfiles.map(profile => (
                <Card 
                  key={profile.id} 
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-200 border-gray-200"
                >
                  <CardHeader className="p-4 bg-white">
                    <div className="flex items-center gap-4">
                      <img
                        src={Image1}
                        alt={profile.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                        <p className="text-sm text-gray-500">{profile.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                      <MapPin size={16} className="text-gray-400" />
                      {profile.address}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        onClick={() => handleProfileSelect(profile)}
                        className="flex-1 hover:shadow-md transition-shadow"
                      >
                        View Summary
                      </Button>
                      {isAdminMode && (
                        <>
                          <Button
                            variant="outline"
                            size="icon"
                            className="hover:bg-gray-100 transition-colors"
                            onClick={() => handleEdit(profile)}
                          >
                            <Edit2 size={16} />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="hover:bg-red-50 hover:text-red-500 transition-colors"
                            onClick={() => handleDelete(profile.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map and Profile Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-gray-200 shadow-md">
              <CardHeader className="border-b border-gray-100 bg-white">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedProfile ? 'Profile Details' : 'Select a Profile'}
                </h2>
              </CardHeader>
              <CardContent className="p-4">
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <Loader className="animate-spin text-blue-500" />
                  </div>
                ) : selectedProfile ? (
                  <div className="space-y-6">
                     <div 
                      onClick={() => openInGoogleMaps(selectedProfile.coordinates)}
                      className="aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative group"
                    >
                      <MapPin size={32} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                      <span className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                        Click to open in Maps <ExternalLink size={14} />
                      </span>
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 rounded-lg transition-colors" />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                      <p className="text-sm text-gray-600 space-y-1">
                        <span className="block">Email: {selectedProfile.contact.email}</span>
                        <span className="block">Phone: {selectedProfile.contact.phone}</span>
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProfile.interests.map(interest => (
                          <span
                            key={interest}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    Select a profile to view details
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};


export default App;
