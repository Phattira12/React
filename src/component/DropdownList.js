import React from "react";
import Select from "react-select";

export default function DropdownList(props) {
  return (
    <Select
      {...props}
      theme={(theme) => ({
        ...theme,
        borderRadius: 12,
        padding: 42,
        colors: {
          ...theme.colors,
          primary25: "#6777EF",
          primary: "#6777EF",
        },
      })}
      styles={{
        menu: (provided, state) => ({
          ...provided,
          borderBottom: "0px",
          color: state.selectProps.menuColor,
          padding: 1.8,
          borderRadius: 5,
        }),
        multiValue: (styles, { data }) => {
          return {
            ...styles,
            backgroundColor: "#afb8ff",
          };
        },
        multiValueLabel: (styles, { data }) => ({
          ...styles,
          color: " #2237d6",
          fontWeight: "bold",
        }),
        multiValueRemove: (styles, { data }) => ({
          ...styles,
          color: "white",
          fontWeight: "bold",
          ":hover": {
            backgroundColor: "#afb8ff",
            color: "red",
          },
        }),
        control: (provided, state) => ({
          ...provided,
          // none of react-select's styles are passed to <Control />
          border: "1px solid #6777ef",
          padding: 2.5,
          "&:hover": {
            border: "1px solid #6777ef",
          },
          boxShadow: "none",
        }),
        option: (provided, state) => ({
          ...provided,
          borderRadius: 5,
          marginTop: 1.5,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#acb5ef",
          },
        }),
      }}
      noOptionsMessage={() => "ไม่พบข้อมูล"}
    />
  );
}