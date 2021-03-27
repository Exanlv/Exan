import { TranslationObject } from "../src/classes/Translator";

export const SP: TranslationObject = {
	commands: {
		base: {
			no_additional_help: 'No hay ayuda adicional disponible',
		},
		help: {
			descriptions: {
				help: 'Mostrar este menú',
				prefix: 'Mostrar el actual prefijo',
				set_prefix: 'Fijar el actual prefijo',
				dev: 'Lista en modo desarrollador para el  servidor',
				toggle_dev: 'Cambiar a modo desarrollador en el servidor',
				eval: 'Ejecutar código',
				self_assign: 'Administrar los roles autoasignables del servidor',
				self_assign_roles: 'Administrar los roles autoasignables',
				self_assign_roles_add: 'Añadir un rol autoasignable',
				self_assign_roles_remove: 'Eliminar un rol autoasignable',
				self_assign_roles_swap: 'Intercambiar la posicipón de los roles en roles',
				self_assign_categories: 'Administrar las categorías de los roles autoasignables',
				self_assign_categories_add: 'Añadir una categoría de roles',
				self_assign_categories_list: 'Lista de categoría de roles',
				self_assign_categories_roles: 'Administrar los roles de las categorías',
				self_assign_categories_roles_add: 'Añadir un rol a la categoría',
				self_assign_categories_roles_remove: 'Eliminar un rol de una categoría',
				self_assign_react: 'Administrar roles por reacción',
				self_assign_react_add: 'Añadir un rol por reacción',
				self_assign_react_remove: 'Conseguir instrucciones para eliminar un rol por reacción',
				self_assign_react_list: 'Lista de roles por reacción',
				get_role: 'Conseguir un rol',
				remove_role: 'Eliminar un rol',
				list_roles: 'Lista de roles disponibles',
				language: 'Lista de idiomas disponibles',
				language_set: 'Elejir tu idioma preferido',
				language_guild: 'Lista de idiomas disponibles',
				language_guild_set: 'Elejir idioma por defecto',
				invite: 'Conisgue un link de invitación de este bot',
				contribute: 'Aprende como contribuir a este bot',
				my_data: 'Lista de la información recolectada sobre ti',
				my_data_remove: 'Eliminar toda la información recolectada sobre ti',
				self_assign_categories_swap: 'Cambiar la posición de 2 categorías',
				privacy: 'Ver la política de privacidad',
			},
			sub_commands: 'Sub comandos:',
			commands_for: 'Comandos disponibles para :username:',
			description: 'Debajo están los comandos disponibles pata ti. Si quieres más informaciónsobre un comando en específico, usa el comando añadiendo `--help` al final. Si quieres información más detallada de los sub comandos de una categorías , usa`:command %category%` con la categoría que deseas saber más',
			not_a_category: '`:category` no es una categoría, trata usando `:command` sin ninguna palabra extra a la lista de categorías',
		},
		error: {
			internal_error: 'Error interno',
			internal_error_with_error: 'Error interno `:error`'
		},
		missing_permissions: {
			missing_permissions: '¡No tienes los permisos necesarios para usar este comando!',
		},
		unknown_command: {
			unknown_command_use_help: '¡Comando desconocido! ¡Usa :help_command para la lista de comandos!'
		},
		prefix: {
			current_prefix: 'El prefijo en uso actualmente es `:prefix`',
		},
		set_prefix: {
			prefix_too_long: 'Este prefijo es muy largo, por favor usa un prefijo no más largo que :limit characters',
			no_prefix: 'Ingresa el prefijo deseado entre corchetes, [like this], para más información \`:command\`',
			prefix_set: '¡Prefijo fijado!',
			help_example: 'Con este comando puedes cambiar el prefijo usado en el servidor. Ingresa el prefijo que se va usar entre corchetes cuando se use este comando.\nExample: \`:command [--]\`, el prefijo del bot será \`--\`',
			help_show_prefix: 'Con este comando puedes cambiar el prefijo usado en el servidor. Ingresa el prefijo que quieres que se usa entre corchetes cuando se use este comando. Elimando el --help suffix, cambiarás el prefijo del bot a \`:prefix\`',
			help_length_notice: '´Por favor ten en cuenta que el prefijo no puede ser más largo que :limit characters',
		},
		get_role: {
			no_role: 'Ningún rol otorgado',
			role_not_self_assignable: 'Este rol no es autoasignable',
			enter_role: '> Ingresar un rol',
			help: 'Usa este comando para conseguir un rol, solo añade el rol que quieres después del comando. O, si no ingresas el rol, lo puedes hacer después.',
            admin_log: 'Añadir un rol con el comando',
		},
		remove_role: {
			no_role: 'Ningún rol otorgado',
			role_not_self_assignable: 'Este rol no es autoasignable',
			enter_role: '> Ingresar un rol',
			admin_log: 'Eliminar un rol con el comando'
		},
		list_role: {
			available_roles_for_guild: 'Roles disponibles para :guild_name',
			no_self_assignable_roles: 'No hay roles autoasignables',
			no_category: 'Sin categoría',
			roles: 'Roles'
		},
		list_language: {
			list: 'Idioma actual del server: :current_server_language\nCurrent language for user: :current_user_language\nCurrent global default: :current_global_language\n\nList of available languages:\n:available_languages\n\nUse `:user_command` and enter the language name or 2 letter code to change your prefered language\nUse `:guild_command` to change the default for the current guild (admin only)',
			none: 'Ninguno'
		},
		invite_link: {
			invite_link: "¿Quieres invitar a este bot a tu propio servidor? ¡Usa el siguiente link!\n\n:link",
		},
		contribute: {
			contribute: " ¿Quieres contribuir a este bot? ¡Puedes hacerlo en el repositorio de Github!(Typescript / Eris)\n\n:link",
		},
		list_data: {
			list_data: "Toda tu información personal: \n```:data```\nTo remove your data use `:command`"
		},
		list_dev: {
			list_dev: 'El modo desarrollador para el servido está `:mode`'
		},
		set_language: {
			enter_language: '> Ingresar el idioma deseado',
			no_language: 'Ningún idioma fue otorgado',
			invalid_language: '`:language` es inválido o no soportado',
			language_set: '¡Idioma fijado!',
		},
		set_guild_language: {
			enter_language: '> Ingresar el idioma deseado',
			no_language: 'Ningún idioma fue otorgado',
			invalid_language: '`:language` es inválido o no soportado',
			language_set: '¡Idioma fijado!',
			help: 'Fija el idioma por defecto para el servidor. Añade el código del idioma/idioma que quieres desoués de este comando. O, si no ingresas el idioma, lo puedes hacer después. Por favor ten en mente que los usuariso pueden elegir su propio idioma que sobrescribirá el valor predeterminado del servidor para los comandos utilizados en ellos.'
		},
		add_category: {
			enter_name: '> Introducir el nombre de una categoría',
			limit_reached: 'Haz alcanzado el límite de :limit categories',
			no_name: 'Ningún nombre ha sido ingresado para la categoría',
			category_name_too_long: 'El nombre que ingresaste es muy largo, el máximo es :limit',
			category_already_exists: 'La categoría `:category` ya existe',
			help: 'Usando las categorías, puedes ordernar la forma en que la lista de roles se ve. Solo añade el nombre de una categoría después del comando. O, si no ingresas el nombre, lo puedes hacer después',
		},
		add_role_to_category: {
			enter_category: '> Ingresar una categoría',
			no_category: 'Ninguna categoría fue otorgada',
			category_does_not_exist: 'La categoría `:category` no existe',
			too_many_roles_in_category: '¡Hay muchos roles en esta categoría! Solo puedes tener :limit roles per category',
			enter_role: '> Ingrerar un rol\n\nTip: Añade -a al final para añadir varios roles al mismo tiempo separados en comas',
			no_role: 'Ningún rol fue otorgado',
			invalid_role: 'El rol `:role` no existe',
			role_not_self_assignable: 'El rol `:role` no es autoasignable',
			role_already_in_category: 'El rol `:role` ya está en una categoría `:category`',
			help: 'Con este comando puedes añadir roles a una categoría, añadiendo un rol a varias categorías es posible. Sola usa este comando e ingresa los detalles deseados'
		},
		list_categories: {
			no_categories: 'No hay categorías aún',
			categories_for: 'Categoría disponibles para :guild',
			categories: 'Categorías',
		},
		remove_role_from_category: {
			enter_category: '> Menciona una categoría',
			no_category: 'Ninguna categoría fue otorgada',
			category_does_not_exist: 'La categoría `:category` no existe',
			enter_role: '> Ingrerar un rol',
			no_role: 'NNingún rol fue otorgado',
			invalid_role: 'El rol `:role` no existe',
			role_not_in_category: 'El rol `:role` no está en la categoría `:category`',
			help: 'Con este comando, puedes eliminar un rol de una categoría. Sola usa el comando e ingresa los detalles deseados'
		},
		add_reaction_role: {
			enter_role: '> Selecciona un rol',
			no_role: 'Nngún rol otorgado',
			invalid_role: 'El rol `:role` no existe',
			role_not_self_assignable: 'El rol `:role` no es autoasignable',
			add_react: 'Añade la reacción que quieres al mensaje deseado',
			no_react: 'Ninguna reacción fue añadida',
			add_reaction_failed: 'Falla al añadir una reacción, por favor verifica si los permisos están configurados correctamente.',
			failed_removing_setup_react: 'Falla al eliminar tu reacción en el mensaje. Puedes eliminarla manualmente si deseas.',
			complete: '¡Rol por reacción configurado con éxito!',
			help: 'Con este comando puedes configurar los roles por reacción. Sola usa este comando y sigue los pasos dados'
		},
		remove_reaction_role: {
			info: 'Para eliminar el rol por reacción, elimina los bots que otorga ese rol.',
		},
		list_reaction_roles: {
			no_roles: 'No hay roles por reacción',
			roles_for_guild: 'Roles por reacción para :guild'
		},
		swap_categories: {
			enter_category_1: '> Ingresar la primera categoría',
			no_category_1: 'No se ingresó la primera categoría',
			invalid_category_1: 'La categoría `:category` no existe',
			enter_category_2: '> Ingresar la segunda categoría',
			no_category_2: 'No se ingresó la segunda categoría',
			invalid_category_2: 'La categoría `:category` no existe',
			enter_different_categories: 'Las categorías ingresadas son las mismas',
			help: 'Con este comando puedes cambiar el orden de las categorías mostradas en la lista de roles por intercambiando 2 categorías. Solo usa el comando e ingresa los detalles deseados '
		},
		swap_roles: {
			enter_role_1: '> Ingresar el primer rol',
			no_role_1: 'No se ingresó el primer rol',
			invalid_role_1: 'El rol `:role` no existe',
			role_1_not_self_assignable: 'El rol`:role` no es autoasignable',
			enter_role_2: '> Ingresar el segundo rol',
			no_role_2: ' No se ingresó el segundo rol',
			invalid_role_2: 'El rol `:role` no existe',
			role_2_not_self_assignable: 'El rol `:role` no es autoasignable',
			enter_different_roles: 'Los roles ingresados son los mismos',
			enter_category_or_none: '> Ingresar una categoría, \'none\' for no category', // Dont translate \`none\`
			invalid_category: '¡La categoría `:category` no existe!',
			category_does_not_have_both_roles: 'Esta categoría no cuenta con ambos roles en específico ',
			success: '¡Roles intercambiados!',
		},
		add_self_assignable_role: {
			enter_role: '> Ingresar un rol',
			no_role: 'Ningún rol otorgado',
			invalid_role: 'Rol`:role` no existe',
			role_already_self_assignable: 'El rol `:role` es ya autoasignable',
			help: 'Con este comando puedes hacer roles autoasignables. Solo añade el rol después de este comando. O, si no lo añades, puedes agregar uno después.'
		},
		remove_self_assignable_role: {
			enter_role: '> Ingresar un rol',
			no_role: 'Ningún rol otorgado',
			invalid_role: 'El rol `:role` no existe',
			role_not_self_assignable: 'El rol `:role` no es autoasignable',
			help: 'Con este comando, puedes eliminar un rol autoasignable. Solo añade el rol después del comando. O, si no añades el rol, podrás agregar uno después'
		},
	},
	reactions: {
		add_role: 'Rol añadido por reacción',
		remove_role: 'Rol removido por reacción',
		restore_role: 'Rol restaurado'
	}
}