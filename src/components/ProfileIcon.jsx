import { TbGridDots } from 'react-icons/tb';

import Profile from '../assets/profile-200x200.jpg';
import ProfileRing from '../assets/profile-ring.svg';

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10  w-10 flex justify-center rounded-full cursor-pointer items-center hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368"></TbGridDots>
      </span>
      <span className="h-10  w-10 relative flex justify-center  cursor-pointer items-center">
        <img src={ProfileRing} className="absolute"></img>
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <span className=" flex items-center justify-center bg-slate-700 text-slate-100 w-full h-full text-center">
            M
          </span>
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
