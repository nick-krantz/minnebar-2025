# Minnebar-2025

All content related to my Minnebar 2025 talk: [💎 DevTool Diamonds: Power Features You Didn’t Know Existed](https://sessions.minnestar.org/sessions/1720).

## Table of Contents

- [Minnebar-2025](#minnebar-2025)
  - [Table of Contents](#table-of-contents)
  - [Attributions](#attributions)
  - [Demo Application](#demo-application)
    - [Prerequisites](#prerequisites)
    - [Getting started](#getting-started)
    - [Environment variables](#environment-variables)
  - [Minnebar Outline](#minnebar-outline)
    - [Panels](#panels)
    - [Overriding](#overriding)
    - [Network throttling](#network-throttling)
    - [Inspecting](#inspecting)
    - [Accessibility](#accessibility)
    - [Debugging](#debugging)
    - [Styles](#styles)
    - [Misc](#misc)

## Attributions

- Maps styles inspired by [Eater](https://www.eater.com/)
- Shout to Carter Shades for the design help

## Demo Application

The demo application is comprised of a single API that returns a hardcoded set of data and an Astro application that displays the list of restaurants.

### Prerequisites

- [bun](https://bun.sh/)
- [Mapbox](https://www.mapbox.com/) api key + style urls

### Getting started

1. Clone the repo
2. Copy `apps/ui/.env.example` to `apps/ui/.env`
3. Populate the needed [Environment variables](#environment-variables)
4. Run `bun dev` from the root of the repo

### Environment variables
| Name                     | Description                      | Default                 |
| ------------------------ | -------------------------------- | ----------------------- |
| `MAPBOX_KEY`             | Mapbox API key                   | none                    |
| `MAPBOX_STYLE_KEY_LIGHT` | URL for light mode Mapbox styles | none                    |
| `MAPBOX_STYLE_KEY_DARK`  | URL for dark mode Mapbox styles  | none                    |
| `API_URL`                | URL for the API                  | `http://localhost:3000` |

## Minnebar Outline

### Panels

- Opening DevTools
  - `cmd + option + i`
- Opening Drawer
  - `escape` or through the three dots menu (chrome only)
- Moving Panels
  - `ctrl click` on the panel and select `Move to top/bottom` (chrome only)
  - Drag the panel left/right
- DevTools inception
  - Undock the panel and use the `cmd + option + i` to open the DevTools of the DevTools

### Overriding

- Overriding headers
  1. `ctrl click` on the request 
  1. Select location for overrides to be stored
  1. Add `Access-Control-Allow-Origin` as key and `*` as value
- Overriding content/response
  1. Locate the desired file in the `Network` tab
  1. Right click on the file and select `Override content`
  1. Alter the file as needed, then save the file

### Network throttling

- `Network` tab > `throttle` dropdown
- Adding custom profile: `throttle` dropdown > `Add...`

### Inspecting

- Selecting an element
  - `ctrl click` > `inspect`
  - `cmd + option + c` > `select an element`
  - UI button
- Aliased query selectors
  - `$` for `document.querySelector`
  - `$$` for `document.querySelectorAll`
- Selected elements in the DOM are aliased to `$0`
  - Previous elements are aliased to `$1`, `$2`, etc.
- Grid/Flexbox overlays
  1. `ctrl click` on the element > `Toggle grid/flexbox overlay`
  1. Click on the grid/flexbox badge in the Elements tab

### Accessibility

- Enable accessibility tree
  1. Select an element 
  1. Select `Accessibility` tab
  1. Enable full-page accessibility tree
- To see full accessibility tree 
  1. `Elements` tab 
  1. Person Icon to see full accessibility tree

- Visual Screen Reader order
  - Select "Show source order" in accessibility tab for an element
- Visualize tab order (FireFox)
  - `cmd + option + i` > `Accessibility` tab > `Show Tabbing Order`

- Live expression
  - Console tab > "eye" icon

### Debugging

- Inspect event listeners
  1. Select an element
  1. On the right hand side, select the `Event Listeners` tab
  1. Expand the event listeners to see the source of the listener

- Breakpoints
  1. Open the desired file in the `Sources` tab or use the `cmd + p` shortcut to open a specific file
  1. Select the line number to add a breakpoint
- Conditional breakpoints
  1. `ctrl click` on the line number and select `Add conditional breakpoint`
  1. Enter the condition for the breakpoint

### Styles

- Light and Dark mode
  - From the `styles` of an inspected element, select the paint brush icon and select the light or dark mode.
  - Use the command prompt to toggle between light and dark mode. `cmd + shift + p` > `Toggle light/dark mode`
- Inspect color contrast
  - Select the color swatch in the `Styles` tab
  - See the contrast ratio
- In the same dialog as the color swatch, select the eye dropper to choose a color from the screen

### Misc

- Use builtin `copy` command within the console to copy a value to the clipboard
- Use `console.table` to display an array of objects in a table format
- Snippets
  1. Within the `Sources` tab, select the `Snippets` tab
  1. Create a new snippet and write the code you want to save or run
  1. Run the snippet by right clicking on it and selecting `Run`
- Capture a node screenshot
  1. Select the element you want to capture
  1. Right click on the element and select `Capture node screenshot`
- Capture a full page screenshot
  1. `cmd + shift + p` > `Capture full size screenshot`
- Outline all elements on the page
  1. Within the `Styles` tab, select the "+" icon to add a styling
  1. Alter the CSS selector to be `*` to select all elements
  1. Add the following style: `outline: 1px solid red;`
