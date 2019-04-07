<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              dianasteakleyfreeman.com
 * @since             1.0.0
 * @package           More_Accessible_Wp
 *
 * @wordpress-plugin
 * Plugin Name:       More Accessible WP
 * Plugin URI:        https://github.com/dianafreeman/more-accessible-wp.git
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Diana M. Steakley-Freeman
 * Author URI:        dianasteakleyfreeman.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       more-accessible-wp
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'MORE_ACCESSIBLE_WP_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-more-accessible-wp-activator.php
 */
function activate_more_accessible_wp() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-more-accessible-wp-activator.php';
	More_Accessible_Wp_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-more-accessible-wp-deactivator.php
 */
function deactivate_more_accessible_wp() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-more-accessible-wp-deactivator.php';
	More_Accessible_Wp_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_more_accessible_wp' );
register_deactivation_hook( __FILE__, 'deactivate_more_accessible_wp' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-more-accessible-wp.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_more_accessible_wp() {

	$plugin = new More_Accessible_Wp();
	$plugin->run();

}
run_more_accessible_wp();

//  assumes that the navigation menu has a fixed top
function hook_accessibility_header ( ) {
	$str = include plugin_dir_path(__FILE__).'public/partials/more-accessible-wp-public-display.php';
    return '<div class="fixed-top">'.$str; // this div should end _after_ the nav menu
};
add_action('wp_head','hook_accessibility_header',10,1);
