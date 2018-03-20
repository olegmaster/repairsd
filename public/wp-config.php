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
define('DB_NAME', 'ocrepairs-wp-A1tP452r');

/** Имя пользователя MySQL */
define('DB_USER', 'nsA11L4v0ynH');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '12345678');

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
define('AUTH_KEY',         '0e1&*(3/^W)RcC^xfLnvcFd3E-to}.:l;Bw^S?Tp]JBQ0N|nW&ZAPr%~?Kt*6)lT');
define('SECURE_AUTH_KEY',  'sAUl;!tlyD>mWnMp^hH]w90hq6)SQHL#cau9nFQzZYd=c`p>R(VPFv;1NregOH-m');
define('LOGGED_IN_KEY',    'XO!Xyjo#%)XxCdY^Tv1 ,5T:>Xy:M!Ucl()MTKC|ZEz~wqe*s:tjqgC2]>#9^Iws');
define('NONCE_KEY',        'uG7c)~ATkgEc_P}| FMZa+IuRR`}=`f,,j-tRLvWFX3FDm3:c=gZImh}mqiuaD5{');
define('AUTH_SALT',        ')h[Y-5E,Jt>=l6*`QSFI0~$$$b:-f<9[Z+[N+0l.& d/a2)q>~8kXGm#VQ(56bGS');
define('SECURE_AUTH_SALT', 'AA``so0}aG%!Ap,8cQ/6TM_4@I0oDpUu/*92]&Kg?=dYHa/vKf5poUe*0@mN-)r!');
define('LOGGED_IN_SALT',   '`Rh#O1*|l#8JH?B7eC/5PsRs:^k6Fn]dJN2]Fv6grlU;nH0N$:g4P-&Bi8J4K+/!');
define('NONCE_SALT',       '&/c#/RMW4~ytz(_{DkXLXiw hl3#=gnYR4=,QXp*BUW%d0TiRa`V;mHm:,i+sj5@');

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
