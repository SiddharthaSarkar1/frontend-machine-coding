import React, { useState } from "react";

const FileExplorer = ({ data }) => {
  const [explorer, setExplorer] = useState(structuredClone(data));

  function handleExpand(path) {
    return () => {
      const arrayIndexes = path
        .split("/")
        .filter((v) => !!v)
        .map(Number);
      console.log(path, arrayIndexes);
      const newExplorer = structuredClone(explorer);
      const secondLastElement = arrayIndexes
        .slice(0, -1)
        .reduce((acc, next) => {
          return acc[next].children;
        }, newExplorer);

      const lastIndex = arrayIndexes.at(-1);
      const lastElement = secondLastElement[lastIndex];

      lastElement.isExpanded = !lastElement.expand;

      setExplorer(newExplorer);
    };
  }

  function handleAddFolder(path) {
    return () => {
      const arrayIndexes = path
        .split("/")
        .filter((v) => !!v)
        .map(Number);
      const newExplorer = structuredClone(explorer);
      const secondLastElement = arrayIndexes
        .slice(0, -1)
        .reduce((acc, next) => {
          return acc[next].children;
        }, newExplorer);

      const lastIndex = arrayIndexes.at(-1);
      const lastElement = secondLastElement[lastIndex];

      lastElement.isExpanded = true;

      lastElement.children = [
        {
          id: new Date().getTime(),
          type: "add-folder",
        },
        ...lastElement.children,
      ];

      setExplorer(newExplorer);
    };
  }

  function handleAddFile(path) {
    return () => {
      const arrayIndexes = path
        .split("/")
        .filter((v) => !!v)
        .map(Number);
      const newExplorer = structuredClone(explorer);
      const secondLastElement = arrayIndexes
        .slice(0, -1)
        .reduce((acc, next) => {
          return acc[next].children;
        }, newExplorer);

      const lastIndex = arrayIndexes.at(-1);
      const lastElement = secondLastElement[lastIndex];

      lastElement.isExpanded = true;

      lastElement.children = [
        {
          id: new Date().getTime(),
          type: "add-file",
        },
        ...lastElement.children,
      ];

      setExplorer(newExplorer);
    };
  }

  function handleKeyDown(path) {
    return (e) => {
      if (e.key === "Enter") {
        const folderName = e.target.value;
        const arrayIndexes = path
          .split("/")
          .filter((v) => !!v)
          .map(Number);
        const newExplorer = structuredClone(explorer);
        const secondLastElement = arrayIndexes
          .slice(0, -1)
          .reduce((acc, next) => {
            return acc[next].children;
          }, newExplorer);

        const newFolder = {
          id: new Date().getTime(),
          name: folderName,
          type: "folder",
          children: [],
        };

        secondLastElement[0] = newFolder;
        setExplorer(newExplorer);
      }
    };
  }

  function handleKeyDownFile(path) {
    return (e) => {
      if (e.key === "Enter") {
        const fileName = e.target.value;
        const arrayIndexes = path
          .split("/")
          .filter((v) => !!v)
          .map(Number);
        const newExplorer = structuredClone(explorer);
        const secondLastElement = arrayIndexes
          .slice(0, -1)
          .reduce((acc, next) => {
            return acc[next].children;
          }, newExplorer);

        const newFile = {
          id: new Date().getTime(),
          name: fileName,
          type: "file",
        };

        secondLastElement[0] = newFile;
        setExplorer(newExplorer);
      }
    };
  }

  return (
    <div>
      <Tree
        data={explorer}
        handleExpand={handleExpand}
        handleAddFolder={handleAddFolder}
        handleAddFile={handleAddFile}
        handleKeyDown={handleKeyDown}
        handleKeyDownFile={handleKeyDownFile}
      />
    </div>
  );
};

export default FileExplorer;

const Tree = ({
  data,
  path = "",
  handleExpand,
  handleAddFolder,
  handleAddFile,
  handleKeyDown,
  handleKeyDownFile,
}) => {
  return (
    <div className="tree">
      {data.map((folderData, index) => {
        const localPath = `${path}/${index}`;
        const icon = folderData.type === "folder" ? "📁" : "📄";
        const heighlightText = folderData.type === "folder" ? "text-bold" : "";
        return (
          <div key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div onClick={handleExpand(localPath)}>
                {!!folderData.name && <span>{icon}</span>}
                <span className={`${heighlightText}`}>{folderData.name}</span>
              </div>
              {folderData.type === "folder" && (
                <>
                  <button onClick={handleAddFolder(localPath)}>+📂</button>
                  <button onClick={handleAddFile(localPath)}>+📝</button>
                </>
              )}
            </div>
            {folderData.type === "add-folder" && (
              <input
                autoFocus
                onKeyDown={handleKeyDown(localPath)}
                type="text"
              />
            )}
            {folderData.type === "add-file" && (
              <input
                autoFocus
                onKeyDown={handleKeyDownFile(localPath)}
                type="text"
              />
            )}
            {folderData.isExpanded &&
              folderData.type === "folder" &&
              folderData.children && (
                <Tree
                  data={folderData.children}
                  path={localPath}
                  handleExpand={handleExpand}
                  handleAddFolder={handleAddFolder}
                  handleAddFile={handleAddFile}
                  handleKeyDown={handleKeyDown}
                  handleKeyDownFile={handleKeyDownFile}
                />
              )}
          </div>
        );
      })}
    </div>
  );
};
