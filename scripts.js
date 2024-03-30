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
        this.fighterList = []; //fighter list starts empty
    }

    showMainMenu() // shows the main menu options
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

    showSpeciesMenu() // shows the species menu
    {
        let species = "";
        let selection = "";
        
        // while loop for data validation
        while(selection == "")
        {
            selection = prompt(`
        Choose your character's species from the following options:

        1) Human
        2) Reptilian
        3) Space Elf
        4) Robot
            `
            );

            // switch tree for species selection
            switch(selection)
            {
                case '1': // Human
                    species = "Human";
                    break;
                case '2': // Reptilian
                    species = "Reptilian";
                    break;
                case '3': // Space Elf
                    species = "Space Elf";
                    break;
                case '4': // Robot
                    species = "Robot";
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
                    selection = "";
            }
        }
        
        return species;
    }

    showRoleMenu() // shows the class/role menu
    {
        let role = "";
        let selection = "";

        // while loop for data validation
        while(selection == "")
        {
            selection = prompt(`
        Choose your character's role from the following options:

        1) Soldier
        2) Space Wizard
        3) Criminal
        4) Clown
            `
            );

            // switch tree for role selection
            switch(selection)
            {
                case '1': // Soldier
                    role = "Soldier";
                    break;
                case '2': // Space Wizard
                    role = "Space Wizard";
                    break;
                case '3': // Criminal
                    role = "Criminal";
                    break;
                case '4': // Clown
                    role = "Clown";
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
                    selection = "";
            }
        
        }
        return role;
    }

    startMenu() // creates the main menu for user input
    {
        let selection = this.showMainMenu();
        while(selection != 4)
        {
            switch(selection)
            {
                case '1': // Create New Character
                    this.createCharacter();
                    break;
                case '2': // View Characters
                    this.showCharacterMenu();
                    break;
                case '3': // FIGHT IN THE SPACE WARS
                    this.spaceWars();
                    break;
                case '4': // Exit
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 1 and 4.");
            }
            selection = this.showMainMenu();
        }
    }

    createCharacter()
    {
        // console.log("1) Create New Character");

        let name = prompt("Enter your character's name:\n\n");
        let species = this.showSpeciesMenu();
        let role = this.showRoleMenu();

        if (role == "Soldier")
        {
            this.characterList.push(new Soldier(name, species));
        }
        else if (role == "Criminal")
        {
            this.characterList.push(new Criminal(name, species));
        }
        else if (role == "Space Wizard")
        {
            this.characterList.push(new SpaceWizard(name, species));
        }
        else if (role == "Clown")
        {
            this.characterList.push(new Clown(name, species));
        }
        else
        {
            console.log("invalid character");
        }
    }

    collectCharacters()
    {
        //determines if any characters have died in the last space wars
        for(let i = 0; i < this.characterList.length; i++)
        {
            if(this.characterList[i].HP < 1)
            {
                //and deletes them
                this.characterList.splice(i,1);
            }
        }

        //concatenates all objects in characterList array into string
        let characters = "";
        for(let i = 0; i < this.characterList.length; i++)
        {
            characters += `${i + 1}) ${this.characterList[i].describe()}\n    `;
        }
        return characters;
    }

    showCharacterMenu()
    {
        let characters = this.collectCharacters();

        let selection = prompt(`
    VIEW CHARACTERS:

    ${characters}
    Enter a character's number to inspect them, or enter 0 to exit:\n\n`);
        

        // data validation
        if(selection == '0')
        {
            // go back
            this.showMainMenu;
        }
        else if (Number.isNaN(parseInt(selection)) || selection > this.characterList.length || selection < 0)
        {
            // if selection is outside of range, give error and show menu again
            alert(`Invalid choice. Enter a number between 1 and ${this.characterList.length} or enter 0 to exit.`);
            selection = this.showCharacterMenu();
        }
        else
        {
            // correct selection
            this.inspectCharacter(selection - 1);
        }
    }

    inspectCharacter(i)
    {
        let selection = "";

        // while loop for data validation
        while(selection == "")
        {
            selection = prompt(`
        ${this.characterList[i].stats()}
            
        0) Go Back
        1) DELETE THIS CHARACTER\n\n`);

            // switch tree for role selection
            switch(selection)
            {
                case '0': // Go Back
                    this.showCharacterMenu();
                    break;
                case '1': // DELETE
                    this.characterList.splice(i,1); //splices this index out of existence
                    this.showCharacterMenu(); //look at menu again
                    break;
                default: // Invalid choice
                    alert("Invalid choice. Enter a number between 0 and 1.");
                    selection = "";
            }
        
        }
    }

    spaceWars()
    {
        let characters = this.collectCharacters();
        
        for(let i = 0; i < 2; i++)
        {
            let selection = prompt(`
    CHOOSE YOUR COMBATANTS TO FIGHT IN THE SPACE WARS:

    ${characters}
    Enter a character's number to draft them, or enter 0 to exit:\n\n`);
        

            // data validation
            if(selection == '0')
            {
                // go back
                fighterList = []; //clear the list of fighters
                this.showMainMenu;
            }
            else if (Number.isNaN(parseInt(selection)) || selection > this.characterList.length || selection < 0)
            {
                // if selection is outside of range, give error and show menu again
                alert(`Invalid choice. Enter a number between 1 and ${this.characterList.length} or enter 0 to exit.`);
                fighterList = []; //clear the list of fighters
                selection = this.spaceWars();
            }
            else
            {
                // correct selection
                this.fighterList.push(this.characterList[selection - 1]);
                // this.characterList.splice(this.characterList[selection - 1],1);

                console.log("added " + this.characterList[selection - 1].describe());
                console.log(this.fighterList);
            }
        }

        let fighter1 = this.fighterList[0];

        let fighter2 = this.fighterList[1];

        alert(`
            ${fighter1.saySomething()}

            ${fighter2.saySomething()}
            -------------------------------
            ${fighter1.name}: ${fighter1.HP} HP        ${fighter2.name}: ${fighter2.HP} HP
            `)

        while (fighter1.HP > 0 && fighter2.HP > 0 ) //as long as both fighters are still left standing, continue to fight
        {
            alert(`
            ${fighter1.attack(fighter2)}

            ${fighter2.attack(fighter1)}
            -------------------------------
            ${fighter1.name}: ${fighter1.HP} HP        ${fighter2.name}: ${fighter2.HP} HP
            `)
        }

        //calculate who wins
        if(fighter1.HP > fighter2.HP)
        {
            alert(`${fighter1.name} wins!\n${fighter2.name} has been deleted from the roster.`);
            this.characterList.find()
        }
        else if(fighter2.HP > fighter1.HP)
        {
            alert(`${fighter2.name} wins!\n${fighter1.name} has been deleted from the roster.`);
        }
        else
        {
            alert(`Nobody wins! Both fighters have been deleted from the roster! (war is hell)`);
        }

        //heal the combatants
        fighter1.HP = fighter1.maxHP;
        fighter2.HP = fighter2.maxHP;
        
    }

}

