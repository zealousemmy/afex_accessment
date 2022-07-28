import { SearchDiv } from "./search.style";
import { FaSearch } from "react-icons/fa";
import { withTheme } from "styled-components";

interface SearchProps {
  theme: any;
  placeholder: string;
}

const Search = ({ theme, placeholder }: SearchProps) => {
  return (
    <SearchDiv color={theme}>
      <FaSearch />
      <input type={"text"} placeholder={placeholder} />
    </SearchDiv>
  );
};

export default withTheme(Search);
