<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'repairSD');

/** Имя пользователя MySQL */
define('DB_USER', '9ca5de045223');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '123456789');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'kzvhltV~k)pSrTC!]=$|7UP))@Rf?lr;kDS~:l;p,6HavUF/jb3q;OnmO3bvd*M*');
define('SECURE_AUTH_KEY',  'P(,:BEVKcBG/Ie,-f{.O^WLixg[ipfvMF5E,$Ckv`T?JlPn*(^vrVy;q5V35mAFR');
define('LOGGED_IN_KEY',    '+1UQqiM^?R7=D{OTQh7KUmv} `j~Fc}VKZ0E4stdBoO5AP+,F.X#~}RNtTsXvpZQ');
define('NONCE_KEY',        ')]9CQ^f,SWYQ$RuE+<M,JzSiAAk)VAO38&CouRX_ew?RQE2VZkpQCDny|G4u:Wk1');
define('AUTH_SALT',        '91/AQB8(7w-VgiP[$PSXW9Sbe@uy]y=!E/jJWhsN86Xk)>{%B%HRZD VzpBwXC76');
define('SECURE_AUTH_SALT', ';3| ORa&7y*+U`noT:dM_Z[:$!i0(pk6*(SzgdDN-z}YL=1K;hDr?869A0Of_EfY');
define('LOGGED_IN_SALT',   '/n>y,rS5Sv<D=,<MoXBz9yD;TlkEO%-I^Xyo]kfvDUq,dYONPx%AJhWoR}c)QT?c');
define('NONCE_SALT',       ',z@+JA$?e2h(@SzRWYkCmA g~]H5g58E$z<aWjK3N5$z@W6]wCol?,2W~9ewm0?>');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
