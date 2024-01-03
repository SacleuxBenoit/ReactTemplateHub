# React Template Hub Directory

This repository serves as a centralized space for creating and organizing various React components and templates.

## Folder Structure

### Creating New Templates

1. **Type-Based Organization**
    - Inside the `src` folder, create subfolders based on component types, such as `Headers`, `Footers`, `Cards`, `Forms`, etc.

3. **Template Variations**
    - Within each folder (such as Headers, Footers, etc.), categorize them into different variations. For instance:
        - `Header`
            - `firstHeader`
            - `secondHeader`
        - `Footer`
            - `basicFooter`
            - `detailedFooter`
        - ...

4. **Subfolders for Components**
    - For each variation folder (`firstHeader`, `secondHeader`, etc.) you have to create 3 files:
        - `Components`: Holds specific React components for the variation.
        - `Pages`: Reserved for relevant pages for the variation.
        - `Styles`: Contains specific style files and CSS for the variation.

### Implementing the Main Template

- within the `variations folder` > `Pages` add the className `gridTemplate` to the main `div`

### Example Folder Structure:

```plaintext
src/
|-- Headers/
|   |-- firstHeader/
|   |   |-- Components/
|   |   |-- Pages/
|   |   |-- Styles/
|   |-- secondHeader/
|   |   |-- Components/
|   |   |-- Pages/
|   |   |-- Styles/
|-- Footers/
|   |-- basicFooter/
|   |   |-- Components/
|   |   |-- Pages/
|   |   |-- Styles/
|   |-- detailedFooter/
|   |   |-- Components/
|   |   |-- Pages/
|   |   |-- Styles/
|-- Cards/
|   |-- smallCard/
|   |-- largeCard/
|-- Forms/
|   |-- contactForm/
|   |-- loginForm/
|-- ...
```

### Notes

This repo has been made via ChatGPT and will be update if needed