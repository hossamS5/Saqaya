import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faPen,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface ContentBlockActionsProps {
  loading: boolean;
  onRegenerate: () => void;
}

const ContentBlockActions: React.FC<ContentBlockActionsProps> = ({
  loading,
  onRegenerate,
}) => (
  <div className="bg-gray-50 mt-4 p-4 flex items-center gap-3">
    <button
      className="flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg bg-violet-100 text-violet-700 font-medium hover:bg-violet-200 active:bg-violet-300 transition"
      onClick={onRegenerate}
      disabled={loading}
    >
      <FontAwesomeIcon icon={faRotateRight} spin={loading} />
      Regenerate
    </button>
    <button
      className="p-2 rounded hover:bg-gray-200 cursor-pointer transition text-violet-400"
      title="Edit"
    >
      <FontAwesomeIcon icon={faPen} />
    </button>
    <button
      className="p-2 rounded hover:bg-gray-200 cursor-pointer transition text-violet-400"
      title="Duplicate"
    >
      <FontAwesomeIcon icon={faCopy} />
    </button>
    <button
      className="p-2 rounded hover:bg-gray-200 cursor-pointer transition text-violet-400"
      title="Delete"
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
);

export default ContentBlockActions;
