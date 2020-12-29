# Exan

# Info
Exan is a bot that allows you to manage self-assignable roles and set up reaction roles on Discord. This bot is free and opensource, no payed features or features behind a vote-wall.

# Getting started
To get started using Exan, please make sure the permissions are set up correctly.

## Minimum required permissions
 - Read messages
 - Manage roles
 - Attach files
 - Make sure the Exan role is above the roles you want to be self-assignable in the "Roles" menu on Discord Server Settings

 Please note that reaction roles functionality may not work fully without this permission

## Recommended permissions
 - Read messages
 - Manage roles
 - Manage messages
 - Attach files
 - Embed links
 - Add reactions
 - Use external emojis
 - Make sure the Exan role is above the roles you want to be self-assignable in the "Roles" menu on Discord Server Settings

If you use the invite link from the Github repo or using the `;;invite` command, these permissions (except for the role order) should already be set up autoatically.

# Making a role self-assignable
To make a certain role self-assignable, simply use the command `;;self-assign role add`, this will prompt you to enter a role.

![Add role, enter role prompt](images/role-add-prompt.png)

After entering a role, you will get a confirmation message confirming the role was made self-assignable. You can now see this role when using `;;roles`

![Add role, listing available roles](images/role-add-see-roles.png)

To confirm whether the permissions are set up correctly, attempt to self-assign the role using `;;getrole obsidian`.

![Add role, confirm permissions](images/role-add-get-role.png)

*Note that the bot reacted with 👍 to mark the command as handled*

To get rid of the role afterwards, you can use `;;removerole obsidian`

# Removing a self-assignable role
To make a certain role no longer self-assignable, simply use `;;self-assign role remove`, this will prompt you to enter a role.

![Remove role, enter role prompt](images/role-remove-prompt.png)

This will remove the role from the `;;roles` menu and make the role no longer self-assignable

Before:

![Remove role, result before](images/role-remove-result-before.png)

After: 

![Remove role, result before](images/role-remove-result.png)

*Please note that this does not remove the role from any users.*

# Changing the role order
The order of roles in the `;;roles` by default uses the order in which they were made self-assignable. If you'd like to change the order in which these are displayed, you can do so using the `;;self-assign role swap` command. This will prompt you to enter a first role, upon entering of this, you'll be prompted to enter the second role.

![Swap role, enter first](images/role-swap-enter-first.png)

After entering first role:

![Swap role, enter first](images/role-swap-enter-second.png)

This will swap places of the roles entered.

Before:

![Swap role, result before](images/role-swap-result-before.png)

After:

![Swap role, result after](images/role-swap-result-after.png)

# Categories
To further organize the `;;roles` menu, you may choose to make use of categories. Categories will be displayed in seperate sections.

To create a category, use `;;self-assign category add`. This will prompt you to enter a category name.

![Add category, enter name prompt](images/category-add-prompt.png)

After adding a category, you can check if all went well by using `;;self-assign category list` to list all categories.

![Add category, category list](images/category-add-list.png)

## Adding a role to a category
To make a role show up in a category on the `;;roles` list, you have to add it to the category first. To do this, use `;;self-assign category role add`. This will prompt you to add a category name and a role name afterwards.

![Add role to category, enter category](images/category-role-add-enter-category.png)

![Add role to category, enter role](images/category-role-add-enter-role.png)

When entering the role, you can also add multiple roles at once. If you end your message with `-a`, all roles (seperated by comma) will be added to the category.

Ex: `obsidian, ruby -a` will add both the obsidian role and the ruby role to the category. 

After this, your `;;roles` list will look something like this:

![Add role to category, result role list](images/category-role-add-result.png)