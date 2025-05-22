import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faWallet } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <button className="p-2 rounded-full hover:bg-violet-100 transition">
        <FontAwesomeIcon icon={faCog} size="lg" className="text-violet-400" />
      </button>

      <button className="p-2 rounded-full hover:bg-violet-100 transition">
        <FontAwesomeIcon
          icon={faWallet}
          size="lg"
          className="text-violet-400"
        />
      </button>
    </div>
  );
}
