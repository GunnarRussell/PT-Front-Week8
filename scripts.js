// Create a menu app with the following requirements:
//     Use at least one array.
//     Use at least two classes.
//     Your menu should have the options to create, view, and delete elements.


// Main menu
class Menu
{
    constructor()
    {
        this.characterList = []; //character list starts empty
    }

    showMenu() // shows the main menu options
    {
        return prompt(`
        WELCOME TO SPACE WARS
        CHOOSE FROM THE FOLLOWING:
        -------------------------------------
        1) Create New Character
        2) View Characters
        3) FIGHT IN THE SPACE WARS
        4) Exit
        `
        );
    }

    startMenu() // creates the main menu for user input
    {
        let selection = this.showMenu();
        while(selection != 4)
        {
            switch(selection)
            {
                case '1': // Create New Character
                    this.createCharacter();
                    break;
                case '2': // View Characters
                    this.viewCharacters();
                    break;
                case '3': // FIGHT IN THE SPACE WARS
                    this.spaceWars();
                    break;
                case '4': // Exit
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
            }
            selection = this.showMenu();
        }
    }

    createCharacter()
    {
        console.log("1) Create New Character");
    }

    viewCharacters()
    {
        console.log("2) View Characters");
    }

    spaceWars()
    {
        console.log("3) FIGHT IN THE SPACE WARS");
    }

}

class Character
{
    constructor(name, role, species)
    {
        this.name = name;
        this.role = role;
        this.species = species;
    }

    describe()
    {
        return `${this.name} is a ${this.species} ${this.role}.`;
    }
}

let testCharacter = new Character("Jeff", "Rogue", "Space Elf");
console.log(testCharacter.describe());
let myMenu = new Menu();
myMenu.startMenu();