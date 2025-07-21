import React from "react";

const FileExplorer = ({ data }) => {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
};

export default FileExplorer;

const Tree = ({ data }) => {
  return (
    <div className="tree">
      {data.map((folderData, index) => {
        const icon = folderData.type === "folder" ? "📁" : "📄";
        const heighlightText = folderData.type === "folder" ? "text-bold" : "";
        return (
          <div key={index}>
            <div>
              {icon}
              <span className={`${heighlightText}`}>{folderData.name}</span>
            </div>
            {folderData.type === "folder" && folderData.children && (
              <Tree data={folderData.children} />
            )}
          </div>
        );
      })}
    </div>
  );
};
