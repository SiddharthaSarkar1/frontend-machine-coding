import React from "react";
import FileExplorer from "./components/file-explorer/FileExplorer.jsx";

const data = [
  {
    id: 1,
    name: "Folder 1",
    type: "folder",
    children: [
      {
        id: 2,
        name: "Folder 1.1",
        type: "folder",

        children: [
          {
            id: 3,
            name: "File 1.1.1",
            type: "file",
          },
          {
            id: 4,
            name: "File 1.1.2",
            type: "file",
          },
          {
            id: 5,
            name: "File 1.1.3",
            type: "file",
          },
          {
            id: 6,
            name: "Folder 1.1.4",
            type: "folder",
            children: [
              {
                id: 7,
                name: "File 1.1.4.1",
                type: "file",
              },
              {
                id: 8,
                name: "File 1.1.4.2",
                type: "file",
              },
              {
                id: 9,
                name: "Folder 1.1.4.3",
                type: "folder",
                children: [
                  {
                    id: 10,
                    name: "File 1.1.4.3.1",
                    type: "file",
                  },
                  {
                    id: 11,
                    name: "File 1.1.4.3.2",
                    type: "file",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const App = () => {
  return (
    <div>
      <FileExplorer data={data} />
    </div>
  );
};

export default App;
