import React, { useState } from 'react';
import { Select, Input, VStack } from '@chakra-ui/react';

interface SelectWithSearchProps {
  options: string[];
}

const SelectWithSearch: React.FC<SelectWithSearchProps> = ({ options }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Select
        placeholder="Select option"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {filteredOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </VStack>
  );
};

// Exemplo de uso
const options: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"];

function SelectSearch() {
  return (
    <div>
      <SelectWithSearch options={options} />
    </div>
  );
}

export default SelectSearch;
