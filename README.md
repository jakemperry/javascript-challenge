# JavaScript Challenge
_**or**_

The Truth Is Out There: A Compelling Argument for N>1 in the Milky Way According to The [Drake Equation](https://en.wikipedia.org/wiki/Drake_equation).

## Overview

This project uses javascript to pull data from a JSON of UFO sightings and presents the data in a summary table.  There are two levels for this project:

|Level|Description|
|---|---|
|Level 1|Filter the data using date only|
|Level 2|Filter the data based on date, city, state, country, and shape|

Filters can be applied by entering text into the input fields and hitting the "Refresh Table" button.  For shapes, there is a drop-down menu of options for shapes.  "Any Shape" will remove filters based on shape, selecting a single shape from the drop-down menu allows filtering for that shape.

## Good to Know
There are some issues with the event handling where hitting the enter/return key while entering text in the Level 1 date box will refresh the page without updating the table (and will also remove whatever date was entered into the input box).  It is unclear why the input box still responds to hitting the enter/return key when ```d3.event.preventDefault()``` is enabled.