class Character
{
    constructor(name, species)
    {
        this.name = name;
        this.species = species;

        this.role = "";
        this.ability = "";
        this.HP = 10;
    }

    saySomething()
    {
        if(this.species == "Human")
        {
            return `${this.name} says "Hello!".`;
        }
        else if(this.species == "Reptilian")
        {
            return `${this.name} hisses menacingly!`;
        }
        else if(this.species == "Space Elf")
        {
            return `${this.name} appears to be offended by their opponent's presence.`;
        }
        else if(this.species == "Robot")
        {
            return `${this.name} says "beep boop".`;
        }
        else
        {
            return "";
        }
    }

    rollDice(min, max) //random number generator shamelessly stolen from MDN js documentation
    {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }

    describe()
    {
        return `${this.name}, the ${this.species} ${this.role}`;
    }

    stats()
    {
        return `${this.name}, the ${this.species} ${this.role}:
        
        HP: ${this.HP}
        Ability: ${this.ability}`;
    }

}

class Soldier extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 20;
        this.maxHP = 20;
        this.role = "Soldier";
        this.ability = "Laser Rifle: Deals 4-7 damage.";
    }

    attack(target)
    {
        let damage = this.rollDice(4, 7);
        target.HP -= damage;
        return `${this.name} shoots ${target.name} with their laser rifle, dealing ${damage} damage!`;
    }
}

class Criminal extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 15;
        this.maxHP = 15;
        this.role = "Criminal";
        this.ability = "Sneak Attack: Deals 2-5 damage, with a 25% chance to deal 3x damage.";
    }

    attack(target)
    {
        let damage =  this.rollDice(2, 5);
        let critChance =  this.rollDice(1,4);

        if(critChance == 4)
        {
            target.HP -= damage * 3;
            return `${this.name} sneaks behind ${target.name} and suprises them with a deadly sneak attack, dealing ${damage * 3} damage!`;
        }
        else
        {
            target.HP -= damage;
            return `${this.name} attacks ${target.name} with a knife, dealing ${damage} damage!`;
        }
        
    }
}

class SpaceWizard extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 10;
        this.maxHP = 10;
        this.role = "Space Wizard";
        this.ability = "Space Magic: Deals 2-5 damage, and heals self for an equal amount.";
    }

    attack(target)
    {
        let damage =  this.rollDice(2, 5);
        target.HP -= damage;
        this.HP += damage;
        return `${this.name} attacks ${target.name} with space magic, dealing ${damage} damage and healing themself for ${damage} HP!`;
    }
}

class Clown extends Character
{
    constructor(name, species)
    {
        super(name, species);

        this.HP = 10;
        this.maxHP = 10;
        this.role = "Clown";
        this.ability = "Wacky Shenanigans: Mostly useless, but may surprise you.";
    }

    attack(target)
    {
        let random =  this.rollDice(1, 10);

        if(random == 1)
        {
            return `${this.name} honks their clown nose!`;
        }
        if(random >= 2 && random <= 4)
        {
            return `${this.name} tells a joke! ${target.name} doesn't get it.`;
        }
        if(random >= 5 && random <= 7)
        {
            return `${this.name} tells a joke! ${target.name} laughs!`;
        }
        if(random == 8)
        {
            this.HP -= 1;
            return `${this.name} trips and falls in a slapstick manner! ${this.name} takes 1 damage!`;
        }
        if(random == 9)
        {
            let damage =  this.rollDice(5, 10);
            target.HP -= damage;
            return `${this.name} tells a joke! ${target.name} laughs so hard they can't breathe! ${target.name} takes ${damage} damage!`;
        }
        if(random == 10)
        {
            target.HP = 0;
            return `${this.name} smiles and snaps their fingers. In a flash of light, ${target.name} is turned into dust!`;
        }
        
    }
}

//start the game
let myMenu = new Menu();
myMenu.startMenu();