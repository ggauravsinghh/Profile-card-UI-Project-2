import React, { useState } from 'react';
import { Calendar, Heart, User2, Briefcase, GraduationCap, Pencil, X } from 'lucide-react';

interface UserProfile {
  name: string;
  image: string;
  description: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  education: string;
  career: string;
  careerStatus: string;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Gaurav Singh',
    image: 'https://white-force.com/plus/src/public/member_images/e8rarmLz7vTtESPGNztd.png',
    description: 'Passionate about creating beautiful user experiences and capturing moments through my lens. Always exploring new creative possibilities and pushing boundaries in design.',
    gender: 'Male',
    dob: '1996-04-15',
    maritalStatus: 'UnMarried',
    education: 'Master in Design, Stanford University',
    career: 'UI/UX Designer',
    careerStatus: 'Full-time at Google'
  });

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
        {/* Profile Header */}
        <div className="relative h-48">
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80" 
            alt="Profile background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img 
              src={profile.image}
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-8 px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-gray-600 mt-2">{profile.career}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{profile.description}</p>
          </div>

          {/* User Details */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3 text-gray-700">
              <User2 size={18} className="text-indigo-500 flex-shrink-0" />
              <span>{profile.gender}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Calendar size={18} className="text-indigo-500 flex-shrink-0" />
              <span>DOB: {new Date(profile.dob).toLocaleDateString()} ({calculateAge(profile.dob)} years)</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Heart size={18} className="text-indigo-500 flex-shrink-0" />
              <span>{profile.maritalStatus}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <GraduationCap size={18} className="text-indigo-500 flex-shrink-0" />
              <span>{profile.education}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Briefcase size={18} className="text-indigo-500 flex-shrink-0" />
              <span>{profile.careerStatus}</span>
            </div>
          </div>

          {/* Edit Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-8 w-full bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Pencil size={16} />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Edit Profile</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                  <input
                    type="text"
                    name="image"
                    value={profile.image}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={profile.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                  <select
                    name="maritalStatus"
                    value={profile.maritalStatus}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Education</label>
                  <input
                    type="text"
                    name="education"
                    value={profile.education}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Career</label>
                  <input
                    type="text"
                    name="career"
                    value={profile.career}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Career Status</label>
                  <input
                    type="text"
                    name="careerStatus"
                    value={profile.careerStatus}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;