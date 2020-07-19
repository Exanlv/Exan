import { TranslationObject } from "../src/classes/Translator";

export const SP: TranslationObject = {
	commands: {
        base: {
            command_not_implemented: '¡Este comando no ha sido implementado aún!',
            no_additional_help: 'No hay ayuda adicional',
        },
        help: {
            available_commands: 'Comandos disponibles: ',
            no_description: 'Ninguna descripción disponible',
        },
        error: {
            internal_error: 'Error interno',
            internal_error_with_error: 'Error interno :error'
        },
        missing_permissions: {
            missing_permissions: '¡No tienes los permisos necesarios para usar este comando!',
        },
        unknown_command: {
            unknown_command_use_help: '¡Comando desconocido! ¡Usa :help_command para una lista de comandos!'
        },
        prefix: {
            current_prefix: 'El actual prefijo establecido es :prefix',
        },
        get_role: {
            no_role: 'Ningún rol otorgado',
            role_not_self_assignable: 'Este rol no es auto-asignable',
            enter_role: '> Añadir un rol'
        },
        remove_role: {
            no_role: 'Ningún rol otorgado',
            role_not_self_assignable: 'Este rol no es auto-asignable',
            enter_role: '> Añadir un rol'
        },
        list_role: {
            available_roles_for_guild: 'Roles disponibles para :guild_name',
            no_self_assignable_roles: 'No roles auto-asignables',
            no_category: 'Sin categoría',
            roles: 'Roles'
        },
    }
}