import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { avatars } from '../data/avatars.js';
// import { FiRocket } from 'react-icons/fi'; 

const ProfileSetup = ({ onSave }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSave = () => {
    if (name.trim() && selectedAvatar) {
      onSave({ name: name.trim(), avatarId: selectedAvatar });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      className="w-full max-w-lg mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
    >
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Create Your Profile</h1>
      <p className="text-white mb-8">Choose your name and avatar to begin your adventure!</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full bg-black/20 border border-white/10 text-white p-3 rounded-lg mb-8 text-center text-lg focus:ring-2 focus:ring-accent focus:outline-none transition-all"
      />

      <h2 className="text-2xl font-bold mb-4 text-white">Choose an Avatar</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
        {avatars.map((avatar) => (
          <motion.img
            key={avatar.id}
            src={avatar.src}
            alt={`Avatar ${avatar.id}`}
            onClick={() => setSelectedAvatar(avatar.id)}
            className={`cursor-pointer rounded-full aspect-square object-cover transition-all duration-200 ${
              selectedAvatar === avatar.id 
                ? 'ring-4 ring-pink-400 scale-110' 
                : 'opacity-60 hover:opacity-100'
            }`}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={!name.trim() || !selectedAvatar}
        className="text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 px-12 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-pink-500/50 transform hover:-translate-y-1 disabled:bg-none disabled:bg-gray-500 disabled:opacity-50 disabled:shadow-none disabled:transform-none flex items-center justify-center mx-auto"
      >
         Start
      </button>
    </motion.div>
  );
};

export default ProfileSetup;