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
```d3.event.preventDefault()``` is enabled, so the page will not automatically refresh.  However, each of the input boxes and the drop down menu for shape are all set to update the table if you hit enter/return while an input box is active, or you change the shape in the drop-down menu.  Hitting "Refresh Table" button will also submit whichever values are in the input boxes and refresh the results table accordingly.

Since the data set is fairly small, I figured that this automatic table update would be okay.  If the dataset were much larger, I would consider setting the JS to only update the table if the "Refresh Table" button is clicked to avoid accidental changes/data loads.