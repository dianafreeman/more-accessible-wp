<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       dianasteakleyfreeman.com
 * @since      1.0.0
 *
 * @package    More_Accessible_Wp
 * @subpackage More_Accessible_Wp/public/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->

<div id="accessibility-controls" class="navbar navbar-expand-md bg-dark">
            <a class="btn btn-round skip-link access-control"
                href="#content"
                data-toggle="tooltip" data-placement="right" 
                title="Skip to content"><i class="fas fa-chevron-down"></i><span class="sr-only"> <?php esc_html_e( 'Skip to content', 'diana-simple' ); ?></span>
            </a>

            <a id="dyslexia-toggle" class="btn btn-round skip-link access-control"
                data-toggle="tooltip" data-placement="right" 
                title="Adjust Font For Dyslexia"><i class="fas fa-font"></i><span class="sr-only"> <?php esc_html_e( 'Adjust font for Dyslexia', 'diana-simple' ); ?></span>
     </a>
</div>
