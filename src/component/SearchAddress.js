import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css"
import { address } from "../Data/province-thailand.json";

function SearchAddress({ values, onChange, name, labelKey, placeholder }) {
  return (
    <div>
      <Typeahead
        clearButton
        id={name}
        name={name}
        labelKey={(address) =>
          `${address.subdistrictName} ${address.districtName} ${address.provinceName} ${address.postCode}`
        }
        onChange={(value) => {
          if (value.length > 0) {
            onChange(value[0]);
          } else {
            onChange("");
          }
        }}
        onInputChange={(text, e) => {
          onChange("");
        }}
        options={address}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchAddress;