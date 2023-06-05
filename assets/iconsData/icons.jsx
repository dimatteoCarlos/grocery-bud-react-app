//dependencies to install
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/react-fontawesome@latest

// # Free icons styles
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faDiscord,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

import {
  faGlobe,
  faCircleCheck,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';


export const iconObj = [
  // { iconId: faCircleCheck },
  { iconId: faPenToSquare, iClass:'edit'},
  { iconId: faTrashCan, iClass:'delete' },
];

// import {faCircleCheck, } from '@fortawesome/free-solid-svg-icons';

export const Icons = () => {
  return (
    <>
        {iconObj.map((i, ind) => (
          <button key={ind} className={`btn-${i.iClass}`}>
            <FontAwesomeIcon
              className={`i-${i.iClass}`}
              icon={i.iconId}
              // style={{ color: {iColor} }}
            />
          </button>
        ))}
    </>
  );
};
//************************** */
export const socialObj = [
  { iconId: faFacebook, iconUrl: 'http://facebook.com' },
  { iconId: faInstagram, iconUrl: 'http://instagram.com' },
  { iconId: faTwitter, iconUrl: 'http://twitter.com' },
  { iconId: faYoutube, iconUrl: 'http://youtube.com' },
  { iconId: faDiscord, iconUrl: 'http://discord.com' },
  { iconId: faGlobe, iconUrl: 'http://localhost:3000' },
  { iconId: faTelegram, iconUrl: 'http://telegram.com' },
];

// const Social = () => {
//   return (
//     <>
//       <ul className='social'>
//         {socialObj.map((x, indx) => (
//           <li key={indx}>
//             <a href={x.iconUrl} rel='noreferrer' target='_blank'>
//               {<FontAwesomeIcon className='i' icon={x.iconId} />}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default Social;
