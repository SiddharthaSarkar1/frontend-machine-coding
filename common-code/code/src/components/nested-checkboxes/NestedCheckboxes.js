import React, { useState } from "react";
import "./styles.css";

const checkboxData = [
  {
    id: 1,
    name: "Fruit",
    children: [
      {
        id: 2,
        name: "Citrus",
        children: [
          { id: 3, name: "Orange" },
          { id: 4, name: "Lemon" },
          { id: 5, name: "Lime" },
          { id: 6, name: "Grapefruit" },
        ],
      },
      {
        id: 7,
        name: "Berries",
        children: [
          { id: 8, name: "Strawberry" },
          { id: 9, name: "Blueberry" },
          { id: 10, name: "Raspberry" },
          { id: 11, name: "Blackberry" },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Alkaline",
    children: [
      { id: 13, name: "Spinach" },
      { id: 14, name: "Kale" },
      { id: 15, name: "Avocado" },
      { id: 16, name: "Cucumber" },
    ],
  },
  {
    id: 17,
    name: "Tropical",
    children: [
      { id: 18, name: "Mango" },
      { id: 19, name: "Pineapple" },
      { id: 20, name: "Papaya" },
      { id: 21, name: "Banana" },
    ],
  },
  {
    id: 22,
    name: "Roots",
    children: [
      { id: 23, name: "Carrot" },
      { id: 24, name: "Beetroot" },
      { id: 25, name: "Turnip" },
      { id: 26, name: "Radish" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  function handleChange(isChecked, node) {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      //if childrens are present, check them all
      const updateChildren = (node) => {
        node.children.forEach((child) => {
          newState[child.id] = isChecked;
          if (child.children) {
            updateChildren(child);
          }
        });
      };
      if (node.children) {
        updateChildren(node);
      }

      const verifyChecked = (node) => {
        if (!node.children) {
          return newState[node.id] || false;
        }
        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkboxData.forEach((node) => verifyChecked(node));

      return newState;
    });
  }

  console.log(checked);

  return (
    <>
      {data.map((node) => {
        return (
          <div className="parent" key={node.id}>
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <span>{node.name}</span>
            {node.children && (
              <Checkboxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default function NestedCheckboxes() {
  const [checked, setChecked] = useState({});
  return (
    <div className="NestedCheckboxes">
      <Checkboxes
        data={checkboxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}


