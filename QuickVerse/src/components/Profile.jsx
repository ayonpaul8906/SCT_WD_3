import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiBarChart2, FiAward, FiEdit, FiSave, FiXCircle } from 'react-icons/fi';
import { getAvatarById } from '../data/avatars';

const Profile = ({ userProfile, onClose, onProfileUpdate }) => {
  const avatar = getAvatarById(userProfile.avatarId);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userProfile.name);

  const handleSave = () => {
    if (editedName.trim() && editedName.trim() !== userProfile.name) { // Only save if name has changed
      onProfileUpdate({ ...userProfile, name: editedName.trim() });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(userProfile.name); // Reset to original name
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl shadow-accent/20 w-full max-w-md p-6 border border-white/20 relative" 
      >

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-purple-500 transition-colors z-10"
          aria-label="Close profile"
        >
          <FiX size={28} />
        </button>

        <div className="flex items-start mb-6"> 
          <div className="flex items-center">
            <img src={avatar?.src} alt={userProfile.name} className="w-24 h-24 rounded-full ring-4 ring-accent" />
            <div className="ml-4 flex-grow min-w-0"> 
              {isEditing ? (
                <div className="flex items-center flex-wrap gap-2 pr-2"> {/* ADDED: flex-wrap pr-2 for better spacing */}
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="flex-grow bg-black/20 border border-white/10 text-white p-2 rounded-lg text-2xl font-bold focus:ring-2 focus:ring-accent focus:outline-none min-w-[100px]" // ADDED: min-w to prevent shrinking too much
                    onKeyDown={(e) => { // Allow saving with Enter key
                      if (e.key === 'Enter') handleSave();
                      if (e.key === 'Escape') handleCancel(); // Allow cancelling with Escape key
                    }}
                  />
                  <div className="flex gap-1"> {/* Group save/cancel buttons */}
                    <button onClick={handleSave} className="text-green-400 hover:text-green-300" aria-label="Save name"><FiSave size={24} /></button>
                    <button onClick={handleCancel} className="text-red-400 hover:text-red-300" aria-label="Cancel edit"><FiXCircle size={24} /></button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold text-white break-words">{userProfile.name}</h2> {/* ADDED: break-words for long names */}
                  <button onClick={() => setIsEditing(true)} className="text-text-secondary hover:text-white" aria-label="Edit name">
                    <FiEdit size={20} />
                  </button>
                </div>
              )}
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 text-sm mt-1">Quiz Adventurer</p> {/* ADDED: text-sm mt-1 for better alignment */}
            </div>
          </div>
          {/* REMOVED: The old close button */}
        </div>
        
        {/* Stats Section */}
        <div className="bg-primary/50 border border-white/10 p-4 rounded-lg mb-4"> {/* ADDED: mb-4 for spacing */}
           <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500  mb-4 flex items-center"><FiBarChart2 className="mr-2 text-purple-400"/> Your Stats</h3>
           <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-secondary/70 p-3 rounded">
                  <p className="text-2xl font-bold text-white">0</p>
                  <p className="text-white text-sm">Highest Score</p>
              </div>
              <div className="bg-secondary/70 p-3 rounded">
                  <p className="text-2xl font-bold text-white">0</p>
                  <p className="text-white text-sm">Games Played</p>
              </div>
           </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-primary/50 border border-white/10 p-4 rounded-lg mt-4">
           <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4 flex items-center"><FiAward className="mr-2 text-purple-400"/> Achievements</h3>
           <p className="text-white text-center py-4">Achievements are coming soon!</p>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Profile;