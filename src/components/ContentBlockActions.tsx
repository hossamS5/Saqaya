import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateRight,
  faPen,
  faCopy,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

interface ContentBlockActionsProps {
  loading: boolean;
  onRegenerate: () => void;
}

const ContentBlockActions: React.FC<ContentBlockActionsProps> = ({
  loading,
  onRegenerate,
}) => (
  <div className="flex items-center gap-3 p-4 mt-4 bg-gray-50">
    <Button variant="primary" onClick={onRegenerate} disabled={loading}>
      <FontAwesomeIcon icon={faRotateRight} spin={loading} />
      Regenerate
    </Button>
    <Button variant="icon" title="Edit">
      <FontAwesomeIcon icon={faPen} />
    </Button>
    <Button variant="icon" title="Duplicate">
      <FontAwesomeIcon icon={faCopy} />
    </Button>
    <Button variant="icon" title="Delete">
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  </div>
);

export default ContentBlockActions;
