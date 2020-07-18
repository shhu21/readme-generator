# Professional README Generator

# Demo
[Demo Video](https://drive.google.com/file/d/1yXG5M7Ustq3eNsSlza1skXjHbIc2xlw-/preview)

# Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [User's Guide](#users-guide)
* [Testing](#testing)


# Description
Creates a professional README using user input from the command line.

# Installation
1. Clone the repository.
2. Run `npm install` in the command line to install the dependancies.
3. Navigate to the *Develop* directory.
4. Run `node index.js` in the command line to start the program.

# User's Guide
As mentioned in the [Installation](#installation) instructions, run `node index.js` to start the program. The generated README will contain the name of the user's repository, a badge of the chosen license, a table of contents, and the listed sections with their respective content that is inputted by the user. (See below for a list of each user prompt.) After all the prompts are completed, the user can find the generated README in the *Develop* directory of the repository with the name *README.md*. View the [Demo](#demo) for a video walkthrough of the program. </br>

The README Generator takes a total of 10 inputs from the user:  </br>
*Note: Required fields will be continously prompted until a passable value is inputted and optional fields may be passed as empty.  If an optional field is left empty, then the section title will still be listed in the README, but with no description below (as seen in the Demo for the Testing prompt).*

1. Repository Name
> Type: Input string. </br>
> Required.

2. GitHub Username
> Type: Input string. </br>
> Required. </br>
> Additonal Note: Can be seen listed under the *Contact* section.

3. Email
> Type: Input string. </br>
> Required. </br>
> Additonal Note: A basic authenticity check is done on the inputted email to see if the user input includes a `@` symbol.  Can be seen listed under the *Contact* section.

4. Description
> Type: Input string. </br>
> Optional.

5. Installation Instructions
> Type: Input string. </br>
> Optional.

6. Usage Instructions
> Type: Input string. </br>
> Optional.

7. Contributing Instructions
> Type: Input string. </br>
> Optional.

8. Testing Instructions
> Type: Input string. </br>
> Optional.

9. License
> Type: List. </br>
> Required.
> Additonal Note: A badge for the license is listed below the name of the repository in the generated README.

10. Contact Information
> Type: Input string. </br>
> Optional.

# Testing
Testing may be executed by following the [Installation](#installation) and [User's Guide](#users-guide) instructions to run the program, then inputting any test values.
