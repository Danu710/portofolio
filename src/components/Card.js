import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="bg-white/10 rounded-lg p-4 h-full">
      <div className="flex justify-between w-full mb-3">
        <FolderIcon className="text-lightGreen" size={40} />
        <div className="flex flex-1 justify-end">
          {props.github && (
            <Link
              to={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:black black/70 ml-2">
              <GitHubIcon />
            </Link>
          )}
          {props.link && (
            <Link
              to={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:black black/70 ml-2">
              <LinkIcon />
            </Link>
          )}
        </div>
      </div>
      <p className="font-sans font-bold">{props.title}</p>
      <p className="font-sans black/70 mt-2">{props.description}</p>
      <p className="font-mono text-xs mt-4">[{props.tags?.join()}]</p>
    </div>
  );
}

export default Card;
