import React from "react";
import Button from "../button/Button.jsx";

const Suggestions = ({ suggestions, onSelect, selectedSuggestion }) => {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion, index) => (
        <ListItem
          selectedSuggestion={selectedSuggestion}
          key={index}
          suggestion={suggestion}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Suggestions;

const ListItem = ({ suggestion, onSelect, selectedSuggestion }) => {
  const handleSelect = () => {
    onSelect(suggestion);
  };

  return (
    <Button
      data-selected={
        suggestion.toLowerCase() === selectedSuggestion.toLowerCase()
      }
      label={suggestion}
      onClick={handleSelect}
    />
  );
};
