# Notes of manual testing

## Test level 1 : Initial state

1. Action-1 : Navigate to web-address https://dev.reky.se/

#### _Results of action-1 should be_:

- Only step 1 among others steps will be active with 3 options of profession. While others steps will be inactive and its content will be hidden.

<sub>Example:</sub>

`1 active
Vad är ditt yrke?

Systemutvecklare Redovisningsekonom Annat yrke

2 inactive
3 inactive
4 inactive
` 

## Test level 2 : Tests of step 1

1. Action-1 : Click on any profession

#### _Results of action-1 should be_:

- Now step 1 will be hidden and step 2 will be active.
- Moreover it will show 11 clickable options of expertis.
- An active button will be displayed to go to next level
- Cirlce of step number 1 will be marked with tick symbol

<sub>Example:</sub>

`2 active
Vilka är dina specialområden? (Flerval)

.NET Java Python NodeJS PHP Wordpress HTML CSS JavaScript ReactJS Agila metoder

<Gå vidare>
`

## Test level 3 : Tests of step 2 

1. Action-1 : Click on `Gå vidare` button without clicking on any expertis

#### _Results of action-1 should be_:

- An error message should be displayed in red color

<sub>Example:</sub>

`Du måste välja minst en!`

2. Action-2 : Click on any expertis

#### _Results of action-3 should be_:

- Error message should be disappeared and expertis (clicked one) should have colored background

3. Action-3 : Click on `Gå vidare`

- Step 2 will be hidden and at the same time step 3 will be visible
- Cirlce of step number 2 will be marked with tick symbol



## Test level 4 : Tests of step 3

1. Action-1 : Click on `Gå vidare` without fill up input field

#### _Results of action-1 should be_:

- An error message should be displayed in red color

<sub>Example :</sub>

`Du måste fylla i detta fält.`

2. Action-2 : Fill up input field with Ort/Kommun and click on the `Gå vidaren` button

#### _Results of action-2 should be_:

- Step 3 will be hidden and at the same time step 4 will be visible
- Cirlce of step number 3 will be marked with tick symbol

## Test level 5 : Tests of step 4

1. Action-1 : Click on `Skicka` without fill up input field

#### _Results of action-1 should be_:

- Now 3 error messages will be shown right over ever input field

<sub>Example :</sub>

For name ,
`Du måste fylla i ett namn`

For e-post ,

`Du måste fylla i en e-postadress
Ogiltig email`

For mobilnummer ,

`Du måste fylla i ett mobilnummer
Endast siffror tillåtna`

2. Action-2: Fill up any one or two fields 

#### _Results of action-2 should be_:

- Now error message will be shown only for those fields are empty

<sub>Example (say, mobilnummer is empty):</sub>

`Du måste fylla i ett mobilnummer
Endast siffror tillåtna`

3. Action-3: Fill up e-post field with wrong format and mobilnummer with NaN value 

#### _Results of action-2 should be_:

- Now error messages will be shown over related fields

<sub>Example:</sub>

For e-post ,

`Ogiltig email`

For mobilnummer ,

`Endast siffror tillåtna`

4. Action-4: Fill up all fields with correct format and values 

#### _Results of action-2 should be_:

- An confirm message will be displayed in white color 
- Cirlce of step number 3 will be marked with tick symbol

<sub>Example:</sub>

`KLART!`