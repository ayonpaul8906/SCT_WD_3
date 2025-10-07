import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';
import avatar4 from '../assets/avatars/avatar4.png';
import avatar5 from '../assets/avatars/avatar5.png';
import avatar6 from '../assets/avatars/avatar6.png';

export const avatars = [
  { id: 'avatar1', src: avatar1 },
  { id: 'avatar2', src: avatar2 },
  { id: 'avatar3', src: avatar3 },
  { id: 'avatar4', src: avatar4 },
  { id: 'avatar5', src: avatar5 },
  { id: 'avatar6', src: avatar6 },
];

// A helper function to find an avatar by its ID
export const getAvatarById = (id) => {
  return avatars.find(avatar => avatar.id === id);
};