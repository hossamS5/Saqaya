import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarRegular,
  faFolderOpen,
  faComments,
} from "@fortawesome/free-regular-svg-icons";
import { faTableCells, faBagShopping } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { icon: faStarRegular, label: "Home" },
  { icon: faTableCells, label: "Dashboard" },
  { icon: faFolderOpen, label: "Files" },
  { icon: faBagShopping, label: "Shop" },
  { icon: faComments, label: "Messages" },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-16 bg-white border-r border-slate-300 flex flex-col items-center py-4 space-y-4">
      {menuItems.map((item, idx) => (
        <button
          key={idx}
          className="p-3 rounded-lg hover:bg-violet-100 transition"
        >
          <FontAwesomeIcon
            icon={item.icon}
            size="lg"
            className="text-violet-400"
          />
        </button>
      ))}
    </aside>
  );
}
