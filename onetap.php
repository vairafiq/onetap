<?php
/**
 * oneTap
 *
 * @package           oneTap
 * @author            Exlac
 * @copyright         2022 Exlac
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       oneTap - Easy Google Sign In Prompt
 * Plugin URI:        https://wordpress.org/plugins/onetap/
 * Description:       Smartly add Google One Tap sign in to your website and get maximus lead and siginup.
 * Version:           1.0.2
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Exlac
 * Author URI:        https://exlac.com/
 * Text Domain:       onetap
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Update URI:        https://wordpress.org/plugins/onetap/
 */

require dirname( __FILE__ ) . '/vendor/autoload.php';
require dirname( __FILE__ ) . '/app.php';

if ( ! function_exists( 'oneTap' ) ) {
    function oneTap() {
        return oneTap::get_instance();
    }
}
oneTap();

