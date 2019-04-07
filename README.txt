=== Plugin Name ===
Contributors: 
Donate link: dianasteakleyfreeman.com/support
Tags: TO DO: Add Tags
Requires at least: 3.0.1
Tested up to: 3.4
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Here is a short description of the plugin.  This should be no more than 150 characters.  No markup here.

== Description ==

Functionality that I think this plugin should have: 
 [] enable OpenDyslexic Font on all text
 [] Skip to Content
    [] if at `#content` then skip to next section (nice to have)
[] Add Font size control buttons to hook before post content
    [] position options: right, left, center, via shortcode
[] Enable High Contrast
    [] Might be theme specific -- for now, 
[] Disable Parallax

== Installation ==

This section describes how to install the plugin and get it working.


1. Upload `more-accessible-wp.php` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Place `<?php do_action('plugin_name_hook'); ?>` in your templates


== Screenshots ==

TBD

== Changelog ==
= 1.0 =
* A change since the previous version.
* Another change.

= 0.5 =
* List versions from most recent at top to oldest at bottom.

== Upgrade Notice ==

== Developers Notice ==

Lets get super clear about where everything is (I prefer object organization, but I know not everyone does.) So, to recap!. 

HTML and user-facing content can be found in the `public/*.php` files. 
Content that can be controlled or viewed by the WordPress administrator can be found in `admin/*.php`
The plugin core classes, activation/deactivation actions, etc, can be found in `includes/*.php`.

