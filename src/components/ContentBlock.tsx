import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";
import Skeleton from "./Skeleton";
import ContentBlockActions from "./ContentBlockActions";

type Action = {
  label: string;
  onClick?: () => void;
};

type ContentBlockProps = {
  heading: string;
  summary: string;
  content: string[];
  type: "paragraph" | "bullets";
  actions?: Action[];
  showMenu?: boolean;
};

const ContentBlock: React.FC<ContentBlockProps> = ({
  heading,
  summary,
  content,
  type,
  actions,
  showMenu = true,
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`relative bg-white pt-6 rounded-xl shadow min-h-[300px] max-w-2xl mx-auto transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {showMenu && (
        <div className="absolute right-1 top-4 md:right-4">
          <DropdownMenu
            button={
              <button className="p-2 rounded-full hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            }
          >
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              onClick={() => alert("Menu Action 1")}
            >
              Menu Action 1
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              onClick={() => alert("Menu Action 2")}
            >
              Menu Action 2
            </button>
          </DropdownMenu>
        </div>
      )}

      {loading ? (
        <div className="px-6">
          <Skeleton width="66%" height="1.5rem" className="mb-2" />
          <Skeleton width="50%" height="1rem" className="mb-4" />
          <div className="space-y-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} height="1rem" />
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            {[...Array(actions?.length || 2)].map((_, i) => (
              <Skeleton key={i} width="6rem" height="2.5rem" />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="px-6 border-b border-gray-200">
            <h2 className="font-bold text-lg mb-2">{heading}</h2>
            <p className="text-gray-500 mb-4">{summary}</p>
            <div className="mb-6">
              {type === "paragraph" ? (
                content.map((text, idx) => (
                  <p
                    key={idx}
                    className="mb-2 text-gray-700 animate-fade-in"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    {text}
                  </p>
                ))
              ) : (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {content.map((item, idx) => (
                    <li
                      key={idx}
                      className="animate-fade-in"
                      style={{ animationDelay: `${0.1 * idx}s` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {actions && actions.length > 0 && (
            <div className="flex gap-3 mt-4 px-6">
              {actions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={action.onClick}
                  className="px-3 cursor-pointer py-1 rounded-3xl border border-violet-100 text-black font-medium text-sm hover:bg-violet-200 active:bg-violet-300 transition"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <ContentBlockActions
        loading={loading}
        onRegenerate={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1500);
        }}
      />
    </div>
  );
};

export default ContentBlock;
