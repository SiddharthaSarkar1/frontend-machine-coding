import React, { useState } from "react";
import InputText from "./input-text/InputText.jsx";
import Button from "./button/Button.jsx";
import Suggestions from "./suggestions/suggestions.jsx";

const ButtonLabel = "Clear";

const AutoComplete = ({ suggestions, onChange = () => {} }) => {
  const [query, setQuery] = useState("");
  const [showlist, setShowlist] = useState(false);

  const handleQueryChange = (value) => {
    setQuery(value);
    setShowlist(true);
    onChange(value);
  };

  const handleSuggestionSelect = (selectedSuggestion) => {
    setQuery(selectedSuggestion);
    onChange(selectedSuggestion);
    setShowlist(false);
  };

  const handleClear = () => {
    setQuery("");
  };

  const filteredQuery = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="autocomplete">
      <div className="autocomplete__input">
        <InputText value={query} onChange={handleQueryChange} />
        <Button label={ButtonLabel} onClick={handleClear} />
      </div>

      {!!query.length && showlist && (
        <Suggestions
          suggestions={filteredQuery}
          onSelect={handleSuggestionSelect}
          selectedSuggestion={query}
        />
      )}
    </div>
  );
};

export default AutoComplete;
