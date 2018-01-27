# TERMINAL

## REDIRECCIONES

- &GT; : REDIRECCIÓN DE SALIDA. CREA UN FICHERO NUEVO.
- &GT;&GT; :DOBLE REDIRECCIÓN DE S.ANEXA A UN FIHCERO.
- &lt; :REDIRIGIR LA ENTRADA.
- &lt;&lt; :HERE DOCUMENT.
- &lt;&lt;&lt; :HERE STRING.
- 2> : redirigir stderr.
- | : tubería usa en secreto un fichero anónimo

## VARIABLES

#: cantidad de parámetros

## METACARACTERES
- $: dime el valor de una variable
- \`: ejecutar un comando y sustituir por el resultado
- &: ejecuta una cosa en el segundo plano

## SISTEMAS DE FICHEROS

- $: lo que vale la variable que es una caja donde se guarda el dato.
- ~: directorio home.
- .: directorio actual.
- ..: el directorio de arriba.
- --: el fichero que reprsenta a la terminal.
- \* : Cualquier secuencias de carácteres
- ?: cualquier carácter
- [] : conjunto de selección.
- {} : combinaciones de secuencias.

## OPCIONES

- ' ': partir en palabras.
- \\ : sequencia de escape y es la kriptonita de los metacaracteres.
- "" : quitan el poder a casi todos los metas menos al $.	
- '': quitan el poder a todo el meta.

## OTROS 

- !!: el último comando.
- !\*: Los ultimos parámetros.
- \#! Shebang : intérprete con el que hay que ejecutar el archivo.

### OPERADORES LÓGICOS

- &&: and.
- ||:or.
- !: not.